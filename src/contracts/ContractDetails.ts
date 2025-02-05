export const CONTRACT_ADDRESS = "0xfb7b6fde9dFC825943c7d5c701E449484E8B17f4"
export const CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_genre",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_timePeriod",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_worldDescription",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_minStake",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_characterCount",
                "type": "uint256"
            }
        ],
        "name": "createStory",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_stakeToken",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "storyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "characterId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            }
        ],
        "name": "CharacterSelected",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "storyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "characterId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "decision",
                "type": "string"
            }
        ],
        "name": "DecisionMade",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_storyId",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "_survivingCharacterIds",
                "type": "uint256[]"
            }
        ],
        "name": "distributeRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_storyId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_characterId",
                "type": "uint256"
            }
        ],
        "name": "eliminateCharacter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_storyId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_characterId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_decision",
                "type": "string"
            }
        ],
        "name": "makeDecision",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "storyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address[]",
                "name": "winners",
                "type": "address[]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "reward",
                "type": "uint256"
            }
        ],
        "name": "RewardsDistributed",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_storyId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_characterId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_stakeAmount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_characterDetails",
                "type": "string"
            }
        ],
        "name": "selectCharacter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "storyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "genre",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            }
        ],
        "name": "StoryCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "currentStoryId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "stakeToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "stories",
        "outputs": [
            {
                "internalType": "string",
                "name": "genre",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "timePeriod",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "worldDescription",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalStaked",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "minStake",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "characterCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "STORY_DURATION",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "storyCharacterCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "storyCharacters",
        "outputs": [
            {
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "stakedAmount",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isAlive",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "characterDetails",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]