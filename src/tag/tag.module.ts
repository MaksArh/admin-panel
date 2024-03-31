import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogTag } from './blog-tag.model';
import { CoursesTag } from './courses-tag.model';
import { Tag } from './tag.model';
import { Blog } from '../blog/blog.model';

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [
    SequelizeModule.forFeature([Tag, Blog, BlogTag, CoursesTag])
  ],
  exports: [
    TagService
  ]
})
export class TagModule {}
