export class Account {
    accountId: number;
    accountType: string;
    balance: number;
    accountNumber: number;
    routingNumber: number;
    interestRate: number;
    autosave: number;
    transactions: {
        transactionId: number;
        transactionAmount: number;
        transactionType: string;
        timestamp: string;
    };
}
