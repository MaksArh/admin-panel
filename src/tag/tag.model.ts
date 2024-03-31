import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Blog } from '../blog/blog.model';
import { BlogTag } from './blog-tag.model';
import { Courses } from '../courses/courses.model';
import { CoursesTag } from './courses-tag.model';

interface TagCreationAttrs {
  nameRu:string
  descriptionRu:string
}
@Table({ tableName: 'tags' })
export class Tag extends Model<Tag, TagCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор тега' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true, })
  id: number;

  @ApiProperty({ example: 'Веб-разработка', description: 'Название тега' })
  @Column({ type: DataType.STRING, allowNull: false, })
  nameRu: string;

  @ApiProperty({ example: 'Web-development', description: 'Tag name' })
  @Column({ type: DataType.STRING, allowNull: true, })
  nameEn: string;

  @ApiProperty({ example: 'Тэг для блогов', description: 'Описание тэга' })
  @Column({ type: DataType.STRING, allowNull: false, })
  descriptionRu: string;

  @ApiProperty({ example: 'Tag for blogs', description: 'Tag description' })
  @Column({ type: DataType.STRING, allowNull: false, })
  descriptionEn: string;

  @BelongsToMany(() => Blog, () => BlogTag)
  blogs: Blog[];

  @BelongsToMany(() => Courses, () => CoursesTag)
  courses: Courses[];
}