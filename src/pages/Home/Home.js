import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";

const Home = () => {
  const login = () => {
    console.log("Logowanie");
  };
  const register = () => {
    console.log("Rejestrowanie");
  };
  return (
    <>
      <Link to="/login">
        <Button onClick={login} value="Login" />
      </Link>
      <Link to="/register">
        <Button onClick={register} value="Register" />
      </Link>
      <Link to="/">Wróć do głównej</Link>
    </>
  );
};

export default Home;
