import { ApiResponse } from '../dto/referrer.dto';
import Referrer from '../referrer';

export default interface ReferrerOutput {
  findAll(): ApiResponse<Referrer[]>;
  save(referrer: Referrer): void;
}
