import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentService } from './shared/student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema}])
  ],
  controllers: [StudentsController],
  providers: [StudentService]
})
export class StudentsModule {}
