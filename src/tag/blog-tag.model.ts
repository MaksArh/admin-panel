import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Blog } from '../blog/blog.model';
import { Tag } from './tag.model';

@Table({ tableName: 'blog_tags', createdAt: false, updatedAt: false })
export class BlogTag extends Model<BlogTag> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор связи' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true, })
  id: number;

  @ApiProperty({ example: '1', description: 'Идентификатор блога' })
  @ForeignKey(() => Blog)
  @Column({ type: DataType.INTEGER, allowNull: false, })
  blogId: number;

  @ApiProperty({ example: '1', description: 'Идентификатор тега' })
  @ForeignKey(() => Tag)
  @Column({ type: DataType.INTEGER, allowNull: false, })
  tagId: number;
}