import { useState } from "react";
import { useNavigate } from "react-router";
import InfoModal from "../UI/InfoModal/InfoModal";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Subtitle from "../UI/Subtitle/Subtitle";
import Textarea from "../UI/Textarea/Textarea";
import styles from "./AddNote.module.css";

const AddNote = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [info, setInfo] = useState(null);

  const closeModal = () => {
    setInfo(null);
  };

  const addNote = (e) => {
    e.preventDefault();

    if (title.trim().length === 0) {
      setInfo({
        subtitle: "Pole tytuł nie może być puste!",
        content: "Wpisz jak nazwałeś swoją notatkę.",
      });
      return;
    } else if (date.trim().length === 0) {
      setInfo({
        subtitle: "Pole data nie może być puste!",
        content: "Wpisz kiedy dodałeś notatkę.",
      });
      return;
    } else if (content.trim().length === 0) {
      setInfo({
        subtitle: "Pole treść nie może być puste!",
        content: "Wpisz jaką treść chciałeś/aś sobie zapisać",
      });
      return;
    } else {
      setInfo({
        subtitle: "Dodano notatkę!",
        content: "Notatka poprawnie dodana, trwa przekierowanie...",
      });

      props.add(title, date, content);
      setTimeout(() => {
        navigate("/panel/notes");
      }, 5000);
    }
  };

  return (
    <>
      {info && (
        <InfoModal
          subtitle={info.subtitle}
          content={info.content}
          onConfirm={closeModal}
        />
      )}
      <Card>
        <Button
          onClick={() => {
            navigate("/panel/notes");
          }}
        >
          Wróć
        </Button>
        <Form className={styles.addForm} onSubmit={addNote}>
          <Subtitle>Dodaj notatkę</Subtitle>
          <Input
            type="text"
            placeholder="Tytuł notatki"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <Textarea
            placeholder="Treść notatki..."
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <Input type="submit" value="Dodaj" />
        </Form>
      </Card>
    </>
  );
};
export default AddNote;
