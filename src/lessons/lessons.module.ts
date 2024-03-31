import { Module } from '@nestjs/common';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { Lessons } from './lessons.model';
import { UserLessons } from './user-lessons.model';
import { Courses } from '../courses/courses.model';

@Module({
  controllers: [LessonsController],
  providers: [LessonsService],
  imports: [
    SequelizeModule.forFeature([User, Lessons, Courses, UserLessons])
  ],
  exports: [
    LessonsService
  ]
})
export class LessonsModule {}
