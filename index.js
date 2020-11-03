function getHistory() {
  return document.getElementById('history-value').innerText;
}

function printHistory(num) {
  document.getElementById('history-value').innerText = num;
}

function getOutput() {
  return document.getElementById('output-value').innerText;
}

function printOutput(num) {
  if (num == "") {
      document.getElementById('output-value').innerText = num;
  } else {
      document.getElementById('output-value').innerText = getFormattedNumber(num);
  }

}




function getFormattedNumber(num) {
  if (num == '-') {
      return '';
  }
  let n = Number(num);
  let value = n.toLocaleString('en');
  return value;
}


function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ''));
}

let operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
      if (this.id == 'clear') {
          printHistory('');
          printOutput('');
      } else if (this.id == 'backspace') {
          var output = reverseNumberFormat(getOutput()).toString();
          if (output) { // Recognize if output has value
              output = output.substr(0, output.length - 1);
              printOutput(output);
          }
      } else {
          let output = getOutput();
          let history = getHistory();
          if (output == '' && history != '') {
              if (isNaN(history[history.length - 1])) {
                  history = history.substr(0, history.length - 1);
              }
          }
          if (output != '' || history != '') {
              
              output = output == '' ? output : reverseNumberFormat(output);
              history = history + output;
              if (this.id == '=') {
                  var result = eval(history);
                  printOutput(result);
                  printHistory('');
              } else {
                  history = history + this.id;
                  printHistory(history);
                  printOutput('');
              }
          }
      }
  });
}

let number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
      let output = reverseNumberFormat(getOutput());
      if (output != NaN) { 
          output = output + this.id;
          printOutput(output);
      }
  });
}


$(".btn").click(function(event) {
  $(event.target).blur();
  processButton(event.target);
});

$(document).on("click", ".calc-history-eq", function(event) {
  var tokens = calcHistory[parseInt($(event.target).attr("id").substring(2))].tokens;
  console.log(parseInt($(event.target).attr("id").substring(2)));
  console.log(calcHistory);
  console.log(tokens);
  tokenList = tokens;
  displayEquation();
});


//Adding the calculator history with result and calculations.

let result = printOutput

result = document.getElementById('hist').innerText;


