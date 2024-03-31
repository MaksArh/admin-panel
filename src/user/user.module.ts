import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';
import { User } from './user.model';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { UserService } from './user.service';
import { Blog } from '../blog/blog.model';
import { UserCourses } from '../courses/user-courses.model';
import { UserLessons } from '../lessons/user-lessons.model';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Role, Blog, UserRoles, UserCourses, UserLessons]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [
    UserService,
  ]
})
export class UserModule {}
