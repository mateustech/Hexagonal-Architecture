import Referrer from '../../referrer';

export default interface IReferrerRepository {
  countByEmail(email: string): number;
  save(referrer: Referrer): string;
}
