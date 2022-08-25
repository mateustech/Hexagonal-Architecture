import { Module } from '@nestjs/common';
import ReferrerRepositoryDB from './adapter/repository/referrerRepository';
import RegisterReferrerService from './application/registerReferrerService';
import RegisterReferrerUseCase from './domain/useCase/registerReferrerUseCase';
import ReferrerController from './infra/referrer.controller';

@Module({
  imports: [],
  controllers: [ReferrerController],
  providers: [
    RegisterReferrerService,
    RegisterReferrerUseCase,
    {
      provide: 'IReferrerRepository',
      useValue: ReferrerRepositoryDB,
    },
  ],
})
export class ReferrerModule {}
