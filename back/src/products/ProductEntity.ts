import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum Size {
    L = "l",
    XL = "xl",
    XS = "xs"
}

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

    @Column( {nullable: true } )
    longDescription?: string;

    @Column( {nullable: true } )
    tag?: string;

    @Column( {default: Size.XL} )
    size: Size;

    @Column()
    price: number;

    @Column( {nullable: true } )
    color: string;

    @Column()
    sale: number;

    @Column()
    new: boolean;

    @Column()
    categorie: string;    
}