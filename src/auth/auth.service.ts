import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signIn() {
    return 'This action returns signin';
  }

  signUp() {
    return 'This action returns signup';
  }
}
