import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { Courses } from './courses.model';
import { UserCourses } from './user-courses.model';
import { CoursesTag } from '../tag/courses-tag.model';
import { Tag } from '../tag/tag.model';
import { Lessons } from '../lessons/lessons.model';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [
    SequelizeModule.forFeature([User, Tag, Lessons, Courses, CoursesTag, UserCourses])
  ],
  exports: [
    CoursesService
  ]
})
export class CoursesModule {}
