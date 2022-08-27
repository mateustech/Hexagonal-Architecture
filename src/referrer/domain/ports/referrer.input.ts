import { ApiResponse, ReferrerDto } from '../dto/referrer.dto';
import Referrer from '../referrer';

export default interface ReferrerInput {
  getAll(): ApiResponse<Referrer[]>;
  store(payload: ReferrerDto): void;
  update(): ApiResponse<Referrer>;
  delete(): void;
}
