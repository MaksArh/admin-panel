import { ApiProperty } from '@nestjs/swagger';

export class UpdateCoursesDto {
  @ApiProperty({ example: 'Продвинутое программирование', description: 'Обновленное название курса на русском языке' })
  readonly titleRu: string;

  @ApiProperty({ example: 'Этот курс расширяет основы программирования, включая продвинутые темы и проекты.', description: 'Обновленное описание курса на русском языке' })
  readonly descriptionRu: string;
}
