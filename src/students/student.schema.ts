import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({timestamps: true, versionKey: false, toJSON: { virtuals: true }, id: false})
export class Student extends Document{
  @Prop({ required: true })
  matricula: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
StudentSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'student_id'
});