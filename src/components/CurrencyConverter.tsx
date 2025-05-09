// CurrencyConverter.tsx
"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [result, setResult] = useState(null);

  const convertCurrency = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/convert?from=${from}&to=${to}&amount=${amount}`);
      setResult(res.data.convertedAmount);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [amount, from, to]);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Currency Exchange Calculator</h2>
      <div className="flex flex-col gap-3">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="p-2 border"
        />
        <div className="flex gap-3">
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="p-2 border">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
          <span>→</span>
          <select value={to} onChange={(e) => setTo(e.target.value)} className="p-2 border">
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="font-semibold mt-2">Converted Amount: {result}</div>
      </div>
    </div>
  );
}
