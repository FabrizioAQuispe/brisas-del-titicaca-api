import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';

@Module({
    providers: [JwtService,CategoriasService],
    controllers: [CategoriasController],
    exports: [] 
})
export class CategoriasModule {}
