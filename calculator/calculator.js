function Solve(val) {
  var res = document.getElementById("res");
  res.value += val;
}

function Result() {
  var num1 = document.getElementById("res").value;
  var num2 = eval(num1);
  document.getElementById("res").value = num2;
}

function Clear() {
  var input = document.getElementById("res");
  input.value = "";
}

function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }
