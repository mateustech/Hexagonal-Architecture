import Referrer from '../../referrer';

export default interface IRegisterReferrerOutput {
  save(referrer: Referrer): void;
}
