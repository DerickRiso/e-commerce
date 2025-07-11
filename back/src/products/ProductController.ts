import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ProductService } from "./ProductsService";
import { CreateProductDTO } from "./dto/CreateProductDTO";
import { Products } from "./ProductEntity";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductService) {}

    // Get ordenado
    @Get('cheapToExpensive/paginated')
    async findByOrder(
        @Query('sort') sortField: string = 'price',
        @Query('order') sortOrder: 'ASC' | 'DESC' = 'ASC',
        @Query('limit') limit: number = 2,
        @Query('page') page: number = 1,
    ) {
        return this.productsService.findAllSorted(sortField, sortOrder, limit, page)
    }

    @Post()
    async create(@Body() CreateProductDTO: CreateProductDTO): Promise<Products> {
        return this.productsService.create(CreateProductDTO)
    }

    // Get por produtos com desconto
    @Get("sale/paginated")
    async findBySale(
        @Query('limit') limit: number = 2,
        @Query('page') page: number = 1,
    ) {
        return this.productsService.findBySale(limit, page);
    }

    // Get por categoria
    @Get(":categorie/paginated")
    async findByCategorie(
        @Query('limit') limit: number = 2,
        @Query('page') page: number = 1,
        @Param('categorie') categorie: string
    ) {
        return this.productsService.findByCategorie(categorie, limit, page);
    }

    // Get por produtos novos (ou não)
    @Get("new/:isNew/paginated")
    async findByIsNew(
        @Query('limit') limit: number = 2,
        @Query('page') page: number = 1,
        @Param('isNew') isNew: string
    ) {
        const isNewBoolean = isNew === "true";
        return this.productsService.findByIsNew(isNewBoolean, limit, page);
    }



    // Lista todos
    @Get()
    async list() {
        return this.productsService.list();
    }

    // Get com limit e paginado
    @Get('paginated')
    async getPaginated(
        @Query('limit') limit: number = 8,
        @Query('page') page: number = 1
    ) {
        return this.productsService.getPaginated(limit, page);
    }

    // Get por ID
    @Get(":id")
    async findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }



  
}