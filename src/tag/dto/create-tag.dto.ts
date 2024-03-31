import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({ example: 'Веб-разработка', description: 'Название тега на русском языке' })
  readonly nameRu: string;

  @ApiProperty({ example: 'Теги, связанные с веб-разработкой', description: 'Описание тега на русском языке' })
  readonly descriptionRu: string;
}
