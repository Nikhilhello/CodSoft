let result = document.getElementById("result");
let buttons = document.querySelectorAll("input[type='button']");

let operator = "";
let num1 = "";
let num2 = "";
let displayOperation = "";

buttons.forEach((button) => 
  {
  button.addEventListener("click", (e) => 
    {
    let value = e.target.value;

    if (value === "c") 
    {
      result.value = "";
      operator = "";
      num1 = "";
      num2 = "";
      displayOperation = "";
    } else if (value === "=") 
    {
      if (num2 !== "") 
      {
        if (operator === "+") 
        {
          result.value = parseFloat(num1) + parseFloat(num2);
        } else if (operator === "-") 
        {
          result.value = parseFloat(num1) - parseFloat(num2);
        } else if (operator === "*") 
        {
          result.value = parseFloat(num1) * parseFloat(num2);
        } else if (operator === "/") 
        {
          result.value = parseFloat(num1) / parseFloat(num2);
        }
        num1 = "";
        num2 = "";
        operator = "";
        displayOperation = "";
      } else
      {
        result.value = "Error";
      }
    } else if (value === "+" || value === "-" || value === "*" || value === "/")
    {
      operator = value;
      num1 = result.value;
      result.value = "";
      displayOperation = num1 + " " + operator + " ";
    } else 
    {
      result.value += value;
      if (operator !== "") 
      
        num2 = result.value.replace(displayOperation, "");
        result.value = displayOperation + num2;
      }
    }
  });
});
