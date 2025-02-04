// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DestinyDAO is ReentrancyGuard, Ownable {
    IERC20 public stakeToken;

    struct Story {
        string genre;
        string timePeriod;
        string worldDescription;
        uint256 startTime;
        uint256 endTime;
        uint256 totalStaked;
        bool isActive;
        uint256 minStake;
        uint256 characterCount;
    }

    struct Character {
        address player;
        uint256 stakedAmount;
        bool isAlive;
        string characterDetails;
    }

    mapping(uint256 => Story) public stories;
    mapping(uint256 => mapping(uint256 => Character)) public storyCharacters; // storyId => characterId => Character
    mapping(uint256 => uint256) public storyCharacterCount;

    uint256 public currentStoryId;
    uint256 public constant STORY_DURATION = 7 days;

    event StoryCreated(
        uint256 indexed storyId,
        string genre,
        uint256 startTime
    );
    event CharacterSelected(
        uint256 indexed storyId,
        uint256 characterId,
        address player
    );
    event DecisionMade(
        uint256 indexed storyId,
        uint256 characterId,
        string decision
    );
    event RewardsDistributed(
        uint256 indexed storyId,
        address[] winners,
        uint256 reward
    );

    constructor(address _stakeToken) Ownable(msg.sender) {
        stakeToken = IERC20(_stakeToken);
    }

    function createStory(
        string memory _genre,
        string memory _timePeriod,
        string memory _worldDescription,
        uint256 _minStake,
        uint256 _characterCount
    ) external onlyOwner {
        currentStoryId++;

        stories[currentStoryId] = Story({
            genre: _genre,
            timePeriod: _timePeriod,
            worldDescription: _worldDescription,
            startTime: block.timestamp,
            endTime: block.timestamp + STORY_DURATION,
            totalStaked: 0,
            isActive: true,
            minStake: _minStake,
            characterCount: _characterCount
        });

        emit StoryCreated(currentStoryId, _genre, block.timestamp);
    }

    function selectCharacter(
        uint256 _storyId,
        uint256 _characterId,
        uint256 _stakeAmount,
        string memory _characterDetails
    ) external nonReentrant {
        require(stories[_storyId].isActive, "Story not active");
        require(
            _stakeAmount >= stories[_storyId].minStake,
            "Insufficient stake"
        );
        require(
            storyCharacters[_storyId][_characterId].player == address(0),
            "Character already selected"
        );

        stakeToken.transferFrom(msg.sender, address(this), _stakeAmount);

        storyCharacters[_storyId][_characterId] = Character({
            player: msg.sender,
            stakedAmount: _stakeAmount,
            isAlive: true,
            characterDetails: _characterDetails
        });

        stories[_storyId].totalStaked += _stakeAmount;
        storyCharacterCount[_storyId]++;

        emit CharacterSelected(_storyId, _characterId, msg.sender);
    }

    function makeDecision(
        uint256 _storyId,
        uint256 _characterId,
        string memory _decision
    ) external {
        require(
            storyCharacters[_storyId][_characterId].player == msg.sender,
            "Not character owner"
        );
        require(
            storyCharacters[_storyId][_characterId].isAlive,
            "Character not alive"
        );
        require(stories[_storyId].isActive, "Story not active");

        emit DecisionMade(_storyId, _characterId, _decision);
    }

    function eliminateCharacter(
        uint256 _storyId,
        uint256 _characterId
    ) external onlyOwner {
        require(stories[_storyId].isActive, "Story not active");
        storyCharacters[_storyId][_characterId].isAlive = false;
    }

    function distributeRewards(
        uint256 _storyId,
        uint256[] memory _survivingCharacterIds
    ) external onlyOwner {
        require(
            block.timestamp >= stories[_storyId].endTime,
            "Story not ended"
        );
        require(stories[_storyId].isActive, "Story already concluded");

        stories[_storyId].isActive = false;
        uint256 totalReward = stories[_storyId].totalStaked;
        uint256 survivorCount = _survivingCharacterIds.length;
        uint256 rewardPerSurvivor = totalReward / survivorCount;

        address[] memory winners = new address[](survivorCount);

        for (uint256 i = 0; i < survivorCount; i++) {
            Character memory survivor = storyCharacters[_storyId][
                _survivingCharacterIds[i]
            ];
            require(survivor.isAlive, "Character not alive");

            stakeToken.transfer(survivor.player, rewardPerSurvivor);
            winners[i] = survivor.player;
        }

        emit RewardsDistributed(_storyId, winners, rewardPerSurvivor);
    }
}
