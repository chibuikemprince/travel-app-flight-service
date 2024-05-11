import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Flight, FlightDocument } from '../../db/flight-schema';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CreateFlightDto } from 'src/flight/dto/flight-data';

@Injectable()
export class FlightService implements OnModuleInit {
  private client;

  constructor(
    @InjectModel(Flight.name) private flightModel: Model<FlightDocument>,
  ) {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URI],
        queue: 'user_notifications',
        queueOptions: {
          durable: true,
        },
      },
    });
  }

  async create(flight: CreateFlightDto) {
    try {
      const createdFlight = new this.flightModel(flight);
      await createdFlight.save();

      await this.client.emit('flight_available', {
        id: flight.id,
        userEmail: flight.userEmail,
        type: 'flight',
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAll(): Promise<Flight[]> {
    try {
      return this.flightModel.find().exec();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findByUserEmail(userEmail: string): Promise<Flight[]> {
    try {
      return this.flightModel.find({ userEmail }).exec();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async onModuleInit() {
    try {
      await this.client.connect();
      console.log('Connected to RabbitMQ');
    } catch (error) {
      console.error('Failed to connect to RabbitMQ', error);
      console.error('Error details:', error.details);
      console.error('Stack trace:', error.stack);
    }
  }
}
