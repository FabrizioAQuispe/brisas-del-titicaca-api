import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { EventosCulturales } from '../model/EventosCulturalesDTO';

@Injectable()
export class EventosCulturalesService {
    constructor(
        private prisma: PrismaService
    ) { }

    async getEventosCulturales() {
        try {
            const eventosCulturales = await this.prisma.eventos_culturales.findMany()
            return eventosCulturales;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message)
        }
    }

    async createEventosCulturales(eventosCulturales:EventosCulturales) {
        try {
            const response = await this.prisma.eventos_culturales.create({
                data: eventosCulturales
            })

            if(!response){
                throw new Error('No se pudo crear el evento cultural');
            }

            return eventosCulturales;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message)
        }
    }

    async updateEventosCulturales(id:number, eventosCulturales:EventosCulturales) {
        try {
            const response = await this.prisma.eventos_culturales.findFirst({
                where: {
                    id: Number(id)
                }
            })

            if(!response.id){
                throw new Error('No se encontro el id del evento cultural');
            }

            const result = await this.prisma.eventos_culturales.update({
                where: {
                    id: Number(response.id)
                },
                data: eventosCulturales
            });

            if(!result){
                throw new Error('No se encontro el resultado :v');
            }

            return result;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message)
        }
    }

    async deleteEventosCulturales(id:number){
        try {
            const response = await this.prisma.eventos_culturales.delete({
                where: {
                    id: Number(id)
                }
            })

            if(!response.id){
                throw new Error('NOT FOUND ID');
            }

            return response;
        } catch (error) {
            throw new Error('ERROR SERVICE' + error.message);
        }
    }
}
