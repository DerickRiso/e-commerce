import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @Column()
    image: string;

    @Column()
    alt: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    sale: number;

    @Column()
    new: boolean;

    @Column()
    categorie: string;    
}