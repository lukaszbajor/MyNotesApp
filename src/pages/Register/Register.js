import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
const Register = () => {
  const login = () => {
    console.log("Logowanie");
  };
  const register = () => {
    console.log("Rejestrowanie");
  };
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={login} value="Login3" />
      <Button onClick={register} value="Register3" />
      <Button
        onClick={() => {
          navigate("/");
        }}
        value="Wróć"
      />
    </>
  );
};

export default Register;
