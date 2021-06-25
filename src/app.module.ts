import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/devtest?authSource=admin')
    // MongooseModule.forRoot('mongodb://mongodb0.example.com:27017')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
