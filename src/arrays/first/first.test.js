const a = require('./first');

describe('first.js', () => {
  it('should return true', () => {
    expect(a()).toBe(true);
  });
});