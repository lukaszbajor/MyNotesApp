import styles from "./InfoModal.module.css";
import Card from "../Card/Card";
import Subtitle from "../Subtitle/Subtitle";
import Button from "../Button/Button";

const InfoModal = (props) => {
  return (
    <>
      <Card>
        <header>
          <Subtitle>{props.subtitle}</Subtitle>
        </header>
        <div>
          <p>{props.content}</p>
        </div>
        <footer>
          <Button>Ok</Button>
        </footer>
      </Card>
    </>
  );
};

export default InfoModal;
