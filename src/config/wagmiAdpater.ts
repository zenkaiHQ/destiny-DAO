import { cookieStorage, createStorage } from "@wagmi/core"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import { arbitrumSepolia } from "@reown/appkit/networks"

export const projectId = "7876f3ab744cc5f29a3bbdff3ed755e8";


export const networks = [arbitrumSepolia];

export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage
    }),
    ssr: true,
    projectId,
    networks
})

export const config = wagmiAdapter.wagmiConfig;