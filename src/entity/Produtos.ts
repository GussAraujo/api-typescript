import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('produtos')
export class Produtos {

    @PrimaryGeneratedColumn()
    id_produto: number;

    @Column()
    nome: string;

    @Column()
    preco: number;
}