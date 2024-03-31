import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'Идентификатор пользователя, которого необходимо забанить' })
  readonly userId: number;

  @ApiProperty({ example: 'Нарушение правил сообщества', description: 'Причина бана пользователя' })
  readonly banReason: string;
}
