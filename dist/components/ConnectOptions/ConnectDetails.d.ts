import { WalletConnector } from '../../wallets/useWalletConnectors';
import { WalletStep } from './DesktopOptions';
export declare function GetDetail({ getMobileWallet, }: {
    getMobileWallet: (walletId: string) => void;
}): any;
export declare function ConnectDetail({ changeWalletStep, connectionError, qrCodeUri, reconnect, wallet, }: {
    connectionError: boolean;
    qrCodeUri?: string;
    reconnect: (wallet: WalletConnector) => void;
    changeWalletStep: (newWalletStep: WalletStep) => void;
    wallet: WalletConnector;
}): any;
export declare function DownloadDetail({ changeWalletStep, wallet, }: {
    changeWalletStep: (newWalletStep: WalletStep) => void;
    wallet: WalletConnector;
}): any;
export declare function InstructionDetail({ connectWallet, wallet, }: {
    connectWallet: (wallet: WalletConnector) => void;
    wallet: WalletConnector;
}): any;
