import {
  IsNotEmpty,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateOrdersRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  price: number;

  @IsPhoneNumber()
  phoneNumber: string;
}
