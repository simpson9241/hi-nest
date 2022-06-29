import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "This will return all movies";
    }
    
    @Get("search")
    search(@Query('year')searchingYear:string){
        return `We are searching for a movie made after : ${searchingYear}`;
    }

    @Get('/:id')
    getOne(@Param("id") id:string){
        return `This will return one movie with the id: ${id}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') movieID:string){
        return `This will delete a movie with the id : ${movieID}`;
    }

    @Patch('/:id')
    patch(@Param('id') movieID: string, @Body() updateData){
        // return `This will patch a movie with the id : ${movieID}`;
        return {
            updatedMovie: movieID,
            ...updateData
        }
    }

}