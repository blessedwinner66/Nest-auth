import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository:Repository<User>
  ){}

  async create(data:any):Promise<User>{
      return this.userRepository.save(data)
  }
  async findOne(condition: any): Promise<User | null> {
  const user = await this.userRepository.findOne(condition);
  return user;
}
}
