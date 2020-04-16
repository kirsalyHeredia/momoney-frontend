export class Account {
    accountId: number;
    accountType: string;
    balance: number;
    accountNumber: number;
    routingNumber: number;
    interestRate: number;
    autosave: number;
}

export class Transaction {
    transactionId: number;
    transactionAmount: number;
    transactiontype: string;
    timestamp: string;
}
