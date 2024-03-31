import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './tag.model';
import { UpdateTagDto } from './dto/update-tag.dto';

@ApiTags('Теги')
@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) {}

  @ApiOperation({ summary: 'Создать новый тег' })
  @ApiResponse({ status: 200, type: Tag })
  @ApiBody({ type: CreateTagDto })
  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.createTag(createTagDto);
  }

  @ApiOperation({ summary: 'Получить все теги' })
  @ApiResponse({ status: 200, type: [Tag] })
  @Get()
  getAll() {
    return this.tagService.getAllTags();
  }

  @ApiOperation({ summary: 'Получить тег по ID' })
  @ApiResponse({ status: 200, type: Tag })
  @ApiParam({ name: 'id', required: true, description: 'Идентификатор тега', type: Number })
  @ApiResponse({ status: 404, description: 'Тег не найден' })
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.tagService.getTagById(id);
  }

  @ApiOperation({ summary: 'Обновить тег' })
  @ApiResponse({ status: 200, type: Tag })
  @ApiBody({ type: UpdateTagDto })
  @ApiParam({ name: 'id', required: true, description: 'Идентификатор тега', type: Number })
  @ApiResponse({ status: 404, description: 'Тег не найден' })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTagDto: UpdateTagDto) {
    return this.tagService.updateTag(id, updateTagDto);
  }

  @ApiOperation({ summary: 'Удалить тег' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', required: true, description: 'Идентификатор тега', type: Number })
  @ApiResponse({ status: 404, description: 'Тег не найден' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tagService.deleteTag(id);
  }
}