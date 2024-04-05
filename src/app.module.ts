import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { ProfessionalsModule } from './professionals/professionals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralResourcesModule } from './general_resources/general_resources.module';
import { ClientProfessionalEntitiesModule } from './client_professional_entities/client_professional_entities.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost',
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME, 
      username: process.env.DB_USER, 
      password: process.env.DB_PASSWORD, 
      autoLoadEntities: true, 
      synchronize: true 
    }),
    ClientsModule, 
    ProfessionalsModule, GeneralResourcesModule, ClientProfessionalEntitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
