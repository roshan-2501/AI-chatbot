# AI Chatbot using Gemini API

A full-stack AI chatbot application built with React (frontend) and Spring Boot (backend). The chatbot uses Material UI for a modern look and communicates with a backend API for AI-powered question answering.

---

## Features

- **Modern UI:** Built with React and Material UI.
- **AI Chat:** Ask questions and get intelligent responses.
- **Token Usage:** Displays token usage metadata for each response.
- **Spring Boot Backend:** Handles API requests and integrates with AI services.

---

## Getting Started

### Prerequisites

- Node.js & npm
- Java 17+ and Maven

---

### Frontend Setup

```bash
cd chatbot-frontend
npm install
npm start
```
The React app will run at [http://localhost:5173](http://localhost:5173) (or similar).

---

### Backend Setup

```bash
cd ../
mvn spring-boot:run
```
The backend API will run at [http://localhost:8080](http://localhost:8080).

---

## Configuration

- **Frontend API URL:**  
  Set in `chatbot-frontend/src/services/api.jsx`  
  ```
  const API_URL = 'http://localhost:8080/api/qna/ask';
  ```

- **CORS:**  
  If needed, configure CORS in your Spring Boot backend (e.g., in `WebConfig.java`).

---

## Usage

1. Start both backend and frontend servers.
2. Open the frontend in your browser.
3. Type a question and submit to chat with the AI.

---

## Customization

- **Theme:**  
  Edit the Material UI theme in `App.jsx` for custom colors and styles.
- **Backend Logic:**  
  Extend the Spring Boot backend for more advanced AI or data integrations.

---

## Credits

- [Material UI](https://mui.com/)
- [React](https://react.dev/)
- [Spring Boot](https://spring.io/projects/spring-boot)
