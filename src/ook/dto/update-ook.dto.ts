import { PartialType } from '@nestjs/mapped-types';
import { CreateOokDto } from './create-ook.dto';

export class UpdateOokDto extends PartialType(CreateOokDto) {}
