import { Module } from '@nestjs/common';
import { PromocionesService } from './promociones.service';
import { PromocionesController } from './promociones.controller';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../services/prisma.service';

@Module({
  providers: [PromocionesService,JwtService,PrismaService],
  controllers: [PromocionesController]
})
export class PromocionesModule {}
