/// <reference types="react" />
import { useNetwork } from 'wagmi';
export interface ChainModalProps {
    activeChain: ReturnType<typeof useNetwork>['activeChain'];
    chains: ReturnType<typeof useNetwork>['chains'];
    open: boolean;
    onClose: () => void;
    networkError: ReturnType<typeof useNetwork>['error'];
    onSwitchNetwork?: (chainId: number) => unknown;
}
export declare function ChainModal({ activeChain, chains, networkError, onClose, onSwitchNetwork, open, }: ChainModalProps): JSX.Element;
