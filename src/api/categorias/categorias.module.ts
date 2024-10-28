import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CategoriasController } from './categorias.controller';

@Module({
    providers: [JwtService],
    controllers: [CategoriasController],
    exports: [] 
})
export class CategoriasModule {}
