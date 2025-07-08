# Nest-Auth(🔐 NestJS Authentication API)

This is a secure and minimal **authentication API** built with [NestJS](https://nestjs.com/), using **JWT**, **bcrypt**, and **cookie-based authentication**. It includes endpoints for signup, login, and retrieving authenticated user info.

---

## 🚀 Features

- 🧾 User Signup (with hashed passwords using `bcrypt`)
- 🔐 Secure Login with JWT
- 🍪 JWT stored in `httpOnly` cookies
- 🔍 Authenticated user retrieval using JWT verification
- 💡 Clean and simple code structure

---

## 📁 Project Structure (Relevant Files)

src/
├── app.controller.ts # Auth-related endpoints
├── app.service.ts # Handles user creation and fetching
├── app.module.ts # App-level config and module setup
├── user.entity.ts # User entity definition
.env # Environment variables


---

## 📦 Tech Stack

- **NestJS** – Core backend framework
- **TypeORM** – Database ORM
- **MySQL** (or any RDBMS) – Database
- **bcrypt** – Password hashing
- **JWT** – Token-based authentication
- **cookie-parser** – To read JWT from cookies
- **dotenv / @nestjs/config** – Environment configuration

---

## 📮 API Endpoints

| Method | Route         | Description                    |
|--------|---------------|--------------------------------|
| POST   | `/api/signup` | Register a new user            |
| POST   | `/api/login`  | Authenticate and set JWT cookie|
| GET    | `/api/user`   | Get current authenticated user |

---

## ⚙️ Environment Configuration

Create a `.env` file in your root folder:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=yourPassword
DB_NAME=auth_db
JWT_SECRET=your_jwt_secret
🔐 JWT & Cookie Authentication Flow
Signup:

Passwords are hashed with bcrypt before being saved.

Login:

If credentials are valid, a JWT is created and stored in an httpOnly cookie.

Get User:

JWT is read from cookie and verified.

If valid, the user’s data is returned.

📦 Installation & Running

# 1. Clone the repo
git clone https://github.com/blessed-winner/Nest-auth.git
cd nest-auth-api

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env  # create and edit your env

# 4. Run the server
npm run start:dev
🧠 Example Requests
🔐 Signup
http
Copy
Edit
POST /api/signup
Content-Type: application/json

{
  "name": "Test",
  "email": "test@example.com",
  "password": "securepassword"
}
🔓 Login
http
Copy
Edit
POST /api/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "securepassword"
}
On success, a JWT is set in an httpOnly cookie.

👤 Get Authenticated User
http
Copy
Edit
GET /api/user
Cookie: jwt=<your_token_here>
🛡️ Best Practices Followed
Passwords are never stored in plain text

JWTs are stored in secure, httpOnly cookies

Unauthorized access is blocked using proper error handling

Configuration is abstracted to .env using @nestjs/config

✅ To Improve Next
 Add DTOs & Validation Pipes

 Use @UseGuards() with AuthGuard + Passport

 Add Logout route (clear cookie)

 Add Swagger Documentation

 Add rate limiting, user roles, and refresh tokens

🧑 Author
IMPANO Blessed Winner
GitHub: @blessedwinner66
LinkedIn: IMPANO Blessed Winner

📄 License
This project is open-source and available under the MIT License.

