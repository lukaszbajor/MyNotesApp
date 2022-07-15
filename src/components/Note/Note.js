import { useParams } from "react-router-dom";

const ViewNote = (props) => {
  const { id } = useParams();
  console.log(id);
  console.log(props.notes);
  return (
    <>
      {props.notes.map((el) => {
        if (el.id == id) {
          return (
            <div key={el.id}>
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

export default ViewNote;
