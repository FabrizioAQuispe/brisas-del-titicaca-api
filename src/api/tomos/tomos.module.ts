import { Module } from '@nestjs/common';
import { TomosService } from './tomos.service';
import { TomosController } from './tomos.controller';
import { PrismaService } from '../services/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [TomosService,PrismaService,JwtService],
  controllers: [TomosController]
})
export class TomosModule {}
