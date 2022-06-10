import { ReactNode } from 'react';
import { ThemeVars } from '../../css/sprinkles.css';
import { DisclaimerComponent } from './AppContext';
import { AvatarComponent } from './AvatarContext';
import { RainbowKitChain } from './RainbowKitChainContext';
export declare const useThemeRootProps: () => {
    "data-rk": string;
};
export declare type Theme = ThemeVars | {
    lightMode: ThemeVars;
    darkMode: ThemeVars;
};
export interface RainbowKitProviderProps {
    chains: RainbowKitChain[];
    id?: string;
    children: ReactNode;
    theme?: Theme | null;
    showRecentTransactions?: boolean;
    appInfo?: {
        appName?: string;
        learnMoreUrl?: string;
        disclaimer?: DisclaimerComponent;
    };
    coolMode?: boolean;
    avatar?: AvatarComponent;
}
export declare function RainbowKitProvider({ chains, id, theme, children, appInfo, showRecentTransactions, coolMode, avatar, }: RainbowKitProviderProps): any;