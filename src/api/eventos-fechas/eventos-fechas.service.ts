import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { EventosFechas } from '../model/EventosFechaDTO';
import { Eventos } from '../model/EventosDTO';

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
            const response = await this.prisma.eventos.findMany()
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE' + error);
        }
    }

    async createEventosFecha(eventosFechas: Eventos) {
        try {
            const response = await this.prisma.eventos.create({
                data: eventosFechas
            })
            console.log(response)
            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE' + error);
        }

    }

    async updateEventosFecha(id: number, eventosFechas: Eventos) {
        try {
            const response = await this.prisma.eventos.update({
                where: {
                    id: Number(id)
                },
                data: eventosFechas
            })

            if(!response){
                throw new Error('NO SE ENCONTRO EL ID DEL EVENTO');
            }

            return response;
        } catch (error) {
            throw new Error('ERROR SERVER RESPONSE' + error);
        }
    }

    async deleteEventosFechas(eventoId:number){
        try {
            const response = await this.prisma.eventos.delete({
                where: {
                    id: Number(eventoId)
                }
            })

            if(!response){
                throw new Error('NO SE ENCONTRO EL ID DEL EVENTO');
            }
            return response;

        } catch (error) {
            throw new Error('ERROR SERVICE');
        }
    }
}
