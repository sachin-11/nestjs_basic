import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  addProduct(
    @Body('title') podTitle: string,
    @Body('description') podDescription: string,
    @Body('price') podPrice: number,
  ) {
    const generatedId = this.productService.insertProduct(
      podTitle,
      podDescription,
      podPrice,
    );
    return { id: generatedId };
  }
}
