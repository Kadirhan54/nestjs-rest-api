import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body('email') email: string, @Body('password') password: string) {
    console.log(email, password);
    return this.authService.signIn();
  }

  @Post('register')
  signUp() {
    return this.authService.signUp();
  }
}
