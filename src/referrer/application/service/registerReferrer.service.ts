/**
 */
import { ReferrerDto } from 'src/referrer/domain/dto/registerReferrer.dto';
import IRegisterReferrerInput from 'src/referrer/domain/ports/in/registerReferrer.input';

export default class RegisterReferrerService {
  constructor(readonly port: IRegisterReferrerInput) {}

  execute(body: ReferrerDto) {
    const { name, email, birthday, crm } = body;
    this.port.execute({
      name,
      email,
      birthday,
      crm,
    });
  }
}
