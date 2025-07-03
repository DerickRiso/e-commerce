import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

    @Get()
    async list() {
        return this.productsService.list();
    }

    @Get(":id")
    async findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }

    @Get("/category/:categorie")
    async findByCategorie(@Param('categorie') categorie: string) {
        return this.productsService.findByCategorie(categorie);
    }
}