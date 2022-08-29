import IReferrerOut from 'src/referrer/domain/port/out/referrerRepository';
import { generateId } from '../../../@shared/domain/entity';

import Referrer from '../../domain/referrer';

import ReferrerModel from './referrerModel';
// Implementação do adaptador de saida da oncoclinicas

export default class ReferrerAdapterOutOncoclinicas implements IReferrerOut {
  private referrers: ReferrerModel[] = [];

  countByEmail(email: string): number {
    return this.referrers.filter(
      (referrer) => referrer.email === email.toLowerCase(),
    ).length;
  }

  save(referrer: Referrer): Referrer {
    const { name, email, birthday, crm } = referrer;
    const id = generateId();
    const referrerModel = new ReferrerModel(id, name, email, birthday, crm);
    this.referrers.push(referrerModel);
    return referrer;
  }
}
