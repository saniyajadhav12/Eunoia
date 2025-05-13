# app/api/routes_quotes.py
from fastapi import APIRouter
from app.services.quote_generator import get_daily_quote

router = APIRouter()

@router.get("/generate")
async def generate_quote():
    quote = await get_daily_quote()
    return {"quote": quote}
