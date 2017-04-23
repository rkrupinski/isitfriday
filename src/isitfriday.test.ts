import isitfriday from './isitfriday';

expect.extend({
  toBeOneOf(received, arg) {
    const pass = arg.includes(received);

    return {
      message() {
        return `expected ${received} ${pass ? '' : 'not '}to be one of: ${arg.join(', ')}`;
      },
      pass
    };
  },
});

describe('isitfriday', function () {
  it('Should work when called with no arguments', function () {
    expect(isitfriday()).toBeOneOf([true, false]);
  });

  it('Should return true on friday', function () {
    const testDate = new Date('Fri Apr 21 2017 23:59:59 GMT+0200 (CEST)');

    expect(isitfriday(testDate)).toBe(true);
  });

  it('Should return false on other days', function () {
    const testDate = new Date('Thu Apr 20 2017 23:59:59 GMT+0200 (CEST)');

    expect(isitfriday(testDate)).toBe(false);
  });
});
