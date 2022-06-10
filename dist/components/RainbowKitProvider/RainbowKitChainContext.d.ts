import { Chain as WagmiChain } from 'wagmi';
export interface RainbowKitChain {
    id: number;
    iconUrl?: string | (() => Promise<string>) | null;
    iconBackground?: string;
}
export declare type Chain = WagmiChain & RainbowKitChain;
export declare const RainbowKitChainContext: any;
export declare const useRainbowKitChains: () => any;
export declare const useRainbowKitChainsById: () => any;
