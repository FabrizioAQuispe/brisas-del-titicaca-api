import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PaquetesService } from './paquetes.service';
import { PaquetesDTO } from '../model/PaquetesDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('paquetes')
export class PaquetesController {
    constructor(
        private paquetesService: PaquetesService
    ){}

    @Get('/list')
    async getPaquetes(){
        const response = await this.paquetesService.getPaquetes();
        console.log(response)
        return response;
    }
    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createPaquetes(@Body() paquetes:PaquetesDTO){
        const response = await this.paquetesService.createPaquetes(paquetes);
        return response;
    }
    @UseGuards(JwtAuthGuard)
    @Put('/update/:idPaquete')
    async updatePaquetes(@Param('idPaquete') idPaquete: number, @Body() paquetes: PaquetesDTO){
        return this.paquetesService.updatePaquetes(idPaquete, paquetes);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:idPaquete')
    async deletePaquetes(@Param('idPaquete') idPaquete:number){
        return this.paquetesService.deletePaquetes(idPaquete)
    }
}
