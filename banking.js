"strict mode"
import { accounts, setCurrentAcc, getCurrentAcc, loadAccounts, saveAccounts , showToast} from './Data.js';
// import toastr from 'toastr';
// import 'toastr/build/toastr.min.css';
loadAccounts(); // ✅ Important
let currentLoginAcc = getCurrentAcc();




//elements
const labelWelcome = document.querySelector(".owner");
const lableTopDate=document.querySelector(".date");
const lableTotalBalance = document.querySelector(".total-balance");
const lableTransactionDate=document.querySelector(".transaction-date");
const labelWithdrawal=document.querySelector(".withdrawal");
const labelDeposit=document.querySelector(".deposit");
const labelSummaryDeposite=document.querySelector(".summary-deposite");
const labelSummaryWithdrawal=document.querySelector(".summary-withdrawal");
const labelTimeoutTimer=document.querySelector(".l");
//buttons
const btnTransferFund=document.querySelector(".btn-transfer-fund");
const btnRequestLoan=document.querySelector(".btn-request-loan");
const btnRepayLoan=document.querySelector(".btn-repay-loan")
const btnBlockAccount=document.querySelector(".btn-block-account")
const btnLogout=document.querySelector(".logout-btn")
//inputfields
const inputLoginUsername = document.querySelector(".login-username")
const inputLoginPin=document.querySelector(".pin-input");
const inputAccountUsername=document.getElementById("recipient");
const inputSendAmount =document.getElementById("send-amount");
const inputLoanAmount=document.getElementById("loan-amount")
const inputUserBlockAcc=document.querySelector(".block-username");
const inputPinBlockAcc=document.querySelector(".block-pin");
const inputPayLoan=document.getElementById("repay-amount");
const movementsContainer=document.querySelector(".transaction-list");
if (!currentLoginAcc) {
  window.location.href = "index.html";
} else {
  updateUI(currentLoginAcc);
}

function updateUI(acc){
  calcTimout();
  displayMovements(acc);
  displayTotalBalance(acc);
  displayTransactionSummary(acc);
  displayWellcomeMsg(acc);

}
function displayMovements(acc){
  movementsContainer.innerHTML="";
 
 acc.movements.forEach((transaction, i) => {
  const disc= acc.descriptions;
  const type =transaction>0?"deposit":"withdrawal";
  let html=`<li class="transaction-item">
                    <div class="transaction-details">
                        <div>${disc[i]}</div>
                        <div class="transaction-date ">May 1, 2025 • 07:30 PM</div>
                    </div>
                    <div class="transaction-amount ${type}">${transaction}</div>
                </li>`
  movementsContainer.insertAdjacentHTML("afterbegin", html);
  
 });
}


function displayTotalBalance(acc){
  const total=acc.movements.reduce((cur , acc,)=>  cur+acc ,0)
  lableTotalBalance.textContent=`₨ ${total}`;
}
// displayTotalBalance(account1);

function displayWellcomeMsg(acc){
  labelWelcome.textContent=acc.owner.split(" ")[0];
}
// displayWellcomeMsg(account1);

function displayTransactionSummary(acc){
  const TotalDiposit=acc.movements.filter(amount=>amount>0).reduce((acc,cur)=>acc+cur);
  const TotalWithdrawal=acc.movements.filter(amount=>amount<0).reduce((acc,cur)=>acc+cur);
  labelSummaryDeposite.textContent=TotalDiposit;
  labelSummaryWithdrawal.textContent=TotalWithdrawal;
}
// displayTransactionSummary(account1);

function displayFormateTimout(seconds){
  let min=String(Math.trunc(seconds/60)).padStart(2,0);
  let sec=String((seconds%60)).padStart(2,0);
  labelTimeoutTimer.textContent=`${min}:${sec}`;
  
}
function calcTimout() {
  let count =300;
  const countdown= setInterval(()=>{
    displayFormateTimout(count);
    count--;
    if (count<0) {
      clearInterval(countdown);
      window.location.href = "index.html";
    }
  },1000);
}
// calcTimout();
const transferFund=function(e){
  e.preventDefault();
  const amount=inputSendAmount.value;
  const user=inputAccountUsername.value;
  const recipientAcc=accounts.find(acc=>acc.user==user);
  if(user!==currentLoginAcc.user && recipientAcc && amount>0&&amount>currentLoginAcc.totalAmount ){
    recipientAcc.movements.push(+amount);
    recipientAcc.descriptions.push(`Recieve from ${currentLoginAcc.owner}`);
    currentLoginAcc.movements.push(-amount);
    currentLoginAcc.descriptions.push(`Transfer to ${recipientAcc.owner}`)
    showToast("Funds tranfered!")
     saveAccounts();
    
    setCurrentAcc(currentLoginAcc);
    updateUI(currentLoginAcc);

    // renderUI(currentLoginAcc);
  }
  else{
    showToast("Transfer failed! Invalid input or insufficient balance.", "error");
  }
}

const requestLoan=function(e){
  e.preventDefault();
  const amount=Number(inputLoanAmount.value);
  
  const positiveHisory=currentLoginAcc.movements.some(movs=>movs>0&&movs>(amount * 0.1));
  const positiveMovs=currentLoginAcc.movements.filter(movs=>movs>0).reduce((acc,cur)=>acc+cur);
  const amountLimit=amount<(5*positiveMovs);
   
  if (positiveHisory&&amountLimit&& amount>0&& currentLoginAcc.unpaidLoan<=0) {
    currentLoginAcc.movements.push(+amount);
    currentLoginAcc.descriptions.push("Loan");
    currentLoginAcc.unpaidLoan=+amountLimit;
    showToast("Loan approved!", "success");
    saveAccounts();
    updateUI(currentLoginAcc);
   
  }else{
    showToast("Loan denied. Check eligibility or unpaid loans.", "error");
  }
}

const blockAccount=function(e){
e.preventDefault();
  const user=inputUserBlockAcc.value;
  const pin=Number(inputPinBlockAcc.value);
  if(user==currentLoginAcc.user&&pin==currentLoginAcc.pin){
    const index=accounts.findIndex(acc=>acc.user==user);
    accounts.splice(index,1);
     showToast("Account blocked successfully!", "success");
     saveAccounts();
    window.location.href="index.html"
  }
    else{
       showToast("Incorrect username or pin.", "error");
    }
  
}

const payDueAmount=function(e){
  e.preventDefault();
  const amount=Number(inputPayLoan.value);
  if (amount>0&&currentLoginAcc.unpaidLoan>0 && currentLoginAcc.unpaidLoan>=amount ) {
    currentLoginAcc.movements.push(-amount);
    currentLoginAcc.descriptions.push("Pay Loan");
    showToast("Loan repayment successful!", "success");
     saveAccounts();
    updateUI(currentLoginAcc);
    
  }
  else{
    showToast("Repayment failed. Check loan amount or balance.", "error");
  }
}
const logout=function(e){
  e.preventDefault();
  showToast("Logged out", "info");
  localStorage.removeItem("currentUser");
   saveAccounts();
 window.location.href = "index.html";

}
btnRepayLoan.addEventListener("click", payDueAmount)
btnRequestLoan.addEventListener("click", requestLoan)
btnBlockAccount.addEventListener("click", blockAccount);
btnTransferFund.addEventListener("click" , transferFund);
btnLogout.addEventListener("click", logout);


window.addEventListener("beforeunload", () => {
  saveAccounts();
});




