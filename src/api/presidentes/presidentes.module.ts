import { Module } from '@nestjs/common';
import { PresidentesService } from './presidentes.service';
import { PresidentesController } from './presidentes.controller';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../services/prisma.service';

@Module({
  providers: [PresidentesService,JwtService,PrismaService],
  controllers: [PresidentesController]
})
export class PresidentesModule {}
