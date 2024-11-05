import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { EventosFechasService } from './eventos-fechas.service';
import { EventosFechas } from '../model/EventosFechaDTO';
import { JwtAuthGuard } from '../utils/Security/JwtService';
import { Eventos } from '../model/EventosDTO';

@Controller('eventos-fechas')
export class EventosFechasController {
    constructor(
        private eventosFechaService: EventosFechasService
    ){}

    @Get('/list')
    async getEventosFecha() {
        try {
            const response = await this.eventosFechaService.getEventosFecha();
            return response;
        } catch (error) {
            throw new Error('ERROR CONTROLLER');
        }
    }

    @Get('/search/:nombre')
    async getEventosFechaNombre(@Param('nombre') fecha:string){
        try {
            const response = await this.eventosFechaService.getEventosFechaNombre(fecha);
            return response;
        } catch (error) {
            throw new Error('ERROR CONTROLLER');
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createEventosFecha(@Body() eventosFechas: Eventos){
        try {
            const response = await this.eventosFechaService.createEventosFecha(eventosFechas);
            return response;
        } catch (error) {
            throw new Error('ERROR CONTROLLER');
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updateEventosFecha(id:number,eventosFechas: Eventos) {
        try {
            const response = await this.eventosFechaService.updateEventosFecha(id, eventosFechas);
            return response;
        } catch (error) {
            throw new Error('ERROR CONTROLLER');
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:id')
    async deleteEventosFechas(@Param('id') eventoId:number){
        return this.eventosFechaService.deleteEventosFechas(eventoId);
    }

}
