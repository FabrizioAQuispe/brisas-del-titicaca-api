import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Popup } from '../model/PopuptDTO';

@Injectable()
export class PopupService {
    constructor(
        private prisma:PrismaService
    ){}

    async getPopup(){
        try{
            const popup = this.prisma.popup.findMany();
            return popup;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createPopup(popup: Popup){
        try {
            const response = await this.prisma.popup.create({
                data: popup    
            })
            if(!response){
                throw new Error('ERROR AL CREAR POPUP');
            }

            return response;
        } catch (error) {
            throw new Error(error); 
        }
    }

    async deletePopup(idPopup:Number){
        try {
            const result = await this.prisma.popup.findFirst({
                where: {
                    id: Number(idPopup)
                }   
            })
            if(!result){
                throw new Error('POPUP NO ENCONTRADO');  // Implementar manejo de errores más específicos según sea necesario.  
            }
            const response = await this.prisma.popup.delete({
                where: {
                    id: Number(result)
                }
            })

            if(!response){  
                throw new Error('ERROR AL ELIMINAR POPUP');
            }
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}
