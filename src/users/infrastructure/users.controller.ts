import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  getOne(@Param('id') id: number) {
    return { message: `I'm user ${id}` };
  }
  @Post()
  createOne(@Body() payload: any) {
    return { message: `I'm user ${payload.id}`, payload };
  }
}
