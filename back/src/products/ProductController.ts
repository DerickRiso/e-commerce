import { Body, Controller, Post } from "@nestjs/common";
import { ProductService } from "./ProductsService";
import { CreateProductDTO } from "./dto/CreateProductDTO";
import { Products } from "./ProductEntity";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductService) {}

    @Post()
    async create(@Body() CreateProductDTO: CreateProductDTO): Promise<Products> {
        return this.productsService.create(CreateProductDTO)
    }
}