import { generateId } from '../../../@shared/domain/entity';

import Referrer from '../../domain/referrer';

import ReferrerModel from '../referrerModel';

export default class ReferrerRepositoryDB {
  private referrers: ReferrerModel[] = [];

  save(referrer: Referrer): ReferrerModel {
    const { name, email, birthday, crm } = referrer;
    const id = generateId();
    const referrerModel = new ReferrerModel(id, name, email, birthday, crm);
    this.referrers.push(referrerModel);
    return referrerModel;
  }

  findAll(): ReferrerModel {
    const id = '1';
    const name = 'John';
    const email = 'johndoe@email.com';
    const birthday = new Date();
    const crm = '12345';

    const referrer = new ReferrerModel(id, name, email, birthday, crm);
    return referrer;
  }
}
