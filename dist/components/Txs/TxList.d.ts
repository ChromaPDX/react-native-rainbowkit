import { useAccount } from 'wagmi';
interface TxListProps {
    accountData: ReturnType<typeof useAccount>['data'];
}
export declare function TxList({ accountData }: TxListProps): any;
export {};
