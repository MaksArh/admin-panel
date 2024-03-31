import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonsDto {
  @ApiProperty({ example: 'Основы веб-разработки', description: 'Название урока на русском языке' })
  readonly titleRu: string;
}
