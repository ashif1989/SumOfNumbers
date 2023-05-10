let SumOfNumbers = (num) => {
  let convertToString = num + "";
  let convertToArray = convertToString.split("");
  let convertToInt = convertToArray.map((arr) => parseInt(arr));

  let sum = convertToInt.reduce((a, b) => a + b);

  if (sum >= 10) {
    SumOfNumbers(sum);
  } else {
    console.log(sum);
  }
};

SumOfNumbers(1234);
