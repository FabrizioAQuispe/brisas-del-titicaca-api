import { Controller, Get, Post } from '@nestjs/common';
import { PresidentesService } from './presidentes.service';
import { Presidentes } from '../model/PresidentesDTO';

@Controller('presidentes')
export class PresidentesController {
    constructor(
        private presidentService:PresidentesService
    ){}

    @Get('/list')
    async getPresidentes(){
        try {
            return this.presidentService.getPresidentes();
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error.message);
        }
    }

    

}
