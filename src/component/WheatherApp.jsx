import React from "react";

const api = {
  key: "a78299151d28ba04681732e9e70bcd34",
  base: "https://home.openweathermap.org/api_keys",
};

function WheatherApp() {
  return (
    <>
      <div className="app">
        <div className="search-box">
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
      </div>
    </>
  );
}

export default WheatherApp;
