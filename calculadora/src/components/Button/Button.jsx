import "./Button.css";

function Button(props) {
  return (
    <>
      <button
        className={`button ${props.cl}`}
        onClick={() => props.click(props.label)}
      >
        {props.label}
      </button>
    </>
  );
}

export default Button;
