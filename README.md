

### 🏥 Patient Management System (Django + React)

A full-stack web application built using **Django REST Framework (DRF)** for the backend and **React.js** for the frontend.
This app allows users to **add, view, edit, and delete patient details**, all managed via RESTful APIs.

---

## 🚀 Features

✅ Add new patients with details (name, age, disease, etc.)
✅ View all patient records dynamically
✅ Edit or delete existing patients
✅ Fully integrated Django REST API backend
✅ Axios-based communication between React and Django
✅ Styled using a **modern dark UI with neon cyan accents**

---

## 🧩 Tech Stack

| Layer        | Technology                    |
| ------------ | ----------------------------- |
| **Frontend** | React.js, Axios, CSS          |
| **Backend**  | Django, Django REST Framework |
| **Database** | SQLite3 (default) or MySQL    |
| **Server**   | Django Development Server     |
| **Language** | Python, JavaScript            |

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup (Django)

```bash
# Clone the repository
git clone https://github.com/yourusername/patient-management.git
cd patient-management/backend

# Create virtual environment
python -m venv env
env\Scripts\activate   # On Windows
source env/bin/activate  # On Mac/Linux

# Install dependencies
pip install django djangorestframework django-cors-headers

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start backend server
python manage.py runserver
```

> Your API will be running at:
> 🔗 **[http://127.0.0.1:8000/api/patients/](http://127.0.0.1:8000/api/patients/)**

---

### 2️⃣ Frontend Setup (React)

```bash
# Go to frontend directory
cd ../frontend

# Install dependencies
npm install axios

# Start React development server
npm start
```

> Your React app will be running at:
> 🌐 **[http://localhost:3000](http://localhost:3000)**

---

## 🧠 API Endpoints

| Method   | Endpoint              | Description       |
| -------- | --------------------- | ----------------- |
| `GET`    | `/api/patients/`      | Get all patients  |
| `POST`   | `/api/patients/`      | Add a new patient |
| `PUT`    | `/api/patients/<id>/` | Update patient    |
| `DELETE` | `/api/patients/<id>/` | Delete patient    |

---

## 📁 Folder Structure

```
patient-management/
│
├── backend/
│   ├── manage.py
│   ├── backend/
│   ├── patients/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   ├── package.json
│
└── README.md
```

---

## 🧑‍💻 Author

**👤 Azif Ali Z**
💼 Full Stack Developer | Blockchain Enthusiast
📧 [[azifalizakir@gmail.com](mailto:azifalizakir@gmail.com)]
🌐 [LinkedIn](https://linkedin.com/in/azifaliz) • [GitHub](https://github.com/AzifaliZ)

---

## 📝 License

This project is licensed under the **MIT License**.
Feel free to use and modify it for your learning or projects.

