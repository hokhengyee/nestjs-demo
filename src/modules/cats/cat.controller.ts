import { Controller, Get, Post, Req, HttpCode, Param, Body, Patch, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiImplicitParam } from '@nestjs/swagger';

import { CatDto } from './dto/cat.dto';
import { Cat } from '../../entity/cat/cat.entity';

import { CatService } from './cat.service';

@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
    constructor(
        private readonly catsService: CatService,
    ) { }

    @HttpCode(201)
    @Post()
    async create(@Body() catDto: CatDto) {
        return this.catsService.create(catDto);
    }

    @Get()
    async findAll(@Req() request): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @ApiImplicitParam({ name: "id", required: true })
    @Get(':id')
    async findOne(@Param() param): Promise<Cat> {
        return this.catsService.findOne(param.id);
    }

    @ApiImplicitParam({ name: "id", required: true })
    @Put(':id')
    async patch(@Param() param, @Body() catDto: CatDto): Promise<Cat> {
        return this.catsService.patch(param.id, catDto);
    }

    @HttpCode(201)
    @ApiImplicitParam({ name: "id", required: true })
    @Delete(':id')
    async delete(@Param() param) {
        return this.catsService.remove(param.id);
    }
}