import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { TomosService } from './tomos.service';
import { Tomos } from '../model/TomosDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('tomos')
export class TomosController {
    constructor(
        private tomosService:TomosService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async getTomosById(@Param('id') id:number){
        return this.tomosService.getTomosById(id);
    }

    // @UseGuards(JwtAuthGuard)
    @Get('/list')
    async getTomos(){
        return this.tomosService.getTomos();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createTomos(@Body() tomos:Tomos){
        return this.tomosService.createTomos(tomos)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:idTomo')
    async updateTomos(@Body() tomos:Tomos,@Param('idTomo') idTomo:number){
        return this.tomosService.updateTomos(tomos,idTomo)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:idTomo')
    async deleteTomos(@Param('idTomo') idTomo:number){
        return this.tomosService.deleteTomos(idTomo);
    }
}
