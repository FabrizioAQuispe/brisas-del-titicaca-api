import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { PrismaService } from '../services/prisma.service';

@Module({
    providers: [JwtService,CategoriasService,PrismaService],
    controllers: [CategoriasController],
    exports: [] 
})
export class CategoriasModule {}
