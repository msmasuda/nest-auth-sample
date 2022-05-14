import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
      ) {}

      // ユーザーを一人を返す
      findOne(email: User['email']): Promise<User | undefined> {
        // typeormからDBにアクセスして、ユーザーを取得する
        return this.userRepository.findOne({ where: { email } });
      }
}
