import { Module } from '@nestjs/common';
import { ReferrerModule } from './referrer/referrer.module';
@Module({
  imports: [ReferrerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
