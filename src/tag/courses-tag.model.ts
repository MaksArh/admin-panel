import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Courses } from '../courses/courses.model';
import { Tag } from './tag.model';

@Table({ tableName: 'courses_tags', createdAt: false, updatedAt: false })
export class CoursesTag extends Model<CoursesTag> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор связи' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }) id: number;

  @ApiProperty({ example: '1', description: 'Идентификатор курса' })
  @ForeignKey(() => Courses) @Column({ type: DataType.INTEGER, allowNull: false }) courseId: number;

  @ApiProperty({ example: '1', description: 'Идентификатор тега' })
  @ForeignKey(() => Tag) @Column({ type: DataType.INTEGER, allowNull: false }) tagId: number;
}