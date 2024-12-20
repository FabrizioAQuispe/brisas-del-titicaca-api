import { Module } from '@nestjs/common';
import { TomosContenidoService } from './tomos-contenido.service';
import { TomosContenidoController } from './tomos-contenido.controller';
import { PrismaService } from '../services/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [TomosContenidoService,PrismaService,JwtService],
  controllers: [TomosContenidoController]
})
export class TomosContenidoModule {}
