import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Header,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { MonPlanService } from './mon-shop.service';
import { CreateAdvertisementDto} from './dto/create-monplan.dto';
import { UpdateAdvertisementDto} from './dto/update-monplan.dto';
import { MonsExceptionFilter } from './filter/note-exception/mon-exception.filter';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse,ApiTags } from '@nestjs/swagger';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';

@Controller('Advertisement')
@UseFilters(new MonsExceptionFilter())
export class MonPlanController {
  constructor(private readonly MonPlanService: MonPlanService) {}


  @ApiTags("Advertisement API")
  @ApiOperation({summary: "Створюємо Advertisement" })
  @ApiResponse({status:200,type:[CreateAdvertisementDto] })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  @UseGuards(JwtAuthenticationGuard)
  create(@Body() mon: CreateAdvertisementDto) {
    return this.MonPlanService.createAdvert(mon);
  }

  @ApiTags("Advertisement API")
  @ApiOperation({summary: "Отримуємо всі записи Advertisement" })
  @ApiResponse({status:200,type:[CreateAdvertisementDto] })
  @Get()
  @UseGuards(JwtAuthenticationGuard)
  findAll() {
    return this.MonPlanService.findAllAdverts();
  }
  @ApiTags("Advertisement API")
  @ApiOperation({summary: "Отримуємо один запиc з Advertisement" })
  @ApiResponse({status:200,type:[CreateAdvertisementDto] })
  @Get(':id')
  @UseGuards(JwtAuthenticationGuard)
  findOne(@Param('id') id: string) {
    return this.MonPlanService.findOneAdvert(Number(id));
  }
  @ApiTags("Advertisement API")
  @ApiOperation({summary: "Оновлюємо один запис в Advertisement" })
  @ApiResponse({status:200,type:[CreateAdvertisementDto] })
  @Patch(':id')
  @UseGuards(JwtAuthenticationGuard)
  update(@Param('id') id: string, @Body() updateMonPlanDto: UpdateAdvertisementDto) {
    return this.MonPlanService.updateAdvert(Number(id), updateMonPlanDto);
  }
  @ApiTags("Advertisement API")
  @ApiOperation({summary: "Видаляємо один запис в Advertisement" })
  @ApiResponse({status:200,type:[CreateAdvertisementDto] })
  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  remove(@Param('id') id: string) {
    return this.MonPlanService.removeAdvert(Number(id));
  }



}
