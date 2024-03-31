import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { Courses } from './courses.model';
import { UpdateCoursesDto } from './dto/update-courses.dto';
import { CreateCoursesDto } from './dto/create-courses.dto';

@ApiTags('Курсы')
@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @ApiOperation({ summary: 'Создать новый курс' })
  @ApiResponse({ status: 201, description: 'Курс успешно создан', type: Courses })
  @ApiBody({ type: CreateCoursesDto })
  @Post()
  create(@Body() createCourseDto: CreateCoursesDto) {
    return this.coursesService.createCourse(createCourseDto);
  }

  @ApiOperation({ summary: 'Получить все курсы' })
  @ApiResponse({ status: 200, description: 'Список всех курсов', type: [Courses] })
  @Get()
  getAll() {
    return this.coursesService.getAllCourses();
  }

  @ApiOperation({ summary: 'Получить курс по ID' })
  @ApiResponse({ status: 200, description: 'Курс найден', type: Courses })
  @ApiResponse({ status: 404, description: 'Курс не найден' })
  @ApiParam({ name: 'id', required: true, description: 'ID курса', type: 'number' })
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.coursesService.getCourseById(id);
  }

  @ApiOperation({ summary: 'Обновить курс' })
  @ApiResponse({ status: 200, description: 'Курс успешно обновлен', type: Courses })
  @ApiResponse({ status: 404, description: 'Курс не найден' })
  @ApiBody({ type: UpdateCoursesDto })
  @ApiParam({ name: 'id', required: true, description: 'ID курса для обновления', type: 'number' })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateCourseDto: UpdateCoursesDto) {
    return this.coursesService.updateCourse(id, updateCourseDto);
  }

  @ApiOperation({ summary: 'Удалить курс' })
  @ApiResponse({ status: 200, description: 'Курс успешно удален' })
  @ApiResponse({ status: 404, description: 'Курс не найден' })
  @ApiParam({ name: 'id', required: true, description: 'ID курса для удаления', type: 'number' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coursesService.deleteCourse(id);
  }
}
