//Regular
const numbers = [1, 2, 3, 4];

const squaredRegular = numbers.map(function (num) {
  return num * num;
});
//Arrow
const squaredArrow = numbers.map((num) => num * num);

console.log(squaredArrow);
console.log(squaredArrow);
