import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema({timestamps: true, versionKey: false})
export class Task extends Document{
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  completed: boolean;

  @Prop({type: SchemaTypes.ObjectId , ref: 'Student', required: true })
  student_id: Types.ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);