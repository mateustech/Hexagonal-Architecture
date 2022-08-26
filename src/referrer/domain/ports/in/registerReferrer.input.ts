import { ReferrerDto } from '../../dto/registerReferrer.dto';

export default interface IRegisterReferrerInput {
  execute(payload: ReferrerDto): void;
}
