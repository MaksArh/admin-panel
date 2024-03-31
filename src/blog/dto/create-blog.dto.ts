import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogDto {
  @ApiProperty({ example: 'Интродукция в Python', description: 'Название блога на русском языке' })
  readonly titleRu: string;

  @ApiProperty({ example: 'В этой статье мы рассмотрим основы Python ...', description: 'Содержание блога на русском языке' })
  readonly contentRu: string;
}
