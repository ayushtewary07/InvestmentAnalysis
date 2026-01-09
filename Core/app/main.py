from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Portfolio Analysis Core",
    description="Core API for Portfolio Analysis",
    version="0.1.0",
)

# Set all origins enabled for development
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to Portfolio Analysis Core API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
