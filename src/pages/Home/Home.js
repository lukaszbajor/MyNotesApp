import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
      <Button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
    </>
  );
};

export default Home;
