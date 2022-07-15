import { useParams } from "react-router-dom";

const ViewNote = (props) => {
  const { id } = useParams();
  console.log(id);
  console.log(props.notes);
  return (
    <>
      <div>
        {props.notes.map((el) => {
          if (el.id == id) {
            return <p key={el.id}>{el.title}</p>;
          }
        })}
      </div>
    </>
  );
};

export default ViewNote;
