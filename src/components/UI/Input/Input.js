const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      className={props.className}
      value={props.value}
      onChange={props.onChange}
      onClick={props.onClick}
    />
  );
};

export default Input;
