import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from '../review/review.model';

@Controller('review')
export class ReviewController {

  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Get('byProductId')
  async getByProduct(@Param('productId') productId: string) {}

}
