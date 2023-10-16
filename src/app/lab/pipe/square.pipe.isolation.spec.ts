import { SquarePipeForLab } from './square.pipe';

describe('1-square pipe (isolation) testing:', () => {
  let pipe: SquarePipeForLab;

  beforeEach(() => {
    pipe = new SquarePipeForLab();
  });

  it('should return 16 when passing 4', () => {
    const result = pipe.transform(4);
    expect(result).toBe(16);
  });

  it("should return 'Not a number' when passing wrong parameter", () => {
    const result = pipe.transform('abc');
    expect(result).toBe('Not a number');
  });
});
