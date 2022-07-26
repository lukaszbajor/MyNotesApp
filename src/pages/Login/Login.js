import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const loginUser = () => {
    props.login();
    navigate("/panel");
  };
  return (
    <>
      <Title className={styles.title}>Formularz logowania</Title>
      <Card>
        <Form className={styles.loginForm}>
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
          <Button onClick={loginUser} className={styles.backBtn}>
            Zaloguj
          </Button>
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
