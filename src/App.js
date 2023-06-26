import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">Hello CI-CD Project Pipeline Now</header>
//     </div>
//   );
// }

function AppTest() {
  const [backendData, setBackendData] = useState([{}]);

  const [backendMemberData, setBackendMemberData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  useEffect(() => {
    fetch("/members")
      .then((response) => response.json())
      .then((data) => setBackendMemberData(data));
  }, []);

  return (
    <div>
      <header style={{ backgroundColor: "aqua", height: "70px" }}>
        <h1>New App Release...!</h1>
      </header>

      <body>
        <h4>Users</h4>
        {typeof backendData.users === "undefined" ? (
          <p> Loading...</p>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}

        <h4>Members</h4>
        {typeof backendMemberData.users === "undefined" ? (
          <p> Loading...</p>
        ) : (
          backendMemberData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </body>

      <h6>Version QA-1.1.2</h6>
    </div>
  );
}

export default AppTest;
