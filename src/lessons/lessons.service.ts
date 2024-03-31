import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Lessons } from './lessons.model';
import { UpdateLessonsDto } from './dto/update-lessons.dto';
import { CreateLessonsDto } from './dto/create-lessons.dto';


@Injectable()
export class LessonsService {
  constructor(@InjectModel(Lessons) private lessonsRepository: typeof Lessons) {}

  async createLesson(dto: CreateLessonsDto) {
    const lesson = await this.lessonsRepository.create(dto);
    return lesson;
  }

  async getAllLessons() {
    const lessons = await this.lessonsRepository.findAll();
    return lessons;
  }

  async getLessonById(id: number) {
    const lesson = await this.lessonsRepository.findByPk(id);
    if (!lesson) {
      throw new HttpException('Урок не найден', HttpStatus.NOT_FOUND);
    }
    return lesson;
  }

  async updateLesson(id: number, dto: UpdateLessonsDto) {
    const lesson = await this.getLessonById(id);
    await lesson.update(dto);
    return lesson;
  }

  async deleteLesson(id: number) {
    const lesson = await this.getLessonById(id);
    await lesson.destroy();
    return { id };
  }
}