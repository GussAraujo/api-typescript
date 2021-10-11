import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('pedidos')
export class Pedidos {

    @PrimaryGeneratedColumn()
    id_pedido: number;

    @Column()
    id_produto: number;

    @Column()
    quantidade: number;
}