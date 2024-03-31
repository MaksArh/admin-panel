import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Courses } from './courses.model';
import { CreateCoursesDto } from './dto/create-courses.dto';
import { UpdateCoursesDto } from './dto/update-courses.dto';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Courses) private coursesRepository: typeof Courses) {}

  async createCourse(dto: CreateCoursesDto) {
    const course = await this.coursesRepository.create(dto);
    return course;
  }

  async getAllCourses() {
    const courses = await this.coursesRepository.findAll({ include: { all: true } });
    return courses;
  }

  async getCourseById(id: number) {
    const course = await this.coursesRepository.findByPk(id, { include: { all: true } });
    if (!course) {
      throw new HttpException('Курс не найден', HttpStatus.NOT_FOUND);
    }
    return course;
  }

  async updateCourse(id: number, dto: UpdateCoursesDto) {
    let course = await this.getCourseById(id);
    await course.update(dto);
    return course;
  }

  async deleteCourse(id: number) {
    let course = await this.getCourseById(id);
    await course.destroy();
    return { id };
  }
}
