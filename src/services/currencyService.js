export const fetchCurrencyRates = async (currency) => {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/USD`
    );
    const data = await response.json();
    return data.rates[currency];
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    return 1; // default to 1 if there's an error
  }
};
