function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hoursToMinutes = convertHoursToMinutes(3);
console.log('convert hours to minutes: ', hoursToMinutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('Max');
console.log('greeting: ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addMultiply = addAndMultiplyBy5(2, 2);
console.log('add and multiply by 5 :', addMultiply)
;

function multiplyAndDivide(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyDivide = multiplyAndDivide(2, 2);
console.log('multiply and divide by 5 :', multiplyDivide)
;
