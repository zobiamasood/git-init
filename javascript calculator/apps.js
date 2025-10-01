var input = document.getElementsByTagName("input")[0];
// numbers
function set0() {
    input.value += "0";
}
function set1() {
    input.value += "1";
}
function set2() {
    input.value += "2";
}
function set3() {
    input.value += "3";
}
function set4() {
    input.value += "4";
}
function set5() {
    input.value += "5";
}
function set6() {
    input.value += "6";
}
function set7() {
    input.value += "7";
}
function set8() {
    input.value += "8";
}
function set9() {
    input.value += "9";
}
//operators
function add() {
    input.value += "+";
}
function sub() {
    input.value += "-";
}
function multi() {
    input.value += "*";
}
function divide() {
    input.value += "/";
}
function modulus() {
    input.value += "%";
}
function clr() {
    input.value = "";
}
function del() {
    input.value = input.value.slice(0,-1);
}
function dot() {
    input.value += ".";
}
function equal() {
  let result = calculate(input.value);
  input.value = result;
}
function sign() {
   if (input.value.charAt(0)=== "-") {
     input.value = input.value.slice(1)
   }
   else {
    input.value =  "-" + input.value
   }
}
function calculate(str) {
    var numbers = str.split(/[\+\-\*\/%]/).map(Number);
    var operators = str.replace(/[0-9\.]/g, "").split("");
    for (i=0; i< operators.length; i++) {
        if(operators[i]==="*" || operators[i]==="/" || operators[i]==="%") {
            var result;
            if(operators[i]==="*" )result = numbers[i]*numbers[i+1]
            if(operators[i]==="/" )result = numbers[i]/numbers[i+1]
            if(operators[i]==="%" )result = numbers[i]%numbers[i+1]
            numbers.splice(i,2 ,result)
            operators.splice(i,1)
            i--;
        }     
    }
    var total =numbers[0]
    for(var i=0; i<operators.length; i++) {
        if(operators[i]==="+") total += numbers[i+1]
        if(operators[i]==="-") total -= numbers[i+1]
    }
    return total;
}