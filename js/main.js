function getRandomFloat(min, max) {
  if (min === max) {
    return 0;
  }
  const minValue = Math.min(min, max);
  const maxValue = Math.max(min, max);
  return Math.random() * (maxValue - minValue) + minValue;
}
// eslint-disable-next-line no-console
console.log(getRandomFloat(1, 10));



function getRandomInRange(min, max) {
  if (min === max) {
    return 0;
  }
  const minValue = Math.min(min, max);
  const maxValue = Math.max(min, max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
// eslint-disable-next-line no-console
console.log(getRandomInRange(1, 10));
