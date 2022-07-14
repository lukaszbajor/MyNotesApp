import Button from "../../components/UI/Button/Button";
const Register = () => {
  const login = () => {
    console.log("Logowanie");
  };
  const register = () => {
    console.log("Rejestrowanie");
  };
  return (
    <>
      <Button onClick={login} value="Login3" />
      <Button onClick={register} value="Register3" />
    </>
  );
};

export default Register;
