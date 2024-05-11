import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightModule } from './flight/flight.module';
import { config } from 'dotenv';
config();
@Module({
  imports: [MongooseModule.forRoot(process.env.db), FlightModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
