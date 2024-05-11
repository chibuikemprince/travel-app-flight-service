import { IsEmail, IsBoolean, IsString, IsDate } from 'class-validator';

export class CreateFlightDto {
  @IsString()
  readonly id: string;

  @IsBoolean()
  readonly available: boolean;

  @IsEmail()
  readonly userEmail: string;

  @IsDate()
  readonly flightDate: Date;
}
