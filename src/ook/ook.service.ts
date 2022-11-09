import { Injectable } from '@nestjs/common';
import { CreateOokDto } from './dto/create-ook.dto';
import { UpdateOokDto } from './dto/update-ook.dto';

@Injectable()
export class OokService {
  create(createOokDto: CreateOokDto) {
    return 'This action adds a new ook';
  }

  findAll() {
    return `This action returns all ook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ook`;
  }

  update(id: number, updateOokDto: UpdateOokDto) {
    return `This action updates a #${id} ook`;
  }

  remove(id: number) {
    return `This action removes a #${id} ook`;
  }
}
