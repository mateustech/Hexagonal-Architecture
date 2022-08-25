import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferrerModule } from './referrer/referrer.module';

@Module({
  imports: [ReferrerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
