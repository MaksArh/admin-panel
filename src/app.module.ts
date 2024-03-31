import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { TagModule } from './tag/tag.module';
import { LessonsModule } from './lessons/lessons.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { Blog } from './blog/blog.model';
import { BlogTag } from './tag/blog-tag.model';
import { UserCourses } from './courses/user-courses.model';
import { UserLessons } from './lessons/user-lessons.model';
import { Courses } from './courses/courses.model';
import { CoursesTag } from './tag/courses-tag.model';
import { Lessons } from './lessons/lessons.model';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { CoursesModule } from './courses/courses.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { Tag } from './tag/tag.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve( __dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, Tag, UserRoles, Blog, BlogTag, UserCourses, UserLessons, Courses, CoursesTag, Lessons],
      autoLoadModels: true
    }),
    UserModule,
    RolesModule,
    AuthModule,
    BlogModule,
    LessonsModule,
    CoursesModule,
    TagModule,
  ]
})
export class AppModule {}
