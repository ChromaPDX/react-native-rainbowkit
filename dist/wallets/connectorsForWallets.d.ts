import { ConnectorArgs, WalletList } from './Wallet';
export declare const connectorsForWallets: (walletList: WalletList) => (connectorArgs: ConnectorArgs) => Connector[];
