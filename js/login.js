"use strict";

import { accounts,loadAccounts, showToast } from "./Data.js";
loadAccounts();

// Buttons & Inputs
const btnLogin = document.querySelector(".btn-login");
const inputLoginUsername = document.querySelector(".login-username");
const inputLoginPin = document.querySelector(".pin-input");

// Login handler
const login = function (e) {
    e.preventDefault();

    const user = inputLoginUsername.value.trim().toLowerCase();
    const pin = Number(inputLoginPin.value);

    const currentLoginAcc = accounts.find(acc => acc.user === user && acc.pin === pin);

  if (currentLoginAcc) {
    showToast(`Wellcome, ${currentLoginAcc.owner.split(" ")[0]}`)
    localStorage.setItem("currentUser", currentLoginAcc.user); // save username
    
    setInterval(() => {
      window.location.href = "BankDashboard.html";
    }, 500);
  }
  else {
      alert("Wrong Credentials");
    }
    inputLoginUsername.value=" ";
    inputLoginPin.value=" ";
};

btnLogin.addEventListener("click", login);
