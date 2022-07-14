import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Panel from "./pages/Panel/Panel";
import Register from "./pages/Register/Register";
import Wrapper from "./components/UI/Wrapper/Wrapper";
import Notes from "./pages/Notes/Notes";
import Settings from "./pages/Settings/Settings";
import Tasks from "./pages/Tasks/Tasks";
// import Button from "./components/UI/Button/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/panel/notes" element={<Notes />} />
            <Route path="/panel/tasks" element={<Tasks />} />
            <Route path="/panel/settings" element={<Settings />} />
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
