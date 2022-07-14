import Button from "../../components/UI/Button/Button";
const Login = () => {
  const login = () => {
    console.log("Logowanie");
  };
  const register = () => {
    console.log("Rejestrowanie");
  };
  return (
    <>
      <Button onClick={login} value="Login2" />
      <Button onClick={register} value="Register2" />
    </>
  );
};

export default Login;
