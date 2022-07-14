import styles from "./Wrapper.module.css";
const Wrapper = (props) => {
  return (
    <div className={`${props.className} ${styles.wrap} xd`}>
      {props.children}
    </div>
  );
};
export default Wrapper;
