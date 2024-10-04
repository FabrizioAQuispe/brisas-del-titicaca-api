import { Module } from '@nestjs/common';
import { ComidasService } from './comidas.service';
import { ComidasController } from './comidas.controller';
import { PrismaService } from '../services/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [ComidasService,PrismaService,JwtService],
  controllers: [ComidasController]
})
export class ComidasModule {}
