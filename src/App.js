import logo from "./logo.svg";
import React, { useEffect, useState} from 'react'
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">Hello CI-CD Project Pipeline Now</header>
//     </div>
//   );
// }

function AppTest() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => 
        setBackendData(data)
    )
  }, [])

  return (
    <div>
      <h1>New App</h1>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
         )) 
      )}

    </div>
  );
}

export default AppTest;
