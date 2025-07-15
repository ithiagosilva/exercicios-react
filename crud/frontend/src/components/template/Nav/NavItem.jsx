import { Link } from "react-router-dom";
function NavItem(props) {
  return (
    <Link to={props.link}>
      <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>
  );
}
export default NavItem;
