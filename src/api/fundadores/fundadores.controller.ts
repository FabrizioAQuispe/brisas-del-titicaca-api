import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FundadoresService } from './fundadores.service';
import { JwtAuthGuard } from '../utils/Security/JwtService';
import { Fundadores } from '../model/FundadoresDTO';

@Controller('fundadores')
export class FundadoresController {
    constructor(
        private fundadoresService:FundadoresService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('/listfundadoresadmin')
    async getFundadoresAdmin(){
        return this.fundadoresService.getFundadores()
    }

    @Get('/listfundadores')
    async getFundadores(){
        return this.fundadoresService.getFundadores()
    }

    
    @UseGuards(JwtAuthGuard)
    @Post('/createfundadores')
    async createFundadores(@Body() fundadores:Fundadores){
        console.log(fundadores)
        return this.fundadoresService.createFundadores(fundadores)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updatefundadores')
    async updateFundadores(@Body()fundadores:Fundadores){
        console.log(fundadores)
        return this.fundadoresService.updateFundadores(fundadores)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/deletefundadores/:idFundador')
    async deleteFundadores(@Param('idFundador') idFundador:number){
        return this.fundadoresService.deleteFundadores(idFundador)
    }

}
