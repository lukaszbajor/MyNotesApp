import styles from "./Subtitle.module.css";
const Subtitle = (props) => {
  return (
    <h2 className={`${props.className} ${styles.subtitle}`}>
      {props.children}
    </h2>
  );
};
export default Subtitle;
