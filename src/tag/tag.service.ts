import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './tag.model';
import { UpdateTagDto } from './dto/update-tag.dto';
import { CreateTagDto } from './dto/create-tag.dto';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag) private tagRepository: typeof Tag) {}

  async createTag(dto: CreateTagDto) {
    const tag = await this.tagRepository.create(dto);
    return tag;
  }

  async getAllTags() {
    const tags = await this.tagRepository.findAll();
    return tags;
  }

  async getTagById(id: number) {
    const tag = await this.tagRepository.findByPk(id);
    if (!tag) {
      throw new HttpException('Тег не найден', HttpStatus.NOT_FOUND);
    }
    return tag;
  }

  async updateTag(id: number, dto: UpdateTagDto) {
    const tag = await this.getTagById(id);
    await tag.update(dto);
    return tag;
  }

  async deleteTag(id: number) {
    const tag = await this.getTagById(id);
    await tag.destroy();
    return { id };
  }
}