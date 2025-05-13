"use strict";

export const accounts = [
  {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130],
    descriptions: ["Groceries", "Salary", "Restaurant", "Freelance", "Rent", "Electricity"],
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
    unpaidLoan: 1000,
    status: "Active"
  },
  {
    owner: "Qasim Ali",
    movements: [5000, -1500, -200, 800, -50],
    descriptions: ["Salary", "Rent", "Utilities", "Sold Items", "Snacks"],
    dates: [
      "2025-05-02T08:00:00",
      "2025-05-04T13:00:00",
      "2025-05-05T15:45:00",
      "2025-05-07T18:10:00",
      "2025-05-10T20:05:00"
    ],
    interestRate: 1.5,
    pin: 2222,
    unpaidLoan: 1200,
    status: "Active"
  },
  {
    owner: "Ali Khan",
    movements: [1000, -100, -250, 400, -300],
    descriptions: ["Freelance", "Lunch", "Shopping", "Gift", "Online Course"],
    dates: [
      "2025-05-01T11:00:00",
      "2025-05-03T14:30:00",
      "2025-05-04T16:15:00",
      "2025-05-07T10:45:00",
      "2025-05-09T21:10:00"
    ],
    interestRate: 1.0,
    pin: 3333,
    unpaidLoan: 800,
    status: "Active"
  },
  {
    owner: "Emily Clark",
    movements: [1200, -100, -500, 700, -80],
    descriptions: ["Bonus", "Transport", "Groceries", "Part-time Job", "Coffee"],
    dates: [
      "2025-05-02T12:10:00",
      "2025-05-03T15:00:00",
      "2025-05-06T18:20:00",
      "2025-05-08T09:35:00",
      "2025-05-10T22:00:00"
    ],
    interestRate: 0.9,
    pin: 4444,
    unpaidLoan: 400,
    status: "Active"
  }
]
//this fn will get an aray of accounts obj, and first it will ittrate over all the account obj and  create an array or all the part of owner's name using split then it will ittrate through that array and create an array of only first latter of owner's name using map finally it will join all the array elements into characters and convert them info lower case and assign a username to every account obj.
export let currentLoginAcc=null;

accounts.forEach(acc => {
   acc.user= acc.owner.split(" ").map(element=>element[0]).join('').toLowerCase();
})

accounts.forEach(acc=>{
    acc.totalAmount=acc.movements.filter(amount=>amount>0).reduce((acu,cur)=>{cur+acu},0)
});

export const setCurrentAcc = (acc) => {
  localStorage.setItem("currentUser", JSON.stringify(acc));
};

export const getCurrentAcc = () => {
  const user = localStorage.getItem("currentUser");
  return accounts.find(acc => acc.user === user);
};
export const saveAccounts = () => {
  localStorage.setItem("accounts", JSON.stringify(accounts));
};

export const loadAccounts = () => {
  const data = JSON.parse(localStorage.getItem("accounts"));
  if (data) {
    accounts.length = 0;
    data.forEach(acc => accounts.push(acc));
  }
};
export const showToast = (msg, type = "info") => {
  const colors = {
    success: "linear-gradient(to right, #4caf50, #2e7d32)",
    error: "linear-gradient(to right, #f44336, #d32f2f)",
    info: "linear-gradient(to right, #2196f3, #1976d2)"
  };

  Toastify({
    text: msg,
    duration: 3000,
    gravity: "bottom",
    position: "right",
    close: true,
    style: {
      background: colors[type],
      color: "white"
    }
  }).showToast();
};
