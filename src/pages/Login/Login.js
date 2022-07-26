import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Button from "../../components/UI/Button/Button";
import Form from "../../components/UI/Form/Form";
import Input from "../../components/UI/Input/Input";
import Label from "../../components/UI/Label/Label";
import styles from "./Login.module.css";
import Card from "../../components/UI/Card/Card";
import Title from "../../components/UI/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import InfoModal from "../../components/UI/InfoModal/InfoModal";
import { AuthContext } from "../../context/AuthContext";
const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [info, setInfo] = useState(null);
  const { user } = useContext(AuthContext);

  const closeModal = () => {
    setInfo(null);
  };

  const loginUser = (e) => {
    e.preventDefault();
    if (email.trim().length === 0) {
      setInfo({
        subtitle: "Pole tytuł nie może być puste!",
        content: "Wpisz jak nazwałeś swoją notatkę.",
      });
      return;
    } else if (pass.trim().length === 0) {
      setInfo({
        subtitle: "Pole treść nie może być puste!",
        content: "Wpisz jaką treść chciałeś/aś sobie zapisać",
      });
      return;
    } else {
      setInfo({
        subtitle: "Logowanie",
        content: "Trwa logowanie...",
      });
      props.login(email, pass);

      setTimeout(() => {
        navigate("/panel");
      }, 5000);
    }
  };
  return (
    <>
      {info && (
        <InfoModal
          subtitle={info.subtitle}
          content={info.content}
          onConfirm={closeModal}
        />
      )}
      <Title className={styles.title}>Formularz logowania</Title>
      <Card>
        <Form className={styles.loginForm} onSubmit={loginUser}>
          <FontAwesomeIcon icon={faUserCircle} size="6x" />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.inp}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            name="pass"
            placeholder="Password"
            className={styles.inp}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <Input type="submit" value="Zaloguj" className={styles.backBtn} />
          <p className={styles.infoLog}>
            Nie masz konta?{" "}
            <span
              onClick={() => {
                navigate("/register");
              }}
            >
              Zarejestruj się!
            </span>
          </p>
        </Form>
        <Button
          onClick={() => {
            navigate("/");
          }}
          className={styles.backBtn}
        >
          Wróć
        </Button>
      </Card>
    </>
  );
};

export default Login;
