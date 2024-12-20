import { Module } from '@nestjs/common';
import { DanzasService } from './danzas.service';
import { DanzasController } from './danzas.controller';
import { PrismaService } from '../services/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [DanzasService,PrismaService,JwtService],
  controllers: [DanzasController]
})
export class DanzasModule {}
