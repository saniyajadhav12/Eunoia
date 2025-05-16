export const fetchDailyQuote = async (): Promise<string | null> => {
  try {
    const res = await fetch('http://localhost:8000/quotes/generate');
    const data = await res.json();
    return data.quote;
  } catch (err) {
    console.error('Quote fetch failed:', err);
    return null;
  }
};
