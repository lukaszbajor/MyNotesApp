import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import Card from "../../components/UI/Card/Card";
import { useNavigate } from "react-router-dom";
const Tasks = (props) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Title>Lista zadań "w budowie".</Title>
      <Button
        onClick={() => {
          navigate("/panel");
        }}
      >
        Wróć
      </Button>
    </Card>
  );
};
export default Tasks;
