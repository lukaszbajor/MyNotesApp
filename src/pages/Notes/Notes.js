import Title from "../../components/UI/Title/Title";
import Card from "../../components/UI/Card/Card";

import styles from "./Notes.module.css";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  let navigate = useNavigate();
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
          console.log(note.id);
          return (
            <div className={styles.note} key={note.id}>
              <h3 className={styles.title}>{note.title}</h3>
              <p className={styles.desc}>{note.desc.slice(0, 15) + "..."}</p>
              <p className={styles.date}>{note.date}</p>
              <p>{note.id}</p>
              <Button
                onClick={() => {
                  navigate(`/panel/notes/${note.id}`);
                }}
                className={styles.btn}
              >
                Sprawdź
              </Button>
            </div>
          );
        })}
      </Card>
    </>
  );
};
export default Notes;
