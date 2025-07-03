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
 }