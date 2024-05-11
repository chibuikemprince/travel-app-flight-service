import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FlightDocument = Flight & Document;

@Schema()
export class Flight {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  available: boolean;

  @Prop({ required: true })
  userEmail: string;

  @Prop({ required: true })
  flightDate: Date;
}

export const FlightSchema = SchemaFactory.createForClass(Flight);
