"use strict";

import { accounts,loadAccounts } from "./Data.js";
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
  localStorage.setItem("currentUser", currentLoginAcc.user); // save username
  window.location.href = "BankDashboard.html";
}
else {
    alert("Wrong Credentials");
  }
};

btnLogin.addEventListener("click", login);
