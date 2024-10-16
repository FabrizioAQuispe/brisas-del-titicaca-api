import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ComidasModule } from './comidas.module';
import { ComidasService } from './comidas.service';
import { JwtAuthGuard } from '../utils/Security/JwtService';
import { Comidas } from '../model/EntradasDTO';

@Controller('comidas')
export class ComidasController {
    constructor(
        private comidasService:ComidasService
    ){}

    @Get('/listcomidas')
    async getComidas(){
        return this.comidasService.getComidas();
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('/listcomidasadmin')
    async getComidasAdmin(){
        return this.comidasService.getComidas();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/createcomidas')
    async createComidas(@Body() comidas:Comidas){
        return this.comidasService.createComidas(comidas);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updatecomidas')
    async updateComidas(@Param('idComida') idComida:number,@Body() comidas:Comidas){
        return this.comidasService.updateComidas(idComida,comidas);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:idComida')
    async deleteComidas(@Param('idComida') idComida:number){
        return this.comidasService.deleteComidas(idComida);
    }
}