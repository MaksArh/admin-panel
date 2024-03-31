import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'admin', description: 'Значение роли' })
  readonly value: string;

  @ApiProperty({ example: 'Администратор системы', description: 'Описание роли' })
  readonly description: string;
}
