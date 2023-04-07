document.getElementById("expForm").addEventListener("submit", addExpense);

// initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense(e) {
  e.preventDefault();

 
  // get type, name, date, and amount
  let type = document.getElementById("type").value;
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let amount = document.getElementById("amount").value;
  let totalAmount = document.getElementById("total-amount");
  const totalAmountButton = document.getElementById("total-amount-button");
  const errorMessage = document.getElementById("budget-error");
  const amountTotal = document.getElementById("amount");
  const billsTotal = document.getElementById("bills");
  const balanceTotal = document.getElementById(balances);
  let tempAmount = 0;

  totalAmountButton.addEventListener("click", () => {
    tempAmount = amountTotal.value;
    //empty or negative input
    if (tempAmount === "" || tempAmount < 0) {
      errorMessage.classList.remove("hide");
    } else {
      errorMessage.classList.add("hide");
      //Set Budget
      amount.innerHTML = tempAmount;
      //Set Balance
      balanceTotal.innerText = tempAmount - balanceTotal.innerText;
      //Clear Input Box
      totalAmount.value = "";
    }
  });

    let expenditure = parseInt(amount.value);
    let sum = parseInt(expenditureValue.innerText) + expenditure;
    expenditureValue.innerText = sum;

    
 if (type != "chooseOne" && name.length > 0 && date != 0 && amount > 0) {
    const expense = {
      type,
      name,
      date,
      amount,
      id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
    };

    expenses.push(expense);

  
    // localStorage
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  document.getElementById("expForm").reset();
  showExpenses();
}

const showExpenses = () => {
  const expenseTable = document.getElementById("expenseTable");

  expenseTable.innerHTML = "";

  for (let i = 0; i < expenses.length; i++) {
    expenseTable.innerHTML += `
            <tr>
                <td>${expenses[i].type}</td>
                <td>${expenses[i].name}</td>
                <td>${expenses[i].date}</td>
                <td>$${expenses[i].amount}</td>
                <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">
                    Delete</td>
            </tr>
        `;
  }
};

const deleteExpense = (id) => {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id == id) {
      expenses.splice(i, 1);
    }
  }

  
  // localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));
  showExpenses();
};

showExpenses();




