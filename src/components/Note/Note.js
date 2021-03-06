import { useParams } from "react-router-dom";
import styles from "./Note.module.css"
const Note = (props) => {
  const { id } = useParams();
  // console.log(typeof(id));
  // console.log(props.notes);
  return (
    <>
      {props.notes.map((el) => {
        if (el.id === id) {
          return (
            <div key={el.id} className={styles.note}>
              <p>{el.title}</p>
              <p>{el.desc}</p>
              <p>{el.date}</p>
            </div>
          );
        }
      })}
    </>
  );
};

export default Note;
