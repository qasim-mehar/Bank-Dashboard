"strict mode"
let currentLoginAcc;
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130],
  descriptions: [
    "Groceries",
    "Salary",
    "Restaurant",
    "Freelance",
    "Rent",
    "Electricity"
  ],
  dates: [
    "2025-05-01T10:24:00",
    "2025-05-03T14:15:00",
    "2025-05-05T19:45:00",
    "2025-05-06T09:30:00",
    "2025-05-08T12:00:00",
    "2025-05-10T17:20:00"
  ],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Sarah Johnson",
  movements: [5000, -1500, -200, 800, -50],
  descriptions: [
    "Salary",
    "Rent",
    "Utilities",
    "Sold Items",
    "Snacks"
  ],
  dates: [
    "2025-05-02T08:00:00",
    "2025-05-04T13:00:00",
    "2025-05-05T15:45:00",
    "2025-05-07T18:10:00",
    "2025-05-10T20:05:00"
  ],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Ali Khan",
  movements: [1000, -100, -250, 400, -300],
  descriptions: [
    "Freelance",
    "Lunch",
    "Shopping",
    "Gift",
    "Online Course"
  ],
  dates: [
    "2025-05-01T11:00:00",
    "2025-05-03T14:30:00",
    "2025-05-04T16:15:00",
    "2025-05-07T10:45:00",
    "2025-05-09T21:10:00"
  ],
  interestRate: 1.0,
  pin: 3333,
};

const account4 = {
  owner: "Emily Clark",
  movements: [1200, -100, -500, 700, -80],
  descriptions: [
    "Bonus",
    "Transport",
    "Groceries",
    "Part-time Job",
    "Coffee"
  ],
  dates: [
    "2025-05-02T12:10:00",
    "2025-05-03T15:00:00",
    "2025-05-06T18:20:00",
    "2025-05-08T09:35:00",
    "2025-05-10T22:00:00"
  ],
  interestRate: 0.9,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


//elements
const labelWelcome = document.querySelector(".owner");
const lableTopDate=document.querySelector(".date");
const lableTotalBalance = document.querySelector(".total-balance");
const lableTransactionDate=document.querySelector(".transaction-date");
const labelWithdrawal=document.querySelector(".withdrawal");
const labelDeposit=document.querySelector(".deposit");
const labelSummaryDeposite=document.querySelector(".summary-deposite");
const labelSummaryWithdrawal=document.querySelector(".summary-withdrawal");
const labelTimeoutTimer=document.querySelector(".timeout-timer");
//buttons
const btnTransferFund=document.querySelector(".btn-transfer-fund");
const btnRequestLoan=document.querySelector(".btn-request-loan");
const btnBlockAccount=document.querySelector(".btn-block-account")
const btnLogout =document.querySelector(".logout-btn");
const btnLogin=document.querySelector(".btn-login");
//inputfields
const inputLoginUsername = document.querySelector(".login-username")
const inputLoginPin=document.querySelector(".pin-input");
const inputAccountNumber=document.getElementById("recipient");
const inputSendAmount =document.getElementById("send-amount");
const inputLoanAmount=document.getElementById("loan-amount")
const inputUserBlockAcc=document.getElementById("username");
const inputPinBlockAcc=document.getElementById("pin");
//
const movementsContainer=document.getElementById("cont");


//this fn will get an aray of accounts obj, and first it will ittrate over all the account obj and  create an array or all the part of owner's name using split then it will ittrate through that array and create an array of only first latter of owner's name using map finally it will join all the array elements into characters and convert them info lower case and assign a username to every account obj.
const createUsename=function(accs){
  accs.forEach(acc => {
   acc.user= acc.owner.split(" ").map(element=>element[0]).join('').toLowerCase();
  });
}
createUsename(accounts);
const displayMovements=function(acc){
  movementsContainer.innerHTML="";
 
 acc.movements.forEach((transaction, i) => {
  const disc= account1.descriptions;
  const type =transaction>0?"deposit":"withdrawal";
  let html=`<li class="transaction-item">
                    <div class="transaction-details">
                        <div>${disc[i]}</div>
                        <div class="transaction-date ">May 1, 2025 • 07:30 PM</div>
                    </div>
                    <div class="transaction-amount ${type}">-${transaction}</div>
                </li>`
  movementsContainer.insertAdjacentHTML("afterbegin", html);
 });
}
displayMovements(account1);

const displayTotalBalance=function(acc){
  const total=acc.movements.reduce((cur , acc,)=>  cur+acc ,0)
  lableTotalBalance.textContent=`₨ ${total}`;
}
displayTotalBalance(account1);

const displayWellcomeMsg=function(acc){
  labelWelcome.textContent=acc.owner.split(" ")[0];
}
displayWellcomeMsg(account1);

const displayTransactionSummary=function(acc){
  const TotalDiposit=acc.movements.filter(amount=>amount>0).reduce((acc,cur)=>acc+cur);
  const TotalWithdrawal=acc.movements.filter(amount=>amount<0).reduce((acc,cur)=>acc+cur);
  labelSummaryDeposite.textContent=TotalDiposit;
  labelSummaryWithdrawal.textContent=TotalWithdrawal;
}
displayTransactionSummary(account1);
// const Login = function(e){
//   e.preventDefault();
// const username =inputUserBlockAcc.value;
// const pin =Number(inputPinBlockAcc.value);
// currentLoginAcc=accounts.find(acc=>acc.user==username);

// if ( currentLoginAcc.pin===pin) {
//   console.log("login succefully")
//   window.location.href = "index.html";
// }else{
  
//   console.log("Wrong credentials");
// }
// }




// btnLogin.addEventListener("click", Login);

