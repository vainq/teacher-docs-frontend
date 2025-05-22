import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [response, setResponse] = useState("Loading...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/lessons?email=test@example.com`)
      .then((res) => res.json())
      .then((data) => setResponse(JSON.stringify(data)))
      .catch((err) => setResponse("Error: " + err.message));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Teacher Docs Frontend</h1>
      <p>Backend response:</p>
      <pre>{response}</pre>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
