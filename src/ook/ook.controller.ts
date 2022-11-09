import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OokService } from './ook.service';
import { CreateOokDto } from './dto/create-ook.dto';
import { UpdateOokDto } from './dto/update-ook.dto';

@Controller('ook')
export class OokController {
  constructor(private readonly ookService: OokService) {}

  @Post()
  create(@Body() createOokDto: CreateOokDto) {
    return this.ookService.create(createOokDto);
  }

  @Get()
  findAll() {
    return this.ookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOokDto: UpdateOokDto) {
    return this.ookService.update(+id, updateOokDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ookService.remove(+id);
  }
}
