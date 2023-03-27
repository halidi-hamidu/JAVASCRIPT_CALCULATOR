form.onsubmit = (e) => {
  validateInpt(e);
};
function validateInpt(e) {
  e.preventDefault();
  var num1 = document.getElementById("num1").value;
  var operation = document.getElementById("operation").value;
  var num2 = document.getElementById("num2").value;

  var button = document.getElementById("button");
  var form = document.getElementById("form");
  var button_clear = document.getElementById("button_clear");
  var result = "";
  if (operation == "+") {
    result = Number(num1) + Number(num2);
    document.getElementById("output").innerHTML = result;

    // return result;
  }
  if (operation == "-") {
    result = Number(num1) - Number(num2);
    document.getElementById("output").innerHTML = result;
    //   return result;
  }
  if (operation == "*") {
    result = Number(num1) * Number(num2);
    document.getElementById("output").innerHTML = result;
    //   return result;
  }

  if (operation == "/") {
    result = Number(num1) / Number(num2);
    document.getElementById("output").innerHTML = result;
    //   return result;
  }
  button_clear.onclick = () => {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operation").value = "";
    document.getElementById("output").innerHTML = "______";
  };
}
