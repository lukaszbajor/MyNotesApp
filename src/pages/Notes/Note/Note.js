import styles from "./Note.module.css";
import Button from "../../../components/UI/Button/Button";

const Note = (props) => {
  return (
    <div className={styles.note}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.desc}>{props.desc}</p>
      <p className={styles.date}>{props.date}</p>
      <Button className={styles.btn}>Sprawdź</Button>
    </div>
  );
};

export default Note;
