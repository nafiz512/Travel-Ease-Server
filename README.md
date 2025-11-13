# Travel-Ease-Client

# 🌍 TravelEase — A Modern Vehicle Rental Platform

> 🚗 **Book, Rent, or Manage Vehicles Effortlessly.**  
> TravelEase is a full-stack MERN application built with **React (Vite)**, **Firebase Authentication**, **Express.js**, and **MongoDB Atlas** — offering a seamless experience for travelers and vehicle owners alike.

---

## 🌟 Key Features

-   **Dynamic Home Page** — Includes an engaging hero section, the latest 6 vehicles, and featured sections like “Top Categories” and “About TravelEase”.
-   **Firebase Authentication** — Secure email/password and Google login; protected routes for authenticated users.
-   **Vehicle Management System** — Add, update, and delete your own vehicles; view your listed items in “My Vehicles”.
-   **Booking Functionality** — Book vehicles from details pages; users can manage their own bookings from “My Bookings”.
-   **Responsive and Elegant UI** — Fully responsive layout built with **Tailwind CSS**, **Framer Motion**, and **React Spring** for smooth animations.
-   **Smart Data Handling** — Integrated **MongoDB Atlas** for scalable data storage; supports advanced filtering and sorting.
-   **Theme Customization** — Light/Dark mode toggle for better user experience.
-   **Loading & Error Handling** — Skeleton loaders, toasts, and custom 404 page for a polished UX.
-   **Deployed with Netlify** — Fast, secure, and globally available hosting.

---

## 🧩 Tech Stack

**Frontend:**

-   React (Vite)
-   Tailwind CSS + DaisyUI
-   Framer Motion
-   React Spring
-   Axios
-   React Router DOM
-   Date-fns

**Backend:**

-   Node.js + Express.js
-   MongoDB Atlas
-   Firebase Admin SDK (for token verification)

**Authentication:**

-   Firebase Authentication (Email/Password & Google Sign-In)

**Deployment:**

-   Frontend → Netlify
-   Backend → Render / Vercel / Railway (depending on configuration)

---

## 🧭 Pages Overview

-   **Home Page:** Hero section, featured vehicles, top-rated owners, and “About TravelEase”.
-   **All Vehicles Page:** Browse and sort vehicles by price, ratings, or date added.
-   **Vehicle Details (Private):** Detailed view with “Book Now” option.
-   **Add Vehicle Page:** Add a new vehicle (only available to logged-in users).
-   **My Vehicles:** Manage your own listings (update/delete).
-   **My Bookings:** View your bookings.
-   **Authentication:** Login, Register, and Google Sign-In pages.
-   **404 Page:** Custom error page for invalid routes.

---

## 🔐 Protected Routes

The following routes are secured and only accessible to logged-in users:

-   `/addVehicle`
-   `/myVehicles`
-   `/myBookings`
-   `/updateVehicle/:id`
-   `/vehicle/:id`

---

### ☁️ Deployment

-   **Frontend:** Hosted on [Netlify](https://travelease-nafiz.netlify.app)
-   **Backend:** Node.js + Express server (Firebase Admin SDK integrated)
-   **Database:** MongoDB Atlas cloud cluster

---

## 🛠️ Tech Stack

| Category               | Technology                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Frontend Framework** | [React 19](https://react.dev/) (via [Vite](https://vitejs.dev/))                                                                     |
| **Routing**            | [React Router v7](https://reactrouter.com/en/main)                                                                                   |
| **State & Hooks**      | React Context API + Custom Hooks                                                                                                     |
| **Styling**            | [Tailwind CSS v4](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), [Lucide Icons](https://lucide.dev/)                    |
| **Animation**          | [Framer Motion](https://www.framer.com/motion/), [React Spring](https://react-spring.dev/)                                           |
| **HTTP Client**        | [Axios](https://axios-http.com/)                                                                                                     |
| **Auth & Security**    | [Firebase Authentication](https://firebase.google.com/docs/auth), [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) |
| **Backend**            | [Express.js](https://expressjs.com/)                                                                                                 |
| **Database**           | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)                                                                                 |
| **Deployment**         | [Netlify (Frontend)](https://www.netlify.com/), Local/Cloud Server (Backend)                                                         |

---

## ⚙️ Project Setup

### 🔧 Prerequisites

Make sure you have installed:

-   Node.js (v18+ recommended)
-   npm (v9+)
-   MongoDB Atlas connection URI
-   Firebase project credentials

---

### 🧩 Environment Variables

#### **Frontend (.env)**

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_SERVER_URL=http://localhost:5000
```

#### **Backend (.env)**

```env
DB_USER=your_mongo_username
DB_PASSWORD=your_mongo_password
FIREBASE_SERVICE_KEY=your_base64_encoded_service_account_json
PORT=5000
```

> ⚠️ You can base64-encode your Firebase service key with:
>
> ```bash
> node -e "console.log(Buffer.from(require('fs').readFileSync('./serviceAccount.json','utf8')).toString('base64'))"
> ```

---

## 🚀 Run Locally

### **1️⃣ Clone the Repository**

### **2️⃣ Setup the Server**

```bash
cd TravelEase-Server
npm install
npm run dev
```

### **3️⃣ Setup the Client**

```bash
cd TravelEase-Client
npm install
npm run dev
```

Visit 👉 `http://localhost:5173`

---

## 🌐 Deployment

### **Frontend**

Deployed using **Netlify**  
URL → [https://travelease-nafiz.netlify.app](https://travelease-nafiz.netlify.app)

### **Backend**

Node.js Express API — hosted locally or on **Render / Railway / VPS**

---

## 📂 Folder Structure

```
TravelEase/
│
├── TravelEase-Client/        # Frontend (Vite + React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/AuthContext.jsx
│   │   └── hooks/
│   ├── public/
│   └── package.json
│
├── TravelEase-Server/        # Backend (Node + Express)
│   ├── index.js
│   ├── .env
│   ├── package.json
│   └── /routes
│
└── README.md
```

---

## 💻 API Overview

| Method   | Endpoint              | Description            | Auth |
| -------- | --------------------- | ---------------------- | ---- |
| `POST`   | `/user`               | Add new user           | ❌   |
| `POST`   | `/addvehicle`         | Add new vehicle        | ✅   |
| `GET`    | `/allvehicles`        | Fetch all vehicles     | ❌   |
| `GET`    | `/myvehicles?email=`  | Fetch vehicles by user | ✅   |
| `PATCH`  | `/vehicle/:id?email=` | Update vehicle         | ✅   |
| `DELETE` | `/vehicle/:id?email=` | Delete vehicle         | ✅   |
| `POST`   | `/book-vehicle`       | Book a vehicle         | ✅   |
| `GET`    | `/bookings?email=`    | Get bookings           | ✅   |

✅ = Requires Firebase token (`usertoken` header)

---

## 🧠 Highlights

-   🔒 Secure token-based route protection (client & server)
-   🌍 Deployed full-stack project
-   💨 Lightning-fast dev experience with **Vite**
-   🧱 Modular, scalable code structure
-   🎨 Beautiful UI with **Tailwind + DaisyUI + Animations**

---

## 👨‍💻 Author

**👋 Nafiz Muntasir**  
💼 Full-Stack MERN Developer  
🌐 [LinkedIn](https://www.linkedin.com/in/nafiz-muntasir-3b2823332/) • ✉️ [nafizmuntasir512@gmail.com](mailto:nafizmuntasir512@gmail.com)  
🔗 Live App → [travelease-nafiz.netlify.app](https://travelease-nafiz.netlify.app)

---

## 🪪 License

This project is licensed under the **MIT License** — feel free to use, modify, and build upon it.

---

> 🧭 _“Travel easily, manage smartly — with TravelEase.”_
