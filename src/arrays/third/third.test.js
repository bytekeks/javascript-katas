const getNewArray = require('./third');

const mockArray = [
  {
    receiptId: 1,
    amount: 4.50,
  },
  {
    receiptId: 2,
    amount: 4.50,
  },
  {
    receiptId: 3,
    amount: 1,
  },
];

describe('third.js', () => {
  it('should return true', () => {
    const wantedResult = 10;


    const result = getNewArray(mockArray);

    expect(result).toEqual(wantedResult);
  });
});