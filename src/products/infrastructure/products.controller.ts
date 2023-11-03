import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getOne(@Param('id') id: number) {
    return { message: `I'm product ${id}` };
  }
  @Get()
  getMany(
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = 0,
  ) {
    return {
      message: `Products:  limit is ${limit}, offset is ${offset}`,
    };
  }
  @Post()
  createOne(@Body() payload: any) {
    return { message: `I'm product ${payload.id}`, payload };
  }
}
