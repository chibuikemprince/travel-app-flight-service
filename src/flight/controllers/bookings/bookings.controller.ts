import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FlightService } from '../../services/bookings/bookings.service';
import { CreateFlightDto } from 'src/flight/dto/flight-data';
import { JwtAuthGuard } from 'src/flight/guards/auth/auth.guard';
import { Request } from 'express';

interface MyRequest extends Request {
  email: string;
}
type CreateFlightDtoWithoutEmailAndAvailable = Omit<
  CreateFlightDto,
  'userEmail' | 'available'
>;
@UseGuards(JwtAuthGuard)
@Controller('flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post('create')
  async create(
    @Body() myflight: CreateFlightDtoWithoutEmailAndAvailable,
    @Req() req: MyRequest,
  ) {
    try {
      const flight: CreateFlightDto = {
        ...myflight,
        userEmail: req.email,
        available: true,
      };
      await this.flightService.create(flight);
      return {
        message: 'Flight created successfully',
        data: flight,
        status: 'success',
        statusCode: HttpStatus.CREATED,
      };
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
          status: 'error',
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('getall')
  async findAll() {
    try {
      const flights = await this.flightService.findAll();
      return {
        message: 'Flights retrieved successfully',
        data: flights,
        status: 'success',
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
          status: 'error',
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('user')
  async findByUserEmail(@Req() req: MyRequest) {
    try {
      const flights = await this.flightService.findByUserEmail(req.email);
      return {
        message: 'Flights retrieved successfully',
        data: flights,
        status: 'success',
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
          status: 'error',
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
