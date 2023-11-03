import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getOneFromProducts(
    // find the searched category from a product??
    @Param('id') id: number,
    @Param('productId') productId: number,
  ) {
    return { message: `I'm category ${id} from product ${productId}` };
  }
  @Post()
  createOne(@Body() payload: any) {
    return { message: `I'm category ${payload.id}`, payload };
  }
}
