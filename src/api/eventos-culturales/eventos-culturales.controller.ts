import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { EventosCulturalesService } from './eventos-culturales.service';
import { EventosCulturales } from '../model/EventosCulturalesDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('eventos-culturales')
export class EventosCulturalesController {
    constructor(
        private eventosCulturales: EventosCulturalesService
    ) { }

    @Get('/list')
    async getEventosCulturales() {
        return this.eventosCulturales.getEventosCulturales();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createEventosCulturales(@Body() eventosCulturales: EventosCulturales) {
        return this.eventosCulturales.createEventosCulturales(eventosCulturales);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updateEventosCulturales(@Param('id') id:number,@Body() eventosCulturales:EventosCulturales) {
        return this.eventosCulturales.updateEventosCulturales(id, eventosCulturales);
    }
}
