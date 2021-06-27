import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';
import { TaskSchema } from './task.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[
      MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema}])
    ],
    controllers: [TasksController],
    providers:[TaskService]
})
export class TasksModule {}
