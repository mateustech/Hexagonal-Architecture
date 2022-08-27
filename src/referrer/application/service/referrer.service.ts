import { Inject, Injectable } from '@nestjs/common';
import { ReferrerDto } from 'src/referrer/domain/dto/referrer.dto';
import ReferrerInput from 'src/referrer/domain/ports/referrer.input';

@Injectable()
export default class ReferrerService {
  constructor(@Inject('ReferrerInput') private readonly port: ReferrerInput) {}

  async getAll() {
    return await this.port.getAll();
  }

  async store(body: ReferrerDto) {
    await this.port.store(body);
  }

  async update() {
    return await this.port.update();
  }

  async delete() {
    return await this.port.delete();
  }
}
