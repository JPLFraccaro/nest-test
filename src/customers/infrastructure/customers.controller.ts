import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get(':id')
  getOne(@Param('id') id: number) {
    return { message: `I'm customer ${id}` };
  }
  @Post()
  createOne(@Body() payload: any) {
    return { message: `I'm customer ${payload.id}`, payload };
  }
}
