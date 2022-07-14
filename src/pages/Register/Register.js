import { useNavigate } from "react-router-dom";
import Title from "../../components/UI/Title/Title";
import Input from "../../components/UI/Input/Input";
import Card from "../../components/UI/Card/Card";
import Form from "../../components/UI/Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/UI/Button/Button";
import styles from "./Register.module.css";
const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title className={styles.title}>Formularz rejestracji</Title>
      <Card>
        <Form className={styles.registerForm}>
          <FontAwesomeIcon icon={faRegistered} size="6x" />
          <Input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.inp}
          />
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
          <Input
            type="password"
            name="pass"
            placeholder="Password again"
            className={styles.inp}
          />
          <div className={styles.boxBtns}>
            <Input type="submit" value="Zarejestruj" className={styles.inpBtn}>
              Zaloguj
            </Input>
            <Input type="reset" value="Wyczyść" className={styles.inpBtn}>
              Zaloguj
            </Input>
          </div>
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

export default Register;
