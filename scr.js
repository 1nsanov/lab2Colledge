function stringPlus() {
  let stringNum = "";
  let numberInput = prompt("Введите число.");
  var arrayChar = numberInput.split("");
  for (let i = 0; i < arrayChar.length; i++) {
    stringNum = `${stringNum}${stringNum === "" ? "" : "+"}${arrayChar[i]}`;
  }

  alert(stringNum);
}

function task2() {
  let count = 0;
  let randomNumber = 0;
  let sum = 0;
  while (count <= 10) {
    randomNumber = Math.floor(Math.random() * 100);
    while (true) {
      if (randomNumber === 0) {
        randomNumber = Math.floor(Math.random() * 100);
      } else {
        break;
      }
    }
    if (Math.round(randomNumber % 5) === 0) {
      console.log(randomNumber);
      sum += randomNumber;

      count++;
    }
  }
  alert("Сумма равна" + sum);
}

function task3() {
    let countTrue = 0;
    let operator
    for (let i = 1; i <= 5; i++) {
      let randomNumber1 = Math.floor(Math.random() * 20);
      let randomNumber2 = Math.floor(Math.random() * 20);
      let operatorRand = Math.floor(Math.random() * 2);
      switch (operatorRand) {
        case 0:
          operator = ' + '
          break;
        case 1:
          operator = ' - '
          break;
      }
      let result = parseInt(
        prompt(randomNumber1 + operator + randomNumber2 + " = ?")
      );
      if(operator === ' + '){
        if (randomNumber1 + randomNumber2 === result) {
            countTrue++;
          }
      }
      else if(operator === ' - '){
        if (randomNumber1 - randomNumber2 === result) {
            countTrue++;
          }
      }
      
    }
    let stringResult;
    switch (countTrue) {
      case 0:
        stringResult = "Решено 0 из 5.   Ваша оценка 2 c минусом!!!";
        break;
      case 1:
        stringResult = "Решено 1 из 5.   Ваша оценка 2!!!";
        break;
      case 2:
        stringResult = "Решено 2 из 5.   Ваша оценка 3 c минусом!!!";
        break;
      case 3:
        stringResult = "Решено 3 из 5.   Ваша оценка 3!";
        break;
      case 4:
        stringResult = "Решено 4 из 5.   Ваша оценка 4!";
        break;
      case 5:
        stringResult = "Решено 5 из 5.   Ваша оценка 5! Молодец!";
        break;
    }
    alert(stringResult);
  }
  