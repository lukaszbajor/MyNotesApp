const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      className={props.className}
      value={props.value}
    />
  );
};

export default Input;
