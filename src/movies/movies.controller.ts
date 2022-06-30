import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    
    constructor(private readonly moviesService: MoviesService){

    }

    @Get()
    getAll():Movie[]{
        return this.moviesService.getAll();
    }

    @Get('/:id')
    getOne(@Param("id") movieID:number):Movie{
        console.log(typeof movieID)
        return this.moviesService.getOne(movieID);        
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO){
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieID:number){
        this.getOne(movieID)
        return this.moviesService.deleteOne(movieID);
    }

    @Patch('/:id')
    patch(@Param('id') movieID: number, @Body() updateData){
        // return `This will patch a movie with the id : ${movieID}`;
        return this.moviesService.update(movieID, updateData);
    }

}