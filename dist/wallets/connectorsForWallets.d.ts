import { ConnectorArgs } from './Wallet';
export declare const connectorsForWallets: (walletList: {
    groupName: string;
    wallets: import("./Wallet").Wallet<any>[];
}[]) => (connectorArgs: ConnectorArgs) => any[];
