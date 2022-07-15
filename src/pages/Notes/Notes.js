import Title from "../../components/UI/Title/Title";
import Card from "../../components/UI/Card/Card";
import Note from "./Note/Note";
import styles from "./Notes.module.css";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Title>Moje notatki</Title>
      <Button
        onClick={() => {
          navigate("/panel");
        }}
      >
        Wróć
      </Button>
      <Button
        onClick={() => {
          navigate("/panel/notes/add");
        }}
      >
        Dodaj notatkę
      </Button>
      <Card className={styles.card}>
        {props.notes.map((note) => {
          return (
            <Note
              key={note.id}
              title={note.title}
              desc={note.desc.slice(0, 15) + "..."}
              date={note.date}
            />
          );
        })}
      </Card>
    </>
  );
};
export default Notes;
