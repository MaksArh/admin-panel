import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'admin', description: 'Значение роли' })
  @IsString({ message: "Должно быть строкой" })
  readonly value: string;

  @ApiProperty({ example: 1, description: 'Идентификатор пользователя' })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly userId: number;
}
