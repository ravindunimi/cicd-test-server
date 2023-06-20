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
    <div className="App">

    </div>
  );
}

export default AppTest;
