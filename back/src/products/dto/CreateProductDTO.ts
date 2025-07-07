import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsNumber, isString, IsString } from "class-validator";


export class CreateProductDTO {
    @IsString()
    alt: string;

    @IsString()
    image: string;

    @IsString()
    categorie: string;

    @IsString()
    description: string;

    @IsString()
    longDescription: string;

    @IsString()
    color: string;

    @IsBoolean()
    new: boolean;

    @IsString()
    title: string;

    @IsNumber()
    price: number;

    @IsNumber()
    sale: number;
}