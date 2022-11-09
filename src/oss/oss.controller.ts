import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { Sts, Oss } from './oss';
import { OssService } from './oss.service';
import { CreateOssDto } from './dto/create-oss.dto';
import { UpdateOssDto } from './dto/update-oss.dto';

@Controller('oss')
export class OssController {
  constructor(private readonly ossService: OssService) {}

  @Get('stsToken')
  getStsToken(@Res() res: Response) {
    Sts.assumeRole(
      'acs:ram::1961761220371553:role/test',
      null,
      15 * 60,
      'external-username',
    )
      .then((result) => {
        console.log('result', result);
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-METHOD', 'GET');
        res.json({
          code: 200,
          data: {
            accessKeyId: result.credentials.AccessKeyId,
            accessKeySecret: result.credentials.AccessKeySecret,
            SecurityToken: result.credentials.SecurityToken,
            expiration: result.credentials.Expiration,
            region: 'oss-cn-shanghai',
          },
          detailMsg: null,
          msg: 'Success',
        });
      })
      .catch((err) => {
        console.log('error', err);
        res.status(400).json(err.message);
      });
  }

  @Get('getList')
  async getList(@Res() res) {
    const list = await Oss.list();
    res.send(list);
  }

  @Post()
  create(@Body() createOssDto: CreateOssDto) {
    return this.ossService.create(createOssDto);
  }

  @Get()
  findAll() {
    return this.ossService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ossService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOssDto: UpdateOssDto) {
    return this.ossService.update(+id, updateOssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ossService.remove(+id);
  }
}
