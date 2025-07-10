import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
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

    @Get('paginated')
    async getPaginated(
        @Query('limit') limit: number = 8,
        @Query('page') page: number = 1
    ) {
        return this.productsService.getPaginated(limit, page);
    }

    @Get(":id")
    async findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }

    @Get(":categorie/paginated")
    async findByCategorie(
        @Query('limit') limit: number = 2,
        @Query('page') page: number = 1,
        @Param('categorie') categorie: string
    ) {
        return this.productsService.findByCategorie(categorie, limit, page);
    }
}