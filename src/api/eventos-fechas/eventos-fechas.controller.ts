import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { EventosFechasService } from './eventos-fechas.service';
import { EventosFechas } from '../model/EventosFechaDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('eventos-fechas')
export class EventosFechasController {
    constructor(
        private eventosFechaService: EventosFechasService
    ){}

    @Get('/eventos-fechas')
    async getEventosFecha() {
        try {
            const response = await this.eventosFechaService.getEventosFecha();
            return response;
        } catch (error) {
            throw new Error('ERROR CONTROLLER');
        }
    }

    @Get('/eventos-fechas/:nombre')
    async getEventosFechaNombre(@Param('nombre') fecha:string){
        try {
            const response = await this.eventosFechaService.getEventosFechaNombre(fecha);
            return response;
        } catch (error) {
            throw new Error('ERROR CONTROLLER');
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('/eventos-fechas/create')
    async createEventosFecha(@Body() eventosFechas: EventosFechas){
        try {
            const response = await this.eventosFechaService.createEventosFecha(eventosFechas);
            return response;
        } catch (error) {
            throw new Error('ERROR CONTROLLER');
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('/eventos-fechas/update/:id')
    async updateEventosFecha(eventosFechas: EventosFechas) {
        try {
            const response = await this.eventosFechaService.updateEventosFecha(eventosFechas.id, eventosFechas);
            return response;
        } catch (error) {
            throw new Error('ERROR CONTROLLER');
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/eventos-fechas/delete/:id')
    async deleteEventosFechas(@Param('id') eventoId:number){
        return this.eventosFechaService.deleteEventosFechas(eventoId);
    }

}
