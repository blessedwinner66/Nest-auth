import { BadRequestException, Body, Controller, Get,Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService,
               private jwtService:JwtService
              ) {}
  
  @Post('/signup')
  async register(@Body('name') name:string,
           @Body('email') email:string,
           @Body('password') password:string)
           {
            const hashedPassword = await bcrypt.hash(password,12)
             return this.appService.create({
                name,
                email,
                password:hashedPassword
             })
    }
 @Post('/login')
 async login(@Body('email') email:string,
             @Body('password') password:string,
            @Res({passthrough:true}) response:Response){
               const user = await this.appService.findOne({where:{email}})
               if(!user){
                throw new BadRequestException('Invalid credentials')
               }
               if(!await bcrypt.compare(password,user.password)){
                throw new BadRequestException('Invalid credentials')
               }
               const jwt = await this.jwtService.signAsync({id:user.id})
               response.cookie('jwt',jwt,{httpOnly:true})
               return {
                message:"Success"
               }
             }
  @Get('/user')
  async user(@Req() request:Request){
    try{
      const cookie = request.cookies['jwt']
      const data = await this.jwtService.verifyAsync(cookie)
      if(!data){
        throw new UnauthorizedException()
      }
      const user = await this.appService.findOne({where:{id:data['id']}})
      return user
    }
      catch(e){
    throw new UnauthorizedException()
  }
  }

 
}
