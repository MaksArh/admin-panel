import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Courses } from '../courses/courses.model';
import { User } from '../user/user.model';
import { UserLessons } from './user-lessons.model';

interface LessonsCreationAttrs {
  titleRu:string
}
// TODO: !!!!!
// TODO: Проработать что будет иметь в себе урок, пока простая заглушка
// TODO: !!!!!

@Table({ tableName: 'lessons' })
export class Lessons extends Model<Lessons, LessonsCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор урока' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Урок 1, Hello мир? Манера крутит мир?', description: 'Название урока' })
  @Column({ type: DataType.STRING, allowNull: false })
  titleRu: string;

  @ApiProperty({ example: 'Lesson 1, Gamarjoba world', description: 'Название урока' })
  @Column({ type: DataType.STRING, allowNull: true })
  titleEn: string;

  @ApiProperty({ example: '1', description: 'Идентификатор курса' })
  @ForeignKey(() => Courses) @Column({ type: DataType.INTEGER, allowNull: false })
  courseId: number;

  @BelongsTo(() => Courses)
  course: Courses;

  @BelongsToMany(() => User, () => UserLessons)
  users: User[];
}
