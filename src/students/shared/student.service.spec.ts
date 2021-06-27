import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let provider: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentService],
    }).compile();

    provider = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
