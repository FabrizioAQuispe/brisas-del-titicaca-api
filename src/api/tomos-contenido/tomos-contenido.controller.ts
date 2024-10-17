import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TomosContenidoService } from './tomos-contenido.service';
import { Contenido, Tomos } from '../model/TomosDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('tomos-contenido')
export class TomosContenidoController {
    constructor( 
        private tomosService:TomosContenidoService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('/list')
    async getTomos(){
        return this.tomosService.getTomos();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createTomos(@Body() tomos:Contenido){
        return this.tomosService.createTomos(tomos)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:idTomo')
    async updateTomos(@Body() tomos:Contenido,@Param('idTomo') idTomo:number){
        return this.tomosService.updateTomos(tomos,idTomo)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:idTomo')
    async deleteTomos(@Param('idTomo') idTomo:number){
        return this.tomosService.deleteTomos(idTomo);
    }
}
