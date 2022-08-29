import { Module } from '@nestjs/common';
import { DelegateReferrerAdapterOut } from './adapter/delegateAdapterOut';

import ReferrerController from './application/http/referrer.controller';
import RegisterReferrerService from './application/service/registerReferrerService';
import RegisterReferrerUseCase from './domain/useCase/registerReferrerUseCase';

@Module({
  imports: [],
  controllers: [ReferrerController],
  providers: [
    RegisterReferrerService,
    RegisterReferrerUseCase,
    {
      provide: 'IReferrerOut',
      // Usar o useFactory para computar a flagAdapter
      useClass: new DelegateReferrerAdapterOut(
        'onco',
      ).getServiceImplementation(),
    },
  ],
})
export class ReferrerModule {}
