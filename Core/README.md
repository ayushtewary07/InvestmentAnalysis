# Portfolio Analysis Core API

## Setup

1. **Environment Variables**:
   Create a `.env` file in this directory:
   ```env
   DATABASE_URL=postgresql://user:password@localhost/dbname
   ```

2. **Run Server**:
   ```bash
   # Windows
   .\venv\Scripts\uvicorn app.main:app --reload

   # Linux/Mac
   ./venv/bin/uvicorn app.main:app --reload
   ```

3. **Documentation**:
   Go to `http://localhost:8000/docs` to see the automatic API documentation.

## Project Structure

```
Core/
├── app/
│   ├── api/
│   │   └── v1/          # API endpoints (Views)
│   ├── core/            # Config and security settings
│   ├── db/              # Database connection and session
│   ├── models/          # SQLModel database models
│   └── main.py          # Application entry point
├── requirements.txt     # Python dependencies
└── .env                 # Environment variables (not committed)
```
