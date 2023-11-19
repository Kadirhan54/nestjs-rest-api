import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

    @Post('auth/login')
    signIn() {
        return this.authService.signIn();
    }

    @Post('auth/register')
    signUp() {
        return this.authService.signUp();
    }
    
}
