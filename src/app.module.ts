import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
@Module({
  imports: [
    ConfigModule.forRoot(),
  // Estou usando a mongodb na nuvem através da AWS
  MongooseModule.forRoot(`mongodb+srv://${USER}:${PASSWORD}@escluster.bjf2l.mongodb.net/test`),
  UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
