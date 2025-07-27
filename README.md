# Express.js Practice 🚀

This is a hands-on practice project built to learn and experiment with **Express.js** and related Node.js modules. It showcases routing, middleware, template rendering with Handlebars, and CRUD operations on simulated user data.

---

## 📌 What This Project Covers

- RESTful API endpoints for **CRUD operations**
- Custom middleware for logging
- Dynamic page rendering using **Handlebars**
- Serving static assets (HTML, CSS)
- Use of `uuid` to generate unique IDs
- Use of `moment` for date/time formatting
- Project is structured using Express Router for cleaner code

---

## 🧱 Folder Structure

Express.js practice/
├── config/
│ └── userConfig.js # Simulated in-memory data
├── middleware/
│ └── logger.js # Custom logger middleware
├── public/
│ ├── about.html # Sample static page
│ └── css/
│ └── style.css # Custom styling
├── routes/
│ └── API/
│ └── members.js # API routes for member CRUD
├── views/
│ ├── layouts/
│ │ └── main.handlebars # Main layout template
│ └── home.handlebars # View for rendering members
├── .env # Environment variables (PORT, etc.)
├── app.js # Main Express app
├── package.json
├── package-lock.json
└── README.md # This file

---

## ⚙️ Technologies Used

- **Express.js**
- **UUID** – Unique ID generation
- **Moment.js** – Date formatting
- **Express-Handlebars** – View engine
- **Nodemon** – Development server reload

---

## 🧪 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/WahabAG/Express.js-practice.git
   cd Express.js-practice
-Install dependencies:

npm install
-Create a .env file (optional):

PORT=7070

-Start the development server:


npm run dev
Open in browser:

http://localhost:7070
📡 API Endpoints
Method	Endpoint	Description
GET	/api/members	Get all members
GET	/api/members/:id	Get member by ID
POST	/api/members	Create a new member
PUT	/api/members/:id	Update a member
DELETE	/api/members/:id	Delete a member

🎨 View Routes (Handlebars)
Route	View Rendered	Description
/	home.handlebars	Displays members list & form
/about	about.html	Static page from /public

📑 Notes
Data is not persisted; everything resets on server restart.

This project is for educational/practice purposes only.

Uses in-memory data simulation via userConfig.js.

👨‍💻 Author
Azeez Wahab
GitHub: @WahabAG

📝 License
This project is open for educational and personal use. No license applied.