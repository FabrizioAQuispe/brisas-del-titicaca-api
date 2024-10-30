import { Module } from '@nestjs/common';
import { PresidentesService } from './presidentes.service';
import { PresidentesController } from './presidentes.controller';

@Module({
  providers: [PresidentesService],
  controllers: [PresidentesController]
})
export class PresidentesModule {}
