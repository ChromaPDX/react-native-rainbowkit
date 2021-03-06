/// <reference types="react" />
import { useAccount, useBalance, useEnsAvatar, useEnsName } from 'wagmi';
interface ProfileDetailsProps {
    accountData: ReturnType<typeof useAccount>['data'];
    balanceData: ReturnType<typeof useBalance>['data'];
    ensAvatar: ReturnType<typeof useEnsAvatar>['data'];
    ensName: ReturnType<typeof useEnsName>['data'];
    onClose: () => void;
    onDisconnect: () => void;
}
export declare function ProfileDetails({ accountData, balanceData, ensAvatar, ensName, onClose, onDisconnect, }: ProfileDetailsProps): JSX.Element;
export {};
