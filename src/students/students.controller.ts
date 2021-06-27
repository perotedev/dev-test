import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Student } from './student.schema';
import { StudentService } from './shared/student.service';

@Controller('students')
export class StudentsController {
    constructor(private studentService: StudentService) {}

    // Métodos da API
    @Get()
    async getAll(): Promise<Student[]> {
    return this.studentService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Student> {
    return this.studentService.getById(id);
    }

    @Post()
    async create(@Body() student: Student): Promise<Student> {
    return this.studentService.create(student);
    }

    @Put()
    async update(@Body('id') id: string, @Body() student: Student): Promise<Student> {
    return this.studentService.update(id, student);
    }

    @Delete()
    async delete(@Body('id') id: string){
    this.studentService.delete(id);
    }
}
