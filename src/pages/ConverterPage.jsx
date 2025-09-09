import React, { useState, useEffect } from "react";

const ConverterPage = () => {
  const [xrate, setXrate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);

  // Helper function to calculate cross-rate (offline math)
  function convert(amount, from, to, rates, base) {
    if (from === to) return amount;
    if (from === base) return amount * rates[to];
    if (to === base) return amount / rates[from];
    return (amount / rates[from]) * rates[to];
  }

  // Fetch live data whenever fromCurrency (base) changes
  useEffect(() => {
    const url = `https://api.frankfurter.app/latest?base=${fromCurrency}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setXrate(data))
      .catch((err) => console.error("Failed to fetch rates:", err));
  }, [fromCurrency]);

  // Compute result when any key inputs change
  useEffect(() => {
    if (xrate?.rates) {
      const converted = convert(amount, fromCurrency, toCurrency, xrate.rates, xrate.base);
      setResult(converted.toFixed(4));
    }
  }, [amount, toCurrency, xrate, fromCurrency]);

  return (
    <main className="p-6 bg-zinc-100 flex flex-col items-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Live Currency Converter</h1>
      <div className="flex gap-6">
        {/* From Input */}
        <div className="bg-white p-4 rounded shadow">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="mb-4 text-lg font-semibold"
          >
            {/* You can list popular currencies or dynamically build from API */}
            {xrate && [xrate.base, ...Object.keys(xrate.rates)].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border-b-2 border-gray-300 text-xl focus:outline-none bg-transparent"
            placeholder="Amount"
          />
        </div>

        {/* To Input */}
        <div className="bg-white p-4 rounded shadow">
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="mb-4 text-lg font-semibold"
          >
            {xrate && [xrate.base, ...Object.keys(xrate.rates)].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input
            type="text"
            readOnly
            value={result ?? ""}
            className="w-full border-b-2 border-gray-300 text-xl focus:outline-none bg-transparent"
            placeholder="Converted"
          />
        </div>
      </div>
      <p className="mt-4 text-gray-600">
        {amount} {fromCurrency} = {result ?? "..."} {toCurrency} <br />
        
      </p>
    </main>
  );
};

export default ConverterPage;
