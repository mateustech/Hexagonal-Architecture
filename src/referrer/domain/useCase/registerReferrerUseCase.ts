import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import IReferrerRepository from '../port/out/referrerRepository';
import Referrer from '../referrer';

@Injectable()
export default class RegisterReferrerUseCase {
  constructor(
    @Inject('IReferrerRepository')
    private readonly referrerRepository: IReferrerRepository,
  ) {}

  execute(referrer: Referrer): Referrer {
    const emailAlreadyUsed = this.checkEmailAlreadyUsed(referrer.email);
    if (emailAlreadyUsed) {
      throw new BadRequestException('E-mail already used');
    }

    const referrerSaved = this.referrerRepository.save(referrer);

    return new Referrer(
      referrerSaved.name,
      referrerSaved.email,
      referrerSaved.birthday,
      referrerSaved.crm,
    );
  }

  private checkEmailAlreadyUsed(email: string): boolean {
    return this.referrerRepository.countByEmail(email) > 0;
  }
}
