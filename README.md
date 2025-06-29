📝 To-Do WebApp

A full-stack To-Do List web application built with HTML, CSS, JavaScript, Node.js, and MySQL.

🚀 Features

✅ Add, view, and delete tasks
📅 Set a due date for each task
🔴 Priority labels: High, Medium, Low
💾 Data stored in MySQL database
📡 RESTful API using Node.js + Express

📁 Project Structure

To-Do-WebApp/
├── frontend/
│ ├── index.html
│ ├── styles.css
│ └── script.js
├── backend/
│ ├── index.js
│ └── db.js
├── .env
├── .gitignore
└── README.md

Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Frontend   | HTML, CSS, JavaScript    |
| Backend    | Node.js, Express         |
| Database   | MySQL                    |
| API Format | REST                     |

---

Installation & Setup

1. Clone the Repo

git clone https://github.com/shalnikv/To-Do-WebApp.git
cd To-Do-WebApp

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  due_date DATE,
  priority ENUM('High', 'Medium', 'Low')
);

3. Configure .env
   
Create a .env file in the root folder:
DB_USER=root
DB_PASSWORD=your_mysql_password

4. Install Backend Dependencies

cd backend
npm install
node index.js
You should see:
✅ Connected to MySQL
Server running on http://localhost:3000

5. Run the App
Open frontend/index.html in your browser.

Start adding tasks! 
