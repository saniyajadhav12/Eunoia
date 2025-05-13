# app/main.py
from fastapi import FastAPI
from app.api.routes_quotes import router as quotes_router

app = FastAPI()

app.include_router(quotes_router, prefix="/quotes")

@app.get("/")
def root():
    return {"message": "Eunoia backend running ✨"}
