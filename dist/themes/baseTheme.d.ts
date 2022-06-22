declare const fontStacks: any;
declare type FontStack = keyof typeof fontStacks;
declare type RadiusScale = 'large' | 'medium' | 'small' | 'none';
declare type Blurs = 'large' | 'small' | 'none';
interface BaseThemeOptions {
    borderRadius?: RadiusScale;
    fontStack?: FontStack;
    overlayBlur?: Blurs;
}
export declare const baseTheme: ({ borderRadius, fontStack, overlayBlur, }: BaseThemeOptions) => Pick<{
    colors: {
        accentColor: string;
        accentColorForeground: string;
        actionButtonBorder: string;
        actionButtonBorderMobile: string;
        actionButtonSecondaryBackground: string;
        closeButton: string;
        closeButtonBackground: string;
        connectButtonBackground: string;
        connectButtonBackgroundError: string;
        connectButtonInnerBackground: string;
        connectButtonText: string;
        connectButtonTextError: string;
        connectionIndicator: string;
        error: string;
        generalBorder: string;
        generalBorderDim: string;
        menuItemBackground: string;
        modalBackdrop: string;
        modalBackground: string;
        modalBorder: string;
        modalText: string;
        modalTextDim: string;
        modalTextSecondary: string;
        profileAction: string;
        profileActionHover: string;
        profileForeground: string;
        selectedOptionBorder: string;
        standby: string;
    };
    fonts: {
        body: string;
    };
    radii: {
        actionButton: string;
        connectButton: string;
        menuButton: string;
        modal: string;
        modalMobile: string;
    };
    shadows: {
        connectButton: string;
        dialog: string;
        profileDetailsAction: string;
        selectedOption: string;
        selectedWallet: string;
        walletLogo: string;
    };
    blurs: {
        modalOverlay: string;
    };
}, "radii" | "fonts" | "blurs">;
export interface AccentColor {
    accentColor: string;
    accentColorForeground: string;
}
export declare type AccentColorPreset = 'blue' | 'green' | 'red' | 'purple' | 'pink' | 'orange';
export interface ThemeOptions extends BaseThemeOptions {
    accentColor?: string;
    accentColorForeground?: string;
}
export {};
