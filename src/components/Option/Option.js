import styles from "./Option.module.css";

const Option = (props) => {
  return <div className={styles.option}>{props.children}</div>;
};
export default Option;
