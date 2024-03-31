import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { BlogService } from './blog.service';
import { Blog } from './blog.model';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@ApiTags('Блоги')
@Controller('blogs')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @ApiOperation({ summary: 'Создать новый блог' })
  @ApiResponse({ status: 201, description: 'Блог успешно создан', type: Blog })
  @ApiBody({ type: CreateBlogDto })
  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.createBlog(createBlogDto);
  }

  @ApiOperation({ summary: 'Получить все блоги' })
  @ApiResponse({ status: 200, description: 'Список всех блогов', type: [Blog] })
  @Get()
  getAll() {
    return this.blogService.getAllBlogs();
  }

  @ApiOperation({ summary: 'Получить блог по ID' })
  @ApiResponse({ status: 200, description: 'Блог найден', type: Blog })
  @ApiResponse({ status: 404, description: 'Блог не найден' })
  @ApiParam({ name: 'id', required: true, description: 'ID блога', type: 'number' })
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.blogService.getBlogById(id);
  }

  @ApiOperation({ summary: 'Обновить блог' })
  @ApiResponse({ status: 200, description: 'Блог успешно обновлен', type: Blog })
  @ApiResponse({ status: 404, description: 'Блог не найден' })
  @ApiBody({ type: UpdateBlogDto })
  @ApiParam({ name: 'id', required: true, description: 'ID блога для обновления', type: 'number' })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.updateBlog(id, updateBlogDto);
  }

  @ApiOperation({ summary: 'Удалить блог' })
  @ApiResponse({ status: 200, description: 'Блог успешно удален' })
  @ApiResponse({ status: 404, description: 'Блог не найден' })
  @ApiParam({ name: 'id', required: true, description: 'ID блога для удаления', type: 'number' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.blogService.deleteBlog(id);
  }
}
