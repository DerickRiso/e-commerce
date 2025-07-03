import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "./ProductEntity";
import { ProductsController } from "./ProductController";
import { ProductService } from "./ProductsService";

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductsModule {}