import { Module } from '@nestjs/common';
import { FundadoresController } from './fundadores.controller';
import { FundadoresService } from './fundadores.service';
import { PrismaService } from '../services/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [FundadoresController],
  providers: [FundadoresService,PrismaService,JwtService],
})
export class FundadoresModule {}
