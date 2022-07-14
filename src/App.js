import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/UI/Button/Button";

function App() {
  const login = () => {
    console.log("Logowanie");
  };
  const register = () => {
    console.log("Rejestrowanie");
  };
  return (
    <div className="App">
      <Header />
      <Button onClick={login} value="Login" />
      <Button onClick={register} value="Register" />
    </div>
  );
}

export default App;
