import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from '../../entity';
import { CatDto } from './dto/cat.dto';

@Component()
export class CatService {
    constructor(
        @Inject('CatRepositoryToken') private readonly catRepository: Repository<Cat>,
    ) { }

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async findOne(id: number): Promise<Cat> {
        return await this.catRepository.findOne(id);
    }

    async create(catDto: CatDto) {
        const newCat = this.catRepository.create();
        newCat.name = catDto.name;
        newCat.age = catDto.age;
        newCat.breed = catDto.breed;
        return await this.catRepository.save(newCat);
    }

    async patch(id: number, catDto: CatDto) {
        let currCat = await this.catRepository.findOne(id);
        currCat.name = catDto.name;
        currCat.age = catDto.age;
        currCat.breed = catDto.breed;
        return await this.catRepository.save(currCat);
    }

    async remove(id: number) {
        let currCat = await this.catRepository.findOne(id);
        return await this.catRepository.remove(currCat);
    }
}