import React from 'react';
export declare function TransactionStoreProvider({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function useTransactionStore(): {
    addTransaction: (account: string, chainId: number, transaction: any) => void;
    clearTransactions: (account: string, chainId: number) => void;
    getTransactions: (account: string, chainId: number) => import("./transactionStore").Transaction[];
    onChange: (fn: () => void) => () => void;
    setProvider: (newProvider: any) => void;
    waitForPendingTransactions: (account: string, chainId: number) => Promise<void>;
};
