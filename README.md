
# 📅🎇 EventLy - Frontend 🧩✨

![EventLy Banner](https://i.ibb.co/84gS2WFg/evently-frontend1.png) 
![EventLy Banner](https://i.ibb.co/qMrw7vHT/enently-frontend2.png) 


---

## 🔗 Live Links

* 🎯 **Frontend**: [evently-client.web.app](https://evently-client.web.app)
* ⚙️ **Backend**: [evently-server.vercel.app](https://evently-server.vercel.app)

---

## 📝 Project Overview

**EventLy** is a fully functional, responsive Event Management Web App developed using the **MERN stack**. It enables users to **create**, **browse**, **filter**, **update**, and **manage events** with a smooth and secure **custom authentication** flow.

This app is designed to be intuitive, user-friendly, and feature-rich for both organizers and attendees.

---

## ⚙️ Tech Stack

* **Frontend**: React.js, Vite, Tailwind CSS, DaisyUI
* **Backend**: Express.js, Node.js, MongoDB (Mongoose)
* **Authentication**: Custom JWT (no Firebase auth)
* **Deployment**: Firebase (Client), Vercel (Server)
* **Extras**: Lottie Animations, Styled Components, React Hook Form, React Toast, SweetAlert2

---

## 🌟 Features

### 🔐 Authentication

* Custom login & registration system (Email & Password)
* JWT-based authentication
* Protected routes for user-only access
* Automatic token expiration handling

### 🏠 Homepage

* Hero banner, event features, categories
* Testimonials section (carousel-based)
* Fully responsive design

### 📅 Event Management (Private Route)

* View **all events** sorted by most recent (date & time)
* **Search by event title**
* **Filter by:**

  * Today
  * This Week / Last Week
  * This Month / Last Month
* **Join event** button (one-time join logic)
* Real-time attendee count update

### ➕ Add Event (Private Route)

* Add new events with form:

  * Title, Organizer Name, Date & Time, Location, Description, Attendee Count
* Form validation using React Hook Form
* Events saved to MongoDB via secure backend route

### 📋 My Events (Private Route)

* View user’s own events
* **Update** any of their events (modal or separate route)
* **Delete** events with confirmation prompt

### ✨ UI/UX Enhancements

* Custom 404 Error Page (Lottie animation)
* Global loading spinners
* Responsive navbar with dropdown profile
* Animated buttons and transitions
* Toast & Alert notifications for success/failure

---

## 📂 Folder Structure

```bash
src/
├── assets/
├── components/
│   └── shared/         # Reusable UI components (Navbar, Footer, etc.)
├── hooks/              # Custom Axios hooks
├── layouts/            # Main layout component
├── lottie/             # Lottie JSON animations
├── pages/              # All main pages (Home, Events, AddEvent, etc.)
├── provider/           # AuthContext
├── routes/             # React Router setup
├── App.jsx
├── main.jsx
```

---

## 🔧 Environment Setup

### 🛠️ Prerequisites

* Node.js ≥ 16
* MongoDB Atlas connection string

### 🔐 Environment Variables

Frontend `.env.local`:

```env
VITE_API_URL=https://evently-server.vercel.app/api
```

Backend `.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
```

---

## 🧪 How to Run Locally

### 1️⃣ Clone the Repositories

```bash
# Client
git clone https://github.com/rownakabdullahomi/EventLy_Client.git

# Server
git clone https://github.com/rownakabdullahomi/EventLy_Server.git
```

### 2️⃣ Install Dependencies

```bash
# For both client and server
npm install
```

### 3️⃣ Run the Projects

```bash
# Client
npm run dev

# Server
npm run dev
```

---

## 🔐 API Endpoints (Backend)

| Method | Endpoint      | Description                      |
| ------ | ------------- | -------------------------------- |
| POST   | `/user`       | Register user                    |
| POST   | `/user/login` | Login user                       |
| GET    | `/user/jwt`   | Get current user (auth required) |
| GET    | `/events`     | Get all events (auth required)                  |
| POST   | `/events`     | Add new event (auth required)    |
| PATCH  | `/events/:id` | Update event (auth required)     |
| DELETE | `/events/:id` | Delete event (auth required)     |

---

## 🚧 Known Issues / Future Improvements

* Role-based admin control (optional)
* Event image support (via ImgBB API)
* Pagination for events
* Unit testing (Jest/React Testing Library)

---

## 📸 Screenshots

> Replace with your own hosted screenshots

| Homepage                                   | Events Page                                    | Add Event                                |
| ------------------------------------------ | ---------------------------------------------- | ---------------------------------------- |
| ![Home](https://i.ibb.co/7drChDxJ/evently-home.png) | ![Events](https://i.ibb.co/wFd56YR3/evently-events.png) | ![Add Event](https://i.ibb.co/8nBwLXKb/evently-add.png) |

---

## 🙌 Acknowledgments  

Special thanks to **open-source libraries** and tools that made this project possible! 💜  

---

## 📧 Contact & Credits

Created with ❤️ by **Rownak Abdullah**

* 📬 Email: [rownakabdullahomi@gmail.com](mailto:rownakabdullahomi@gmail.com)
* 🌐 Portfolio: [https://rownak-abdullah.web.app](https://rownak-abdullah.web.app)

---

> ⭐ If you found this helpful, don’t forget to star the repo!

---

## 🤝 Thank You!

Happy Coding 🚀

