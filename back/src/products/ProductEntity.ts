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

    @Column( {nullable: true} )
    miniImage1: string;

    @Column( {nullable: true} )
    miniImage2: string;

    @Column( {nullable: true} )
    miniImage3: string;

    @Column( {nullable: true} )
    miniImage4: string;

    @Column()
    alt: string;

    @Column()
    description: string;

    @Column()
    longDescription: string;

    @Column()
    tag: string;

    @Column( {default: Size.XL} )
    size: Size;

    @Column()
    price: number;

    @Column()
    color: string;

    @Column()
    sale: number;

    @Column()
    isNew: boolean;

    @Column()
    categorie: string;    
}