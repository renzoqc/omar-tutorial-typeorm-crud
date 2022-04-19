import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm"
import { Client } from "./Client"

export enum TransactionTypes{
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}

@Entity("transaction")
export class Transaction extends BaseEntity{

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column({
        type: "enum",
        enum: TransactionTypes
    })
    type: string;

    @Column({
        type: "numeric"
    })
    amount: number;

    @ManyToOne(
        () => Client,
        client => client.transactions,
        {
            onDelete: "CASCADE"
        }
    )
    @JoinColumn({
        name: 'client_id'
    })
    client: Client

}