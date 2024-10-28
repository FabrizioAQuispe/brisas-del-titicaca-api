import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { JwtAuthGuard } from '../utils/Security/JwtService';
import { CategoriasPublic } from '../model/ComidasCategoriaDTO';

@Controller('categorias')
export class CategoriasController {
    constructor(
        private categoriasService: CategoriasService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('/list')
    async getCategoriasAdmin(){
        return this.categoriasService.getCategoriasAdmin();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create')    
    async createCategoriasAdmin(@Body() categoria:CategoriasPublic){
        return this.categoriasService.createCategoriasAdmin(categoria);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updateCategoriasAdmin(@Param('id') id: number, categoria: CategoriasPublic){
        return this.categoriasService.updateCategoriasAdmin(id, categoria);
    }
}

