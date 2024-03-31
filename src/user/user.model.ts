import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { Blog } from '../blog/blog.model';
import { Lessons } from '../lessons/lessons.model';
import { Courses } from '../courses/courses.model';
import { UserLessons } from '../lessons/user-lessons.model';
import { UserCourses } from '../courses/user-courses.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '12345678', description: 'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'Hanil', description: 'Имя пользователя'})
  @Column({type: DataType.STRING, allowNull: true})
  firstName: string;

  @ApiProperty({example: 'Kireev', description: 'Фамилия пользователя'})
  @Column({type: DataType.STRING, allowNull: true})
  lastName: string;

  @ApiProperty({example: 'Honey2007', description: 'Никнейм пользователя'})
  @Column({type: DataType.STRING, unique: true, allowNull: true})
  nickName: string;

  @ApiProperty({example: '@HoneyVk', description: 'Vk пользователя'})
  @Column({type: DataType.STRING, unique: true, allowNull: true})
  vk: string;

  @ApiProperty({example: '@HoneyTg', description: 'Tg пользователя'})
  @Column({type: DataType.STRING, unique: true, allowNull: true})
  tg: string;

  @ApiProperty({example: '+79528125252', description: 'Телефон пользователя'})
  @Column({type: DataType.STRING, unique: true, allowNull: true})
  phone: string;

  @ApiProperty({example: 'En', description: 'Язык выбранный пользователем'})
  @Column({type: DataType.STRING, allowNull: true})
  locale: string;

  @ApiProperty({example: 'Russia', description: 'Страна пользователя'})
  @Column({type: DataType.STRING, allowNull: true})
  location: string;

  @ApiProperty({example: 'Male', description: 'Пол пользователя'})
  @Column({type: DataType.STRING, allowNull: true})
  gender: string;

  @ApiProperty({example: '27', description: 'Возраст пользователя'})
  @Column({type: DataType.INTEGER, allowNull: true})
  age: number;

  @ApiProperty({example: 'true', description: 'Забанен или нет'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @BelongsToMany(() => Courses, () => UserCourses )
  ownedCourses: Courses[];

  @BelongsToMany(() => Lessons, () => UserLessons )
  passedLessons: Lessons[];

  @ApiProperty({example: 'За безобразие и точку в конце предложения.', description: 'Причина блокировки'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Blog)
  posts: Blog[];
}