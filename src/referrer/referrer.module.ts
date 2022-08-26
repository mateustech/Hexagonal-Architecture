import { Inject, Injectable, Module } from '@nestjs/common';
import GetReferrerController from './application/http/getReferrer.controller';
import GetReferrerService from './application/service/getReferrer.service';
import GetReferrerAdapterInput from './domain/adapters/getReferrer.adapter';
import GetReferrerAdapterOutput from './infra/adapters/getReferrer.usecase';
import GetReferrerUnimedOutput from './infra/adapters/getReferrerUnimed.usecase';
import ReferrerRepositoryDB from './infra/repository/referrerRepository';

type OriginApplication = 'onco' | 'unimed';
@Injectable()
class DelegationAdapterOutput {
  constructor(@Inject('TYPE') private type: OriginApplication) {}
  getInstance() {
    return this.type === 'onco'
      ? GetReferrerAdapterOutput
      : GetReferrerUnimedOutput;
  }
}
@Module({
  imports: [],
  controllers: [GetReferrerController],
  providers: [
    GetReferrerService,
    {
      provide: 'IGetReferrerInput',
      useClass: GetReferrerAdapterInput,
    },
    {
      provide: 'IGetReferrerOutput',
      useClass: new DelegationAdapterOutput('unimed').getInstance(),
    },
    ReferrerRepositoryDB,
  ],
  exports: [],
})
export class ReferrerModule {}
