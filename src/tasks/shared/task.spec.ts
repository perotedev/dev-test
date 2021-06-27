import { Task } from '../task.schema';

describe('Task', () => {
  it('should be defined', () => {
    expect(new Task()).toBeDefined();
  });
});
