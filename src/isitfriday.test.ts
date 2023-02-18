import isitfriday from './isitfriday';

describe('isitfriday', function () {
  describe('no args', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should handle friday', () => {
      jest.setSystemTime(new Date('2023-02-17'));

      expect(isitfriday()).toBe(true);
    });

    it('should handle non-friday', () => {
      jest.setSystemTime(new Date('2023-02-18'));

      expect(isitfriday()).toBe(false);
    });
  });

  describe('with args', () => {
    it.each`
      candidate                 | expected
      ${new Date('2023-02-17')} | ${true}
      ${new Date('2023-02-18')} | ${false}
      ${1676592000000}          | ${true}
      ${1676678400000}          | ${false}
      ${'2023-02-17'}           | ${true}
      ${'2023-02-18'}           | ${false}
    `(
      'should return $expected when called with $candidate',
      ({ candidate, expected }) => {
        expect(isitfriday(candidate)).toBe(expected);
      },
    );
  });

  describe('invalid args', () => {
    it('should throw', () => {
      expect(() => isitfriday('__LOL__')).toThrow('Invalid input');
    });
  });
});
