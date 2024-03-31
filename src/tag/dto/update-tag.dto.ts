import { ApiProperty } from '@nestjs/swagger';

export class UpdateTagDto {
  @ApiProperty({ example: 'Фронтенд', description: 'Обновленное название тега на русском языке' })
  readonly nameRu: string;

  @ApiProperty({ example: 'Теги, связанные с фронтенд разработкой', description: 'Обновленное описание тега на русском языке' })
  readonly descriptionRu: string;
}
