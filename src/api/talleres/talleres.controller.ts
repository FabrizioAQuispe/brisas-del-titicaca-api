import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TalleresCulturales } from '../model/TalleresCulturaleDTO';
import { TalleresService } from './talleres.service';
import { JwtAuthGuard } from '../utils/Security/JwtService';

@Controller('talleres')
export class TalleresController {
    constructor(
        private talleresService:TalleresService
    ){}
    @Get('/list')
    async getTalleres() {
        return this.talleresService.getTalleres();
    }
    
    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createTalleres(@Body() talleresCulturales: TalleresCulturales) {
        return this.talleresService.createTalleres(talleresCulturales);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updateTalleres(@Param('id') id: number, @Body() talleresCulturales: TalleresCulturales) {
        return this.talleresService.updateTalleres(id, talleresCulturales);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:id')
    async deleteTalleres(@Param('id') id: number) {
        return this.talleresService.deleteTalleres(id);
    }    
}
