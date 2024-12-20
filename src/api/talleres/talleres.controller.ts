import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TalleresCulturales } from '../model/TalleresCulturaleDTO';
import { TalleresService } from './talleres.service';
import { JwtAuthGuard } from '../utils/Security/JwtService';
import { TalleresCategoria } from '../model/TalleresCategoriaDTO';

@Controller('talleres')
export class TalleresController {
    constructor(
        private talleresService:TalleresService
    ){}

    @UseGuards(JwtAuthGuard)
    @Put('/update/categoria/:id')
    async updateCategoria(@Param('id') idTallerrCategoria: number,@Body() talleresCategoria: TalleresCategoria) {
        return await this.talleresService.updateCategoria(idTallerrCategoria, talleresCategoria)
    }
    @UseGuards(JwtAuthGuard)
    @Post('/create/categoria')
    async createCategoria(@Body() talleresCateogria:TalleresCategoria){
        return await this.talleresService.createCategoria(talleresCateogria)
    }
    @Get('/list/categoria')
    async getTalleresWithCategoria(){
        try {
            const response = await this.talleresService.getTalleresWithCategoria();
            return response
        } catch (error) {
            throw new Error('ERROR CONTROLLER' + error);
        }
    }
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
