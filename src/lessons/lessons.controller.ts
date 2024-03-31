import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { LessonsService } from './lessons.service';
import { Lessons } from './lessons.model';
import { CreateLessonsDto } from './dto/create-lessons.dto';
import { UpdateLessonsDto } from './dto/update-lessons.dto';

@ApiTags('Уроки')
@Controller('lessons')
export class LessonsController {
  constructor(private lessonsService: LessonsService) {}

  @ApiOperation({ summary: 'Создать новый урок' })
  @ApiResponse({ status: 201, description: 'Урок успешно создан', type: Lessons })
  @ApiBody({ type: CreateLessonsDto })
  @Post()
  create(@Body() createLessonDto: CreateLessonsDto) {
    return this.lessonsService.createLesson(createLessonDto);
  }

  @ApiOperation({ summary: 'Получить все уроки' })
  @ApiResponse({ status: 200, description: 'Список всех уроков', type: [Lessons] })
  @Get()
  getAll() {
    return this.lessonsService.getAllLessons();
  }

  @ApiOperation({ summary: 'Получить урок по ID' })
  @ApiResponse({ status: 200, description: 'Урок найден', type: Lessons })
  @ApiResponse({ status: 404, description: 'Урок не найден' })
  @ApiParam({ name: 'id', required: true, description: 'ID урока', type: 'number' })
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.lessonsService.getLessonById(id);
  }

  @ApiOperation({ summary: 'Обновить урок' })
  @ApiResponse({ status: 200, description: 'Урок успешно обновлен', type: Lessons })
  @ApiResponse({ status: 404, description: 'Урок не найден' })
  @ApiBody({ type: UpdateLessonsDto })
  @ApiParam({ name: 'id', required: true, description: 'ID урока для обновления', type: 'number' })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateLessonDto: UpdateLessonsDto) {
    return this.lessonsService.updateLesson(id, updateLessonDto);
  }

  @ApiOperation({ summary: 'Удалить урок' })
  @ApiResponse({ status: 200, description: 'Урок успешно удален' })
  @ApiResponse({ status: 404, description: 'Урок не найден' })
  @ApiParam({ name: 'id', required: true, description: 'ID урока для удаления', type: 'number' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.lessonsService.deleteLesson(id);
  }
}
