import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/infrastructure/products.controller';
import { UsersController } from './users/infrastructure/users.controller';
import { CategoriesController } from './categories/infrastructure/categories.controller';
import { OrdersController } from './orders/infrastructure/orders.controller';
import { CustomersController } from './customers/infrastructure/customers.controller';
import { BrandsController } from './brands/infrastructure/brands.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    UsersController,
    CategoriesController,
    OrdersController,
    CustomersController,
    BrandsController,
  ],
  providers: [AppService],
})
export class AppModule {}
