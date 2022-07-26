import React, { useState } from "react";
import "./App.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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
import AddNote from "./components/AddNote/AddNote";
import ViewNote from "./components/Note/Note";
import { auth } from "./firebase-config";
import { AuthContext } from "./context/AuthContext";
// import Button from "./components/UI/Button/Button";

const notesArr = [
  {
    id: "1",
    title: "Przepis na placka",
    desc: "dwa jajka, mleko, cukier - wszytsko wymieszać",
    date: "15.07.2022",
  },
  {
    id: "2",
    title: "Przepis na placka",
    desc: "dwa jajka, mleko, cukier - wszytsko wymieszać",
    date: "15.07.2022",
  },
  {
    id: "3",
    title: "Przepis na placka",
    desc: "dwa jajka, mleko, cukier - wszytsko wymieszać",
    date: "15.07.2022",
  },
  {
    id: "4",
    title: "Przepis na placka",
    desc: "dwa jajka, mleko, cukier - wszytsko wymieszać",
    date: "15.07.2022",
  },
  {
    id: "5",
    title: "Przepis na placka",
    desc: "dwa jajka, mleko, cukier - wszytsko wymieszać",
    date: "15.07.2022",
  },
  {
    id: "6",
    title: "Oprysk na owady",
    desc: "Wlać do miski wodę, następnie wlać oprysk",
    date: "15.07.2022",
  },
];

function App() {
  const [user, setUser] = useState({});
  const [notes, setNotes] = useState(notesArr);

  const addNewNote = (title, date, content) => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: (notes.length + 1).toString(),
        title: title,
        date: date,
        desc: content,
      },
    ]);
    console.log(notes);
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async (name, email, pass, pass2) => {
    console.log(email, pass);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        // name,
        email,
        pass
        // pass2
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      return;
    }

    // console.log(name, email, pass, pass2);
  };
  const login = async (email, pass) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      console.log(user);
      if (user) {
        console.log("uzytkownik istnieje");
      }
    } catch (error) {
      console.log(error.message);
      return;
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="App">
      <Header />
      <Router>
        <Wrapper>
          <AuthContext.Provider value={{ user }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login login={login} />} />
              <Route
                path="/register"
                element={<Register register={register} />}
              />
              <Route path="/panel" element={<Panel logout={logout} />} />
              <Route path="/panel/notes" element={<Notes notes={notes} />} />
              <Route
                path="/panel/notes/add"
                element={<AddNote add={addNewNote} />}
              />
              <Route
                path="/panel/notes/:id"
                element={<ViewNote notes={notes} />}
              />
              <Route path="/panel/tasks" element={<Tasks />} />
              <Route path="/panel/settings" element={<Settings />} />
            </Routes>
          </AuthContext.Provider>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
