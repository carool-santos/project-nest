import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(
        private readonly coursesService: CoursesService
    ){}

    @Get()
    findAll(@Res() response){
        return response.status(200).send('Todos os cursos');
    }
    @Get(':id')
    findOne( @Param('id')id :string ) : string{
        return `Curso # ${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body('name')body){ 
        return body;
    }

   @Patch(':id')
   update(@Param('id') id: string, @Body('name') body){
       return  `Atualização do Curso # ${id}`;
   }

   @Delete(':id')
   remove( @Param('id') id :string ){
       return `Exclusão do curso # ${id}`;
   }

}
