import { generateId } from '../../../@shared/domain/entity';

import Referrer from '../../domain/referrer';

import ReferrerModel from '../referrerModel';

export default class ReferrerRepositoryDB {
  private referrers: ReferrerModel[] = [];

  save(referrer: Referrer): ReferrerModel {
    const { name, email, birthday, crm } = referrer;
    const id = generateId();
    const referrerModel = new ReferrerModel(name, email, birthday, crm, id);
    this.referrers.push(referrerModel);
    return referrerModel;
  }

  findAll(): ReferrerModel[] {
    const id = generateId();
    const name = 'John';
    const email = 'johndoe@email.com';
    const birthday = new Date();
    const crm = '12345';
    const referrer = new ReferrerModel(name, email, birthday, crm, id);
    return [referrer];
  }
}
