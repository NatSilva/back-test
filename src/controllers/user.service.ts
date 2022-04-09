import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async register(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
  async delete(id: number){
    const user: User = await this.userRepository.findOne({where: {id}});
    return this.userRepository.delete(user);
  }
  async alter(user: User){
    return this.userRepository.update(user.id, user);
  }
}