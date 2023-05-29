"use client";

import { useState } from "react";

const Popup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open Popup</button>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
            <h2 className="text-lg font-bold">Popup Content</h2>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={()=> setPopupVisible(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
