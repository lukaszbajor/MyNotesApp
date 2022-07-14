import { useNavigate } from "react-router-dom";
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
const Login = () => {
  const navigate = useNavigate();
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
          />
          <Input
            type="password"
            name="pass"
            placeholder="Password"
            className={styles.inp}
          />
          <Button
            onClick={() => {
              navigate("/panel");
            }}
            className={styles.backBtn}
          >
            Zaloguj
          </Button>
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
