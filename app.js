var expenses = [];
var monthlyBudget;

const budgetVal = document.getElementById("budgetVal");
const finalBudg = document.getElementById("finalBudg");
const addDes = document.getElementById("addDes");
const addAmount = document.getElementById("addAmount");
const addDate = document.getElementById("addDate");
const dataList = document.getElementById("dataList");
const finalExp = document.getElementById("finalExp");
const remBudget = document.getElementById("remBudget");

function addBudget() {

  if (budgetVal.value == '') {
alert('Please Enter Your Budget!')
  }
  else {
    finalBudg.innerText = "$" + budgetVal.value;

  }
}

function addExpense() {
  if (addDes.value === "" || addAmount.value === "" || addDate.value === "") {
    alert('Please Enter Your Expenses');
  } else {
    const divElem = document.createElement("div");
    divElem.classList.add("data2");
    dataList.appendChild(divElem);

    const h4Elem = document.createElement("h4");
    divElem.appendChild(h4Elem);
    const h4Elem2 = document.createElement("h4");
    divElem.appendChild(h4Elem2);
    const h4Elem3 = document.createElement("h4");
    divElem.appendChild(h4Elem3);
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList.add("btn");
    divElem.appendChild(editButton);
    const trashButton = document.createElement("button");
    trashButton.innerText = "Delete";
    trashButton.classList.add("btn");
    divElem.appendChild(trashButton);

  

    h4Elem.innerText = addDes.value ;
    h4Elem2.innerText = addAmount.value;
    h4Elem3.innerText = addDate.value;

    editButton.addEventListener("click", function () {
      enableEdit(addDes, addAmount, addDate, divElem);
    });

    trashButton.addEventListener("click", function () {
      dataList.removeChild(divElem);
    });

    addExpense2();
  }
}

function addExpense2() {
  var expenseAmount = parseFloat(addAmount.value);

  addAmount.value = "";
  addDes.value = "";
  addDate.value = "";

  expenses.push(expenseAmount);

  // Calculate and display the total expense amount
  var totalExpenseDiv = document.getElementById("finalExp");
  var totalExpense = expenses.reduce(function (total, expense) {
    return total + expense;
  }, 0);

  totalExpenseDiv.textContent = "$" + totalExpense;

  monthlyBudget = budgetVal.value;
  var remainingBalance = monthlyBudget - totalExpense;
  remBudget.textContent = "$" + remainingBalance;
}

function enableEdit(descriptionInput, amountInput, dateInput, expenseElem) {
  descriptionInput.value = expenseElem.querySelector("h4:nth-child(1)").innerText;
  amountInput.value = expenseElem.querySelector("h4:nth-child(2)").innerText;
  dateInput.value = expenseElem.querySelector("h4:nth-child(3)").innerText;

  expenseElem.style.display = "none";

  descriptionInput.focus();
}

