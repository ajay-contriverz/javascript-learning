"use strict";

const account1 = {
  owner: "Ajay Kumar",
  movements: [800, 355.23, -306.5, 25000, -442.21, 133.9, 100.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2010-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-05-27T17:01:17.194Z',
    '2022-10-11T23:36:17.929Z',
    '2022-11-16T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN'
};

const account2 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 2222,
  movementsDates: [
    '2010-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-05-27T17:01:17.194Z',
    '2022-10-11T23:36:17.929Z',
    '2022-11-16T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT'
};

const account3 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US'
};

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

const accounts = [account1, account2, account3];

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

const options ={
  weekday: "short",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true
}
let currentUser, logoutInterval;
let currency;

const transactionDate = function(date, locale){
  const calcDateFun = (date1, date2) => Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
  const dateFun = calcDateFun(new Date(), date);
  if (dateFun === 0) {
    return "Today";
  } else if (dateFun === 1){
    return "Yesterday";
  } else if (dateFun >= 7){
    return new Intl.DateTimeFormat(locale, {day: "numeric", month: "long", year: "numeric"}).format(date)
  }
}

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
const currencyFormat = (local, currency, format) => new Intl.NumberFormat(local, {style: "currency", currency: currency}).format(format);

const displayTransaction = function (acc, sort = false) {
  const transSort = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
  containerMovements.innerHTML = "";
  transSort.forEach(function (trans, i) {
    const moveDate = new Date(acc.movementsDates[i]);
    const localSet = acc.locale;
    const dateCurrent = transactionDate(moveDate, localSet)
    const transStatus = trans > 0 ? "deposit" : "withdrawal";
    const translocal = currencyFormat(localSet, acc.currency, trans);
    const transRow = `
            <div class="movements__row">
                <div class="movements__type movements__type--${transStatus}">${
      i + 1
    } ${transStatus}</div>
                <div class="movements__date">${dateCurrent}</div>
                <div class="movements__value">${translocal}</div>
            </div>
        `;
    containerMovements.insertAdjacentHTML("afterbegin", transRow);
  });
};


const calcBalance = function(transaction){
  const totalDeposits = transaction
    .filter((mov) => mov > 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumIn.innerHTML = currencyFormat(currentUser.locale, currentUser.currency, totalDeposits);
  
  const totalWithdrowals = transaction
  .filter((mov) => mov < 0)
  .reduce((acc, trans) => acc + trans, 0);
  labelSumOut.innerHTML = currencyFormat(currentUser.locale, currentUser.currency, Math.abs(totalWithdrowals));
  
  const balance = transaction
  .reduce((acc, trans) => acc + trans, 0);
  currentUser.balance = balance;
  labelBalance.innerHTML = currencyFormat(currentUser.locale, currentUser.currency, currentUser.balance);
}

const logoutTimer = function(){
  const logClock = () => {
    let min = String(Math.trunc(logoutSeconds / 60)).padStart(2, 0);
    let sec = String(logoutSeconds % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`
    if (logoutSeconds === 0){
      clearInterval(logoutInterval);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }
    logoutSeconds--
  }
  let logoutSeconds = 120;
  logClock()
  const logoutInterval = setInterval(logClock, 1000);
  return logoutInterval;
  
}

const calcInterst = function(acc){
  const totalInterst = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter(deposit => deposit >= 1)
    .reduce((acc, val) => acc + val, 0);
  labelSumInterest.innerHTML = currencyFormat(currentUser.locale, currentUser.currency, totalInterst);
}

const updateUI = function(acc){
  findUserName(accounts);
  displayTransaction(acc);
  calcBalance(acc.movements);
  calcInterst(acc);
}

btnLogin.addEventListener("click", function(){
  currentUser = accounts.find(acc => acc.userName === inputLoginUsername.value);
  if (currentUser?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentUser.owner.split(" ")[0]}`;
    setInterval(() => {
      const today = new Date();
      labelDate.innerHTML = new Intl.DateTimeFormat((currentUser.locale), options).format(today);
    }, 1000);
    updateUI(currentUser);
    containerApp.style.opacity = 1;
    if(logoutInterval) clearInterval(logoutInterval);
    logoutInterval = logoutTimer();
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
      currentUser.movementsDates.push(new Date().toISOString());
      transferToAcc.movementsDates.push(new Date().toISOString());
      updateUI(currentUser);
    }
  }
  if(logoutInterval) clearInterval(logoutInterval);
  logoutInterval = logoutTimer();
  inputTransferTo.value = inputTransferAmount.value = "";
});

btnLoan.addEventListener("click", function(e){
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  const loanEligible = currentUser.movements.some(mov => mov >= loanAmount / 10);
  if (loanAmount <= 0){
    alert("Enter a valid loan amount!")
  } else if (loanEligible) {
    currentUser.movements.push(loanAmount);
    currentUser.movementsDates.push(new Date().toISOString());
    updateUI(currentUser); 
  } else {
    alert(`Your are not Eligible for ${loanAmount}${currency} loan!`)
  }
  if(logoutInterval) clearInterval(logoutInterval);
  logoutInterval = logoutTimer();
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
  displayTransaction(currentUser.movements, !sorted)
  sorted = !sorted;
})
