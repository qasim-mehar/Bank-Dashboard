"strict mode"
//user's objects
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130],
  interestRate: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50],
  interestRate: 0.7,
  pin: 3333,
};

//array of objects  
const accounts = [account1, account2, account3];
//elements
const labelWelcome = document.querySelector(".Welcome");
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
const inputLoginPin=querySelector.querySelector(".pin-input");
const inputAccountNumber=document.getElementById("recipient");
const inputSendAmount =document.getElementById("send-amount");
const inputLoanAmount=document.getElementById("loan-amount")
const inputUserBlockAcc=document.querySelector(".block-username");
const inputPinBlockAcc=document.querySelector(".block-pin");



