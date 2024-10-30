import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PromocionesService } from './promociones.service';
import { Promociones } from '../model/PromocionesDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('promociones')
export class PromocionesController {
    constructor(
        private promocioneService: PromocionesService
    ){}

    @Get('/list')
    async getPromociones() {
        return this.promocioneService.getPromociones();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createPromociones(@Body() promociones: Promociones) {
        return this.promocioneService.createPromociones(promociones);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:idPromocion')
    async updatePromociones(@Param('idPromocion') idPromocion: number,@Body() promociones: Promociones) {
        return this.promocioneService.updatePromociones(idPromocion, promociones);
    }
    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:idPromocion')
    async deletePromociones(@Param('idPromocion') idPromocion: number) {
        return this.promocioneService.deletePromociones(idPromocion);
    }
}
