import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot('mongodb://root:example@172.25.0.1:27017/?options=devtest')
    // MongooseModule.forRoot('mongodb://mongodb0.example.com:27017')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
