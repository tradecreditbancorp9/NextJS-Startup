// EmailPopup.tsx
"use client";

import React, { useEffect, useState } from "react";

const Emailpopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Show the popup after a short delay
    const timer = setTimeout(() => setShowPopup(true), 500); // optional delay
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/save-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
  
      if (res.ok) {
        console.log("Email saved successfully!");
        setShowPopup(false);
      } else {
        console.error("Failed to save email.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const handleClose = () => setShowPopup(false);

  return (
    showPopup && (
      <div className="fixed top-1/2 transpose-y-1/2 sm:top-0 sm:left-4/7 bg-black bg-white flex items-center justify-center z-50">
        <div className="bg-white  rounded-2xl p-6 shadow-xl w-full max-w-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Enter your Email</h2>
            <button onClick={handleClose} className="text-gray-500 text-xl">&times;</button>
          </div>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Submit
          </button>
        </div>
      </div>
    )
  );
};

export default Emailpopup;
