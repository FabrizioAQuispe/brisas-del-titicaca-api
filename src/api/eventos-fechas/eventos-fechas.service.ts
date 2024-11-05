import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { EventosFechas } from '../model/EventosFechaDTO';

@Injectable()
export class EventosFechasService {
    constructor(
        private prisma: PrismaService
    ) { }

    async getEventosFechaNombre(fecha:string){
        try {
            const response = await this.prisma.eventos_fechas.findFirst({
                where: {
                    fecha_creacion: fecha
                }
            })
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE');
        }
    }
    async getEventosFecha() {
        try {
            const response = await this.prisma.eventos_fechas.findMany()
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE' + error);
        }
    }

    async createEventosFecha(eventosFechas: EventosFechas) {
        try {
            const response = await this.prisma.eventos_fechas.create({
                data: eventosFechas
            })
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE' + error);
        }
    }

    async updateEventosFecha(id: number, eventosFechas: EventosFechas) {
        try {
            const response = await this.prisma.eventos_fechas.update({
                where: {
                    id: Number(id)
                },
                data: eventosFechas
            })

            if(!response.eventoId){
                throw new Error('NO SE ENCONTRO EL ID DEL EVENTO');
            }

            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE' + error);
        }
    }

    async deleteEventosFechas(eventoId:number){
        try {
            const response = await this.prisma.eventos_fechas.delete({
                where: {
                    id: Number(eventoId)
                }
            })

            if(!response.eventoId){
                throw new Error('NO SE ENCONTRO EL ID DEL EVENTO');
            }
            return response;

        } catch (error) {
            throw new Error('ERROR SERVICE');
        }
    }
}
