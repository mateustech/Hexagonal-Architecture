import { Inject, Injectable, Module } from '@nestjs/common';
import ReferrerController from './application/http/referrer.controller';
import ReferrerService from './application/service/referrer.service';
import ReferrerAdapterInput from './domain/adapters/referrer.adapter';
import ReferrerOncoAdapter from './infra/adapters/referrerOnco.adapter';
import ReferrerUnimedAdapter from './infra/adapters/referrerUnimed.adapter';
import ReferrerRepositoryDB from './infra/repository/referrerRepository';

type OriginApplication = 'onco' | 'unimed';
@Injectable()
class DelegationAdapterOutput {
  constructor(@Inject('TYPE') private type: OriginApplication) {}
  getInstance() {
    return this.type === 'onco' ? ReferrerOncoAdapter : ReferrerUnimedAdapter;
  }
}
@Module({
  imports: [],
  controllers: [ReferrerController],
  providers: [
    ReferrerService,
    {
      provide: 'ReferrerInput',
      useClass: ReferrerAdapterInput,
    },
    {
      provide: 'ReferrerOutput',
      useClass: new DelegationAdapterOutput('unimed').getInstance(),
    },
    ReferrerRepositoryDB,
  ],
})
export class ReferrerModule {}
