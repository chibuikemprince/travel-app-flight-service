import { Module } from '@nestjs/common';
import { GoogleAuthService } from './services/auth/google/google.service';
import { Flight, FlightSchema } from './db/flight-schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightService } from './services/bookings/bookings.service';
import { FlightController } from './controllers/bookings/bookings.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Flight.name, schema: FlightSchema }]),
  ],

  providers: [GoogleAuthService, FlightService],
  controllers: [FlightController],
})
export class FlightModule {}
