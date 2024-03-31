import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Tag } from '../tag/tag.model';
import { CoursesTag } from '../tag/courses-tag.model';
import { Lessons } from '../lessons/lessons.model';
import { User } from '../user/user.model';
import { UserCourses } from './user-courses.model';

interface CoursesCreationAttrs {
  titleRu:string
  descriptionRu:string
}
@Table({ tableName: 'courses' })
export class Courses extends Model<Courses, CoursesCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор курса' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'URL изображения курса' })
  @Column({ type: DataType.STRING, allowNull: true })
  imageUrl: string;

  @ApiProperty({ example: 'https://example.com/introduction.mp3', description: 'URL вводного видео курса' })
  @Column({ type: DataType.STRING, allowNull: true })
  videoUrl: string;

  @ApiProperty({ example: 'Course Title in English', description: 'Название курса на английском' })
  @Column({ type: DataType.STRING, allowNull: true })
  titleEn: string;

  @ApiProperty({ example: 'Название курса на русском', description: 'Название курса на русском' })
  @Column({ type: DataType.STRING, allowNull: false })
  titleRu: string;

  @ApiProperty({ example: 'Description in English', description: 'Описание курса на английском' })
  @Column({ type: DataType.STRING, allowNull: true })
  descriptionEn: string;

  @ApiProperty({ example: 'Описание курса на русском', description: 'Описание курса на русском' })
  @Column({ type: DataType.STRING, allowNull: false })
  descriptionRu: string;

  @ApiProperty({ example: 'true', description: 'Курс активен' })
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive: boolean;

  @BelongsToMany(() => Tag, () => CoursesTag)
  tags: Tag[];

  @HasMany(() => Lessons)
  lessons: Lessons[];

  @BelongsToMany(() => User, () => UserCourses)
  users: User[];
}