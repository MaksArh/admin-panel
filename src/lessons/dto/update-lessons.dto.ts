import { ApiProperty } from '@nestjs/swagger';

export class UpdateLessonsDto {
  @ApiProperty({ example: 'Продвинутые темы веб-разработки', description: 'Обновленное название урока на русском языке' })
  readonly titleRu: string;
}
