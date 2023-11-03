import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
  /*Res,*/
} from '@nestjs/common';
//import { Response } from 'express';
@Controller('brands')
export class BrandsController {
  @Get()
  getAll() {
    return { message: `These are all the brands with no filter or pagination` };
  }
  @Post()
  createOne(@Body() payload: any) {
    return { message: `I'm brand ${payload.id}`, payload };
  }
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(/*@Res() res: Response,*/ @Param('id') id: number) {
    //res.status(200).send({ message: `I'm brand ${id}` });
    return { message: `I'm brand ${id}` };
  }
  @Put(':id')
  updateOne(@Param('id') id: number, @Body() payload: any) {
    return { message: `I'm brand ${id}`, payload };
  }
  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return { message: `I'm brand ${id}` };
  }
}
