import { ApiProperty } from '@nestjs/swagger';

export class UpdateBlogDto {
  @ApiProperty({ example: 'Глубокое погружение в Python', description: 'Обновленное название блога на русском языке' })
  readonly titleRu: string;

  @ApiProperty({ example: 'В этом обновленном обзоре мы исследуем более продвинутые возможности Python...', description: 'Обновленное содержание блога на русском языке' })
  readonly contentRu: string;
}
