import { useState } from "react";
import InfoModal from "../UI/InfoModal/InfoModal";

const AddNote = (props) => {
  const [info, setInfo] = useState(null);
  const closeModal = () => {
    setInfo(false);
  };
  return (
    <>
      {info && (
        <InfoModal
          subtitle="Nazwa jest za krótka..."
          content="Dodaj notatkę która ma przynajmniej 5 znaków."
          onConfirm={closeModal}
        />
      )}
      <p>Formularz dodawania notatki</p>
    </>
  );
};
export default AddNote;
