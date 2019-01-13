const getNewArray = require('./second');

const mockArray = [
  'Scott',
  'Buzz',
  'Patrick',
  'Henry',
  'Jack',
];

describe('second.js', () => {
  it('should return true', () => {
    const wantedResult = [
      ['Scott', 'Buzz'],
      ['Patrick', 'Henry'],
      ['Jack'],
    ];

    const result = getNewArray(mockArray);

    expect(result).toEqual(wantedResult);
  });
});