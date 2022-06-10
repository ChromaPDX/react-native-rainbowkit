export declare const wallet: {
    argent: ({ chains }: import("./argent/argent").ArgentOptions) => import("../Wallet").Wallet<Connector>;
    brave: ({ chains, shimDisconnect }: import("./brave/brave").BraveOptions) => import("../Wallet").Wallet<Connector>;
    coinbase: ({ appName, chains }: import("./coinbase/coinbase").CoinbaseOptions) => import("../Wallet").Wallet<Connector>;
    imToken: ({ chains }: import("./imToken/imToken").ImTokenOptions) => import("../Wallet").Wallet<Connector>;
    injected: ({ chains, shimDisconnect, }: import("./injected/injected").InjectedOptions) => import("../Wallet").Wallet<Connector>;
    ledger: ({ chains }: import("./ledger/ledger").LedgerOptions) => import("../Wallet").Wallet<Connector>;
    metaMask: ({ chains, shimDisconnect, }: import("./metaMask/metaMask").MetaMaskOptions) => import("../Wallet").Wallet<Connector>;
    rainbow: ({ chains }: import("./rainbow/rainbow").RainbowOptions) => import("../Wallet").Wallet<Connector>;
    steak: ({ chains }: import("./steak/steak").SteakOptions) => import("../Wallet").Wallet<Connector>;
    trust: ({ chains }: import("./trust/trust").TrustOptions) => import("../Wallet").Wallet<Connector>;
    walletConnect: ({ chains }: import("./walletConnect/walletConnect").WalletConnectOptions) => import("../Wallet").Wallet<Connector>;
};
