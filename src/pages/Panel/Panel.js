import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNoteSticky,
  faListCheck,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Panel.module.css";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import Option from "../../components/Option/Option";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Login from "../Login/Login";
import InfoModal from "../../components/UI/InfoModal/InfoModal";
const Panel = (props) => {
  const { user } = useContext(AuthContext);
  const [info, setInfo] = useState(null);

  const logoutUser = () => {
    setInfo({
      title: "Wylogowanie",
      content: "Trwa wylogowanie...",
    });
    setTimeout(() => {
      props.logout();
      navigate("/login");
    }, 3000);
  };

  const navigate = useNavigate();
  return (
    <>
      {user ? (
        <>
          {info && (
            <InfoModal
              title={info.title}
              content={info.content}
              onConfirm={() => {
                setInfo(null);
              }}
            />
          )}
          <Title className={styles.title}>
            Panel użytkownika {user?.email}
          </Title>
          <Button onClick={logoutUser}>Wyloguj</Button>
          <Card className={styles.panelBox}>
            <Option>
              <FontAwesomeIcon icon={faNoteSticky} size="4x" />
              <Subtitle className={styles.subtitle}>Notatki</Subtitle>
              <Button
                className={styles.btn}
                onClick={() => {
                  navigate("/panel/notes");
                }}
              >
                Przejdź
              </Button>
            </Option>
            <Option>
              <FontAwesomeIcon icon={faListCheck} size="4x" />
              <Subtitle className={styles.subtitle}>Lista zadań</Subtitle>
              <Button
                className={styles.btn}
                onClick={() => {
                  navigate("/panel/tasks");
                }}
              >
                Przejdź
              </Button>
            </Option>
            <Option>
              <FontAwesomeIcon icon={faGears} size="4x" />
              <Subtitle className={styles.subtitle}>Ustawienia</Subtitle>
              <Button
                className={styles.btn}
                onClick={() => {
                  navigate("/panel/settings");
                }}
              >
                Przejdź
              </Button>
            </Option>
          </Card>
        </>
      ) : (
        <InfoModal
          title="Błąd"
          content="Błędne dane"
          onConfirm={() => navigate("/login")}
        />
      )}
    </>
  );
};
export default Panel;
