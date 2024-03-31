import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Lessons } from './lessons.model';

@Table({tableName: 'user_lessons', createdAt: false, updatedAt: false})
export class UserLessons extends Model<UserLessons> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Lessons)
  @Column({type: DataType.INTEGER})
  lessonId: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

}