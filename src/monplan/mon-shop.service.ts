import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAdvertisementDto} from './dto/create-monplan.dto';
import { UpdateAdvertisementDto} from './dto/update-monplan.dto';
import { MonsException } from '../monplan/exception/note.exception/mon.exception';
import { uuid } from 'uuidv4';
import { InjectRepository } from '@nestjs/typeorm';
import Advertisement from './entities/mon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MonPlanService {
  constructor(
    @InjectRepository(Advertisement)
    private AdvertRepository: Repository<Advertisement>,
  ) { }
  

  async createAdvert(createMonDto: CreateAdvertisementDto) {
    const newAdvert = await this.AdvertRepository.create(createMonDto);
    await this.AdvertRepository.save(newAdvert);
    return newAdvert;
  }
  
  findAllAdverts() {
    return this.AdvertRepository.find();
  }

  async findOneAdvert(id: number) {
    const advert = await this.AdvertRepository.findOne({
      where: { id },
    });
    if (advert) {
      return advert;
    }
    throw new HttpException('Advertisement not found', HttpStatus.NOT_FOUND);
  }

  async updateAdvert(id: number, Advert: UpdateAdvertisementDto) {
    await this.AdvertRepository.update(id, Advert);
    const updatedAdvert = await this.AdvertRepository.findOne({
      where: { id },
    });
    if (updatedAdvert) {
      return updatedAdvert;
    }
    throw new HttpException('Advertisement not found', HttpStatus.NOT_FOUND);
  }

  async removeAdvert(id: number) {
    const deleteResponse = await this.AdvertRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Advertisement not found', HttpStatus.NOT_FOUND);
    }
  }
  async removeAllAdverts() {
    const deleteResponse = await this.AdvertRepository.delete({});
    if (!deleteResponse.affected) {
      throw new HttpException(
        'There are no mons in date-base',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
