import { cookieStorage, createStorage } from "@wagmi/core"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import { mainnet, arbitrumSepolia, arbitrum } from "@reown/appkit/networks"

export const projectId = process.env.REOWN_PROJECT_ID as string;

if (projectId == '')
    throw new Error('Project ID is not defined');

export const networks = [mainnet, arbitrumSepolia, arbitrum];

export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage
    }),
    ssr: true,
    projectId,
    networks
})

export const config = wagmiAdapter.wagmiConfig;