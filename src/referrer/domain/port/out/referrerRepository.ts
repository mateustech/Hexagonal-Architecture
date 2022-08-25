import ReferrerModel from 'src/referrer/adapter/repository/referrerModel';
import Referrer from '../../referrer';

export default interface IReferrerRepository {
  countByEmail(email: string): number;
  save(referrer: Referrer): ReferrerModel;
}
