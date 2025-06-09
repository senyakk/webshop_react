# Web Book Shop

A template for a Web Book Shop application, with a backend built using **Express** and **Mongoose**, and a frontend built using **Vite** and **Chakra UI**.  

<img width="1299" alt="Screenshot 2025-06-09 at 16 00 02" src="https://github.com/user-attachments/assets/fe1b127d-c4f6-4b15-844c-f3dc9dbd1505" />

- 📚 Add, edit, and delete books/products
- ⚡ Vite-powered React frontend
- 🗄️ Express + Mongoose backend
- 🔥 Styled with Chakra UI

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Set up environment variables

Create a `.env` file in the root directory with your MongoDB connection string and PORT:

```
MONGO_URI=mongodb+srv://...

PORT=3000
```

### 3. Build the project

```bash
npm run build
```

This will install dependencies and prepare both backend and frontend.

---

## Development

### Start the backend

```bash
npm run dev
```

- Runs the backend server on the port specified in `server.js` (default: **3000**).

### Start the frontend

```bash
cd frontend
npm run dev
```

- Runs the Vite React app on [http://localhost:5173](http://localhost:5173) by default.

---

## Production

To start the whole application in production mode:

```bash
npm run start
```

- The backend and frontend will run on the port specified in `server.js` (default: **3000**).
---

## Project Structure

```
.
├── backend/
│   ├── controller/
│   ├── models/
│   ├── routes/
│   └── config/
├── frontend/
│   ├── src/
│   └── ...
├── .env
├── package.json
└── ...
```

---

## License

MIT

---

## Acknowledgements

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/)
