import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from './blog.model';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog) private blogRepository: typeof Blog) {}

  async createBlog(dto: CreateBlogDto) {
    const blog = await this.blogRepository.create(dto);
    return blog;
  }

  async getAllBlogs() {
    const blogs = await this.blogRepository.findAll({ include: { all: true } });
    return blogs;
  }

  async getBlogById(id: number) {
    const blog = await this.blogRepository.findByPk(id, { include: { all: true } });
    if (!blog) {
      throw new HttpException('Блог не найден', HttpStatus.NOT_FOUND);
    }
    return blog;
  }

  async updateBlog(id: number, dto: UpdateBlogDto) {
    let blog = await this.getBlogById(id);
    await blog.update(dto);
    return blog;
  }

  async deleteBlog(id: number) {
    let blog = await this.getBlogById(id);
    await blog.destroy();
    return { id };
  }
}
