import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { Blog } from './blog.model';
import { BlogTag } from '../tag/blog-tag.model';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  imports: [
    SequelizeModule.forFeature([User, Blog, BlogTag])
  ],
  exports: [
    BlogService
  ]
})
export class BlogModule {}
