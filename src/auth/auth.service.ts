import bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private usersService: UsersService) {}

    // ユーザーを認証する
    async validateUser(email: User['email'], pass: User['password']): Promise<User | null> {
      const user = await this.usersService.findOne(email); // DBからUserを取得

      // DBに保存されているpasswordはハッシュ化されている事を想定しているので、
      // bcryptなどを使ってパスワードを判定する
      if (user && bcrypt.compareSync(pass, user.password)) {
        const { password, ...result } = user; // パスワード情報を外部に出さないようにする

        return result;
      }

      return null;
    }

    // jwt tokenを返す
    async login(user: PasswordOmitUser) {
      // jwtにつけるPayload情報
      const payload: JwtPayload = { userId: user.id, email: user.email };

      return {
        access_token: this.jwtService.sign(payload),
      };
    }
}
