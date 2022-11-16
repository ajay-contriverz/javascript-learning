"use strict";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const loginForm = document.querySelector(".login");
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const euro = "€";
(function () {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  labelDate.innerHTML = dd + "/" + mm + "/" + yyyy;
})();

const findUserName = function (accounts) {
  accounts.forEach(function (account) {
    const getUserName = account.owner
      .toLowerCase()
      .split(" ")
      .map((first) => first[0])
      .join("");
    account.userName = getUserName;
  });
};
findUserName(accounts);
let currentUser;

const displayTransitions = function (transitions, sort = false) {

  const transSort = sort ? transitions.slice().sort((a, b) => a - b) : transitions;

  containerMovements.innerHTML = "";
  transSort.forEach(function (trans, i) {
    const transStatus = trans > 0 ? "deposit" : "withdrawal";
    const transRow = `
            <div class="movements__row">
                <div class="movements__type movements__type--${transStatus}">${
      i + 1
    } ${transStatus}</div>
                <div class="movements__date"> days ago</div>
                <div class="movements__value">${trans}${euro}</div>
            </div>
        `;
    containerMovements.insertAdjacentHTML("afterbegin", transRow);
  });
};


const calcBalance = function(transitions){
  const totalDeposits = transitions
    .filter((mov) => mov > 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumIn.innerHTML = totalDeposits + euro;

  const totalWithdrowals = transitions
    .filter((mov) => mov < 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumOut.innerHTML = Math.abs(totalWithdrowals) + euro;

  const balance = transitions
    .reduce((acc, trans) => acc + trans, 0);
    currentUser.balance = balance;
    labelBalance.innerHTML = currentUser.balance + euro;
}

const calcInterst = function(acc){
  const totalInterst = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter(deposit => deposit >= 1)
    .reduce((acc, val) => acc + val, 0);
  labelSumInterest.innerHTML = totalInterst + euro;
}

const updateUI = function(acc){
  findUserName(accounts);
  displayTransitions(acc.movements);
  calcBalance(acc.movements);
  calcInterst(acc);
}

btnLogin.addEventListener("click", function(){
  currentUser = accounts.find(acc => acc.userName === inputLoginUsername.value);
  if (currentUser?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentUser.owner.split(" ")[0]}`;
    containerApp.style.opacity = 1;
    updateUI(currentUser);
  } else {
    alert("Username or password in invalid")
  }
  // inputLoginUsername.value = inputLoginPin = "";
})

btnTransfer.addEventListener("click", function(e){
  e.preventDefault();
  const transferToAcc = accounts.find(acc => inputTransferTo.value === acc.userName);
  const transferAmt = Number(inputTransferAmount.value);
  if (transferToAcc === "" || transferToAcc === undefined || transferToAcc === currentUser) {
    alert("Enter a valid account name!")
  } else {
    if (transferAmt > currentUser.balance) {
      alert("Your account balance insufficient!")
    } else if (transferAmt <= 0){
      alert("Please Enter a valid transfer amount!")
    } else {
      currentUser.movements.push(-transferAmt);
      transferToAcc.movements.push(transferAmt);
      updateUI(currentUser);
    }
  }
  inputTransferTo.value = inputTransferAmount.value = "";
});

btnLoan.addEventListener("click", function(e){
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  const loanEligible = currentUser.movements.some(mov => mov >= loanAmount / 10);
  if (loanAmount <= 0){
    alert("Enter a valid loan amount!")
  } else if (loanEligible) {
    currentUser.movements.push(loanAmount);
    updateUI(currentUser); 
  } else {
    alert(`Your are not Eligible for ${loanAmount}${euro} loan!`)
  }
  inputLoanAmount.value = "";
})

btnClose.addEventListener("click", function(e){
  e.preventDefault();
  const accountToDelete = accounts.findIndex(acc => inputCloseUsername.value === acc.userName);
  if (currentUser.pin === Number(inputClosePin.value) && inputCloseUsername.value === currentUser.userName) {
    accounts.splice(accountToDelete, 1);
    containerApp.style.opacity = 0;
    console.log(`${currentUser.owner}'s account has been closed!`)
    inputCloseUsername.value = inputClosePin.value = "";
  } else {
    alert("Username or password in invalid")
  }
})

// const totalBankBalance = accounts.map(acc => acc.movements).flat().reduce((a, val) => a + val);
// const totalBankBalance = accounts.flatMap(acc => acc.movements).reduce((a, val) => a + val);
// console.log(totalBankBalance)

let sorted = false;
btnSort.addEventListener("click", function(e){
  e.preventDefault();
  displayTransitions(currentUser.movements, !sorted)
  sorted = !sorted;
})
