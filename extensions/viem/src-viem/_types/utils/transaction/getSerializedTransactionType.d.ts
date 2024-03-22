import type {
	TransactionSerialized,
	TransactionSerializedEIP1559,
	TransactionSerializedEIP2930,
} from '../../types/transaction.js'
export type GetSerializedTransactionType<
	TTransactionSerialized extends TransactionSerialized = TransactionSerialized,
> = TTransactionSerialized extends TransactionSerializedEIP1559
	? 'eip1559'
	: TTransactionSerialized extends TransactionSerializedEIP2930
	? 'eip2930'
	: 'legacy'
export declare function getSerializedTransactionType<
	TSerialized extends TransactionSerialized,
>(serializedTransaction: TSerialized): GetSerializedTransactionType<TSerialized>
//# sourceMappingURL=getSerializedTransactionType.d.ts.map