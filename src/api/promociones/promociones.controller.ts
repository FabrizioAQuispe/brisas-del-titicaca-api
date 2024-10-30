import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PromocionesService } from './promociones.service';
import { Promociones } from '../model/PromocionesDTO';

@Controller('promociones')
export class PromocionesController {
    constructor(
        private promocioneService: PromocionesService
    ){}

    @Get('/list')
    async getPromociones() {
        return this.promocioneService.getPromociones();
    }

    @Post('/create')
    async createPromociones(@Body() promociones: Promociones) {
        return this.promocioneService.createPromociones(promociones);
    }

    @Put('/update/:idPromocion')
    async updatePromociones(@Param('idPromocion') idPromocion: number,@Body() promociones: Promociones) {
        return this.promocioneService.updatePromociones(idPromocion, promociones);
    }

    @Delete('/delete/:idPromocion')
    async deletePromociones(@Param('idPromocion') idPromocion: number) {
        return this.promocioneService.deletePromociones(idPromocion);
    }
}
