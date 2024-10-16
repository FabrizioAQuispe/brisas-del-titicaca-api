import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TomosService } from './tomos.service';
import { Tomos } from '../model/TomosDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('tomos')
export class TomosController {
    constructor(
        private tomosService:TomosService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('/list/tomos')
    async getTomos(){
        return this.tomosService.getTomos();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create/tomos')
    async createTomos(@Body() tomos:Tomos){
        return this.tomosService.createTomos(tomos)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/tomos/:idTomo')
    async updateTomos(@Body() tomos:Tomos,@Param('idTomo') idTomo:number){
        return this.tomosService.updateTomos(tomos,idTomo)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:idTomo')
    async deleteTomos(@Param('idTomo') idTomo:number){
        return this.tomosService.deleteTomos(idTomo);
    }
}
