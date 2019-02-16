function getNewArray(array) {
  const amounts = array.map((receipt) => receipt.amount);
  return amounts.reduce((acc, cur) => acc + cur);
}