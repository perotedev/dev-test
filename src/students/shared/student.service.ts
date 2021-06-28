import { Student } from './../student.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private readonly studentModel: Model<Student>) {} // injeta no mongoDB

  async getAll() {
    return await this.studentModel.find().populate(['tasks']).exec();
  }

  async getById(id: string) {
    return await this.studentModel.findById(id).populate(['tasks']).exec();
  }

  async create(student: Student) {
    const createdStudent = new this.studentModel(student);
    return await createdStudent.save();
  }

 async update(id: string, student: Student) {
    await this.studentModel.updateOne({ _id: id}, student).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.studentModel.deleteOne({ _id: id}).exec();
  }
}
