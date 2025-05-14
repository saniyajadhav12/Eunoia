export const fetchDailyQuote = async () => {
    try {
      const res = await fetch('http://localhost:8000/quotes/generate'); // 🔁 use your IP on real device
      const data = await res.json();
      return data.quote;
    } catch (err) {
      console.error("Failed to fetch quote:", err);
      return null;
    }
  };
  