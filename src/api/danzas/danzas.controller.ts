import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { DanzasService } from './danzas.service';
import { JwtAuthGuard } from '../utils/Security/JwtService';
import { Danzas } from '../model/DanzasDTO';

@Controller('danzas')
export class DanzasController {
    constructor(
        private danzasService:DanzasService
    ){}

    @Get('/listdanzas')
    async getDanzasListAll(){
        return this.danzasService.getDanzasListAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/listdanzasadmin')
    async getDanzasListAdmin(){
        return this.danzasService.getDanzasListAdmin();
    }

    @Post('/createdanzas')
    async createDanzasAdmin(@Body() danzas:Danzas){
        return this.danzasService.createDanzasAdmin(danzas)
    }

    @Put('/updatedanzas/:idDanza')
    async updateDanzasAdmin(@Param('idDanza') idDanza:number,@Body() danzas:Danzas){
        return this.danzasService.updateDanzasAdmin(idDanza,danzas)
    }

    @Delete('/deletedanzas/:idDanza')
    async deleteDanzasAdmin(@Param('idDanza') idDanza:number){
        return this.deleteDanzasAdmin(idDanza)
    }
}
