# CiviConnect – Public Service Bridge

**CiviConnect** is a multilingual web platform that allows citizens to raise complaints or requests to government agencies and track their resolution. It serves as a bridge between the public and service providers, promoting transparency and responsiveness.

## 🌍 Features

- 🗣️ **Multilingual support** (including Kinyarwanda)
- 👥 **Role-based dashboards** for Citizens and Administrators
- 📝 **Complaint submission & tracking**
- 📊 **Admin panel** for managing citizens, complaints, and service preferences
- 🌗 **Light/Dark mode**
- 🌐 Responsive UI powered by **React + Tailwind CSS**

## 🧑‍💻 Tech Stack

| Frontend       | Backend         | Others                    |
|----------------|------------------|---------------------------|
| React (TypeScript) | Spring Boot (REST API) | i18n for translations     |
| Tailwind CSS   | JWT for auth     | ShadCN UI Components      |
| Vite           | PostgreSQL       | GitHub Push Protection    |

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Rukundo-Bahati/CiviConnect.git
cd public-service-bridge
```

2. Install dependencies

npm install
# or
bun install


3. Environment Setup
Create a .env file in the root:

VITE_API_BASE_URL=http://localhost:8080/api
VITE_STRIPE_KEY=your_public_key_here

Start the app
npm run dev

TODOs / Future Work
Add user authentication (login/signup with JWT)

Admin statistics dashboard

Email notifications

Offline complaint submission (PWA)

🌐 Translations
// en.json
{
  "admin.citizens": "Citizens"
}

// rw.json
{
  "admin.citizens": "Abaturage"
}

👨‍💼 Author
Rukundo Bahati
📫 @rukundo-bahati

