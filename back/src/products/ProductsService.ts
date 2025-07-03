import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./ProductEntity";
import { Repository } from "typeorm";
import { CreateProductDTO } from "./dto/CreateProductDTO";



export class ProductService {
    constructor(
        @InjectRepository(Products)
        private readonly productRepository: Repository<Products>,
    ) {}

    async create(createProductDTO: CreateProductDTO): Promise<Products> {
        return this.productRepository.save(createProductDTO);
    }

    async list() {
        return this.productRepository.find();
    }

    async findOne(id: string) {
        return this.productRepository.findOne({
            where: { id: Number(id) }
        });
    }

    async findByCategorie(categorie: string) {
        return this.productRepository.find({
            where: {categorie}
        });
    }
 }