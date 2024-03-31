import { ApiProperty } from '@nestjs/swagger';

export class CreateCoursesDto {
  @ApiProperty({ example: 'Основы программирования', description: 'Название курса на русском языке' })
  readonly titleRu: string;

  @ApiProperty({ example: 'Курс охватывает основы программирования на примере языка Python.', description: 'Описание курса на русском языке' })
  readonly descriptionRu: string;
}
