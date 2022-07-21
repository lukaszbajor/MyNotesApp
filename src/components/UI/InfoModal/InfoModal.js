import styles from "./InfoModal.module.css";
import Card from "../Card/Card";
import Subtitle from "../Subtitle/Subtitle";
import Button from "../Button/Button";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header>
        <Subtitle>{props.subtitle}</Subtitle>
      </header>
      <div>
        <p>{props.content}</p>
      </div>
      <footer>
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </Card>
  );
};

const InfoModal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          subtitle={props.subtitle}
          content={props.content}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default InfoModal;
