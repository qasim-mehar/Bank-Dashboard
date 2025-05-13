<h1 align="center">💰 Nexus<span style="color:#00bcd4">Bank</span> – A Futuristic Banking Dashboard</h1>

<p align="center">
  <img src="https://img.shields.io/badge/NexusBank-Dashboard-blueviolet?style=for-the-badge&logo=github">
</p>

<p align="center">
  A beautifully designed, modern banking UI built with JavaScript.  
  Sleek design. Real-world logic. Local Storage integration.
</p>

---

## 🌠 Preview

<p align="center">
  <img src="C:\Users\mianq\OneDrive\Desktop\Banking-Dashboard\src\Screenshot 2025-05-13 230449.png" alt="NexusBank Preview">
  <img src="C:\Users\mianq\OneDrive\Desktop\Banking-Dashboard\src\Screenshot 2025-05-13 230533.png" alt="NexusBank Preview">
  <img src="C:\Users\mianq\OneDrive\Desktop\Banking-Dashboard\src\Screenshot 2025-05-13 230549.png" alt="NexusBank Preview">
</p>

---

## 🎯 Core Purpose

The main goal of this project was to **learn and practice essential JavaScript concepts** with a real-world use case. Specifically:

### 🔁 Array Methods Practiced

- `forEach()` – to loop through transactions
- `map()` – to create display data like dates and formatted amounts
- `filter()` – to isolate deposits or withdrawals
- `reduce()` – to calculate balance & summaries
- `find()` – to search specific users
- `some()` – to validate conditions (e.g., loan eligibility)
- `includes()` – to check for existing values
- `splice()` – to remove users
- `sort()` – for optional transaction sorting

### 💾 Local Storage

- Used `localStorage.setItem()` and `getItem()` to **persist user accounts** and data.
- Mimicked basic backend functionality by **saving current user sessions and history**.

This project helped **reinforce array manipulation**, **DOM interactions**, and **data persistence**—key frontend dev skills. 🚀

---

## ⚙️ Features

✨ Beautiful, modern dashboard UI  
🔐 Secure Login with credentials  
💸 Transfer funds in real-time  
🏦 Request & repay loans  
🛑 Block accounts  
⏱️ Auto logout timer  
📢 Toast notifications for user actions  
📱 Responsive layout – works on all devices  
🗃️ Data stored using LocalStorage (no backend needed)

---

## 🛠️ Tech Stack

| Tech          | Description                          |
|---------------|--------------------------------------|
| `HTML5`       | Semantic markup                      |
| `CSS3`        | Custom styling with responsive layout|
| `JavaScript`  | Logic, DOM manipulation              |
| `Toastify JS` | Toast-style alert notifications      |
| `LocalStorage`| Persistent storage for account data  |

---

## 📁 Folder Structure

📦 NexusBank
├── 📁 css/
│ └── style.css
├
│── banking.js
│── Data.js
│── login.js
├── 📄 index.html
├── 📄 dashboard.html
└── 📄 README.md


---

## 👥 User Roles

### 👤 Regular User
- Login with username and pin  
- Transfer funds  
- Request or repay loan  
- View transaction history  

### 🛡️ Admin *(future scope)*
- Manage users  
- Approve/Reject loans  

---

## 🌐 Sample Data Format

```js
{
  owner: "Qasim Ali",
  user: "qasim",
  pin: 1234,
  movements: [200, -100, 300],
  descriptions: ["Salary", "Grocery", "Loan"],
  unpaidLoan: 0
}
```
## 🚀 Getting Started

# 1. Clone the repository
git clone https://github.com/qasim-mehar/Bank-Dashboard.git

# 2. Open index.html in your browser

📸 Screenshots

    Replace these with your real screenshots later

Login	Dashboard	Toasts
	
	
🧠 Learnings

✅ DOM manipulation & Event Handling
✅ Array method mastery in practical scenarios
✅ LocalStorage as a data layer substitute
✅ Dynamic UI design with feedback
✅ Modular coding style with separation of logic
✨ Credits

Made with ❤️ by Qasim Ali
🎓 Computer Science Student @ NUML Islamabad
📄 License

This project is licensed under the MIT License – feel free to use, remix, and build upon it.

    💡 Future upgrades may include backend integration, admin panel, or blockchain-based transaction logs.


Would you like me to:

- Save this as a downloadable `README.md` file?
- Replace image links with real screenshots once you upload them?
- Help push it to GitHub with correct commit commands?