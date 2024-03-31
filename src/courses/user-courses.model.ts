import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Courses } from './courses.model';

@Table({tableName: 'user_courses', createdAt: false, updatedAt: false})
export class UserCourses extends Model<UserCourses> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Courses)
  @Column({type: DataType.INTEGER})
  lessonId: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;


}