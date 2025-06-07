import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @IsString()
  readonly description: string;
  @IsDate()
  readonly createdDate: Date;
  @IsDate()
  readonly lastestDate: Date;
  @IsNumber()
  readonly roleId: number;
}
