export declare const wallet: {
    argent: ({ chains }: import("./argent/argent").ArgentOptions) => import("../Wallet").Wallet<any>;
    brave: ({ chains, shimDisconnect }: import("./brave/brave").BraveOptions) => import("../Wallet").Wallet<any>;
    coinbase: ({ appName, chains }: import("./coinbase/coinbase").CoinbaseOptions) => import("../Wallet").Wallet<any>;
    imToken: ({ chains }: import("./imToken/imToken").ImTokenOptions) => import("../Wallet").Wallet<any>;
    injected: ({ chains, shimDisconnect, }: import("./injected/injected").InjectedOptions) => import("../Wallet").Wallet<any>;
    ledger: ({ chains }: import("./ledger/ledger").LedgerOptions) => import("../Wallet").Wallet<any>;
    metaMask: ({ chains, shimDisconnect, }: import("./metaMask/metaMask").MetaMaskOptions) => import("../Wallet").Wallet<any>;
    rainbow: ({ chains }: import("./rainbow/rainbow").RainbowOptions) => import("../Wallet").Wallet<any>;
    steak: ({ chains }: import("./steak/steak").SteakOptions) => import("../Wallet").Wallet<any>;
    trust: ({ chains }: import("./trust/trust").TrustOptions) => import("../Wallet").Wallet<any>;
    walletConnect: ({ chains }: import("./walletConnect/walletConnect").WalletConnectOptions) => import("../Wallet").Wallet<any>;
};
