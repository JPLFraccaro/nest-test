import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':id')
  getOne(@Param('id') id: number) {
    return { message: `I'm order ${id}` };
  }
  @Post()
  createOne(@Body() payload: any) {
    return { message: `I'm order ${payload.id}`, payload };
  }
}
