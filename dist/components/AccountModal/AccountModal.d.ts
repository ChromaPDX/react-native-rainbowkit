/// <reference types="react" />
import { useAccount, useBalance, useEnsAvatar, useEnsName } from 'wagmi';
export interface AccountModalProps {
    accountData: ReturnType<typeof useAccount>['data'];
    balanceData: ReturnType<typeof useBalance>['data'];
    ensAvatar: ReturnType<typeof useEnsAvatar>['data'];
    ensName: ReturnType<typeof useEnsName>['data'];
    open: boolean;
    onClose: () => void;
    onDisconnect: () => void;
}
export declare function AccountModal({ accountData, balanceData, ensAvatar, ensName, onClose, onDisconnect, open, }: AccountModalProps): JSX.Element;
