import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { ApiProperty } from '@nestjs/swagger';
import { Tag } from '../tag/tag.model';
import { BlogTag } from '../tag/blog-tag.model';

interface BlogCreationAttrs {
  titleRu:string
  contentRu:string
}
@Table({ tableName: 'blogs' })
export class Blog extends Model<Blog, BlogCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: '1', description: 'Порядковый номер' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  ordinal: number;

  @ApiProperty({ example: '12', description: 'Время для прочтения (12 мин.)' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  readTime: number;

  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'URL изображения' })
  @Column({ type: DataType.STRING, allowNull: true })
  imageUrl: string;

  @ApiProperty({ example: 'Content in English', description: 'Контент на английском' })
  @Column({ type: DataType.STRING, allowNull: true })
  contentEn: string;

  @ApiProperty({ example: 'Контент на русском', description: 'Контент на русском' })
  @Column({ type: DataType.STRING, allowNull: false })
  contentRu: string;

  @ApiProperty({ example: 'Title in English', description: 'Заголовок на английском' })
  @Column({ type: DataType.STRING, allowNull: true })
  titleEn: string;

  @ApiProperty({ example: 'Заголовок на русском', description: 'Заголовок на русском' })
  @Column({ type: DataType.STRING, allowNull: false })
  titleRu: string;

  @BelongsToMany(() => Tag, () => BlogTag)
  tags: Tag[];

  @ForeignKey(() => User)
  @ApiProperty({ example: '1', description: 'ID автора' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  author: User
}