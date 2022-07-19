import InfoModal from "../UI/InfoModal/InfoModal";
const AddNote = (props) => {
  return (
    <InfoModal
      subtitle="Nazwa jest za krótka..."
      content="Dodaj notatkę która ma przynajmniej 5 znaków."
    />
  );
};
export default AddNote;
