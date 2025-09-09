import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartPage = () => {
  const [data, setData] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [range, setRange] = useState("30"); // days

  // Fetch historical data
  useEffect(() => {
    const end = new Date().toISOString().split("T")[0]; // today
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(range));
    const start = startDate.toISOString().split("T")[0];

    fetch(
      `https://api.frankfurter.app/${start}..${end}?from=${fromCurrency}&to=${toCurrency}`
    )
      .then((res) => res.json())
      .then((resData) => {
        const chartData = Object.entries(resData.rates).map(([date, val]) => ({
          date,
          rate: val[toCurrency],
        }));
        setData(chartData);
      })
      .catch((err) => console.error("Error fetching chart data:", err));
  }, [fromCurrency, toCurrency, range]);

  return (
    <main className="flex flex-col items-center min-h-screen bg-zinc-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Currency Chart</h1>

      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="p-2 border rounded"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>RWF</option>
          <option>CAD</option>
          <option>GBP</option>
        </select>

        <span className="self-center">→</span>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="p-2 border rounded"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>RWF</option>
          <option>CAD</option>
          <option>GBP</option>
        </select>

        {/* Time Range Buttons */}
        <div className="flex gap-2">
          {["7", "30", "90"].map((d) => (
            <button
              key={d}
              onClick={() => setRange(d)}
              className={`px-3 py-1 rounded ${
                range === d ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
            >
              {d}d
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full max-w-4xl h-96 bg-white p-4 rounded-lg shadow">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#4f46e5"
                strokeWidth={2}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">Loading chart...</p>
        )}
      </div>
    </main>
  );
};

export default ChartPage;
