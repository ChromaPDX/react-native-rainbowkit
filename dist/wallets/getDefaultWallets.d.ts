export declare const getDefaultWallets: ({ appName, chains, }: {
    appName: string;
    chains: any[];
}) => {
    connectors: (connectorArgs: import("./Wallet").ConnectorArgs) => any[];
    wallets: {
        groupName: string;
        wallets: import("./Wallet").Wallet<any>[];
    }[];
};
