const getUniqueNames = require('./first');

const mockArray = [
  {
    person: null,
  },
  {
    person: {
      id: 12345,
      name: 'John'
    },
  },
  {
    person: {
      id: 123456,
      name: 'Scott'
    },
  },
  {
    person: {
      id: 12345,
      name: 'John'
    },
  },
  {
    person: {
      id: 1234567,
      name: 'Buzz'
    },
  },
  {
    person: {
      id: 12345,
      name: 'John'
    },
  },
];

describe('first.js', () => {
  it('should return true', () => {
    const wantedResult = ['John', 'Scott', 'Buzz'];

    const result = getUniqueNames(mockArray);

    expect(result).toEqual(wantedResult);
  });
});