// Function//
const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", function () {
  // Function variable
  const income = document.getElementById("income").innerText;
  const rentInput = document.getElementById("rent");
  const foodInput = document.getElementById("food");
  const utilitiesInput = document.getElementById("utilities");
  const insuranceInput = document.getElementById("insurance");
  const expensesDiv = document.getElementById("expenses");
  const balanceDiv = document.getElementById("balance");
  const errorText = document.getElementById("error-text");

  //Variable value
  const incomeValue = parseFloat(income);
  const rentValue = parseFloat(rentInput.value); // We use "parseFloat()" function to convert input field 'srting' value to 'number'

  const foodValue = parseFloat(foodInput.value);
  const utilitiesValue = parseFloat(utilitiesInput.value);
  const insuranceValue = parseFloat(insuranceInput.value);

  // if (rentValue && foodValue && utilitiesValue && insuranceValue ) {
  //   console.log(rentValue);
  //   errorText.innerHTML = "";
  //   rentInput.value = "";
  //   foodInput.value = "";
  //   utilitiesInput.value = "";
  //   insuranceInput.value = "";
  // } else {
  //   errorText.innerHTML = `<p>Please enter a valid number to Calculate</p>`;
  // }

  // Calculation of total cost as "cost" and remaining balance as "balance"
  if (
    rentValue >= 0 &&
    foodValue >= 0 &&
    utilitiesValue >= 0 &&
    insuranceValue >= 0
  ) {
    errorText.innerHTML = "";
    rentInput.value = "";
    foodInput.value = "";
    utilitiesInput.value = "";
    insuranceInput.value = "";

    const cost = rentValue + foodValue + utilitiesValue + insuranceValue;
    expensesDiv.innerText = cost;
    const balance = incomeValue - cost;
    balanceDiv.innerText = balance;
  } else {
    errorText.innerHTML = `<p>Please Enter a Valid Number to Calculate</p>`;
  }
  {
  }
});
