import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Form from "../../components/UI/Form/Form";
import Input from "../../components/UI/Input/Input";
import Label from "../../components/UI/Label/Label";
import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Form className={styles.loginForm}>
        <Label htmlFor="pass">Podaj hasło: </Label>
        <Input type="password" name="pass" />
      </Form>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Wróć
      </Button>
    </>
  );
};

export default Login;
