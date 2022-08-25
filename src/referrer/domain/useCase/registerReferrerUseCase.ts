import { Inject, Injectable } from '@nestjs/common';
import IReferrerRepository from '../port/out/referrerRepository';
import Referrer from '../referrer';

@Injectable()
export default class RegisterReferrerUseCase {
  constructor(
    @Inject('IReferrerRepository')
    readonly referrerRepository: IReferrerRepository,
  ) {}

  execute(referrer: Referrer): string {
    const emailAlreadyUsed = this.checkEmailAlreadyUsed(referrer.email);
    if (emailAlreadyUsed) {
      throw new Error('E-mail already used');
    }

    const id = this.referrerRepository.save(referrer);
    return id;
  }

  private checkEmailAlreadyUsed(email: string): boolean {
    return this.referrerRepository.countByEmail(email) > 0;
  }
}
