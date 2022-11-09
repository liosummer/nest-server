import { Injectable } from '@nestjs/common';
import { CreateStudenDto } from './dto/create-studen.dto';
import { UpdateStudenDto } from './dto/update-studen.dto';

@Injectable()
export class StudenService {
  create(createStudenDto: CreateStudenDto) {
    return 'This action adds a new studen';
  }

  findAll() {
    return `This action returns all studen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studen`;
  }

  update(id: number, updateStudenDto: UpdateStudenDto) {
    return `This action updates a #${id} studen`;
  }

  remove(id: number) {
    return `This action removes a #${id} studen`;
  }
}
