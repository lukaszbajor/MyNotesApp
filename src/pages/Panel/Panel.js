import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./Panel.module.css";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
const Panel = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Title>Panel użytkownika</Title>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Wyloguj
      </Button>
      <Card>
        <div className="notes">
          <Button
            onClick={() => {
              navigate("/panel/notes");
            }}
          >
            Notes
          </Button>
        </div>
        <div className="tasks">
          <Button
            onClick={() => {
              navigate("/panel/tasks");
            }}
          >
            Tasks
          </Button>
        </div>
        <div className="settings">
          <Button
            onClick={() => {
              navigate("/panel/settings");
            }}
          >
            Settings
          </Button>
        </div>
      </Card>
    </>
  );
};
export default Panel;
