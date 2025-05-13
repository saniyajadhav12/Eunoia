# app/services/quote_generator.py
import os
import random
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

STATIC_QUOTES = [
    "You are doing your best and that's enough.",
    "Take a breath, you're okay.",
    "Every moment is a fresh beginning.",
    "Progress, not perfection.",
    "You've survived 100% of your bad days."
]

async def get_daily_quote():
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are an encouraging friend who sends gentle affirmations."},
                {"role": "user", "content": "Give me one short positive affirmation."}
            ],
            max_tokens=50,
            temperature=0.7,
        )
        quote = response['choices'][0]['message']['content'].strip().strip('"')
        return quote
    except Exception as e:
        print(f"OpenAI error: {e}")
        return random.choice(STATIC_QUOTES)
