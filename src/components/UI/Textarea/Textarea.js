const Textarea = (props) => {
  return (
    <textarea
      name={props.name}
      id={props.id}
      cols={props.cols}
      rows={props.rows}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.onChange}
    ></textarea>
  );
};

export default Textarea;
