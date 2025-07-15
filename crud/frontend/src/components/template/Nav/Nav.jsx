import "./Nav.css";
import NavItem from "./NavItem";

function Nav(props) {
  return (
    <>
      <aside className="menu-area">
        <nav className="menu">
          <NavItem link="/" icon="home" label="Início" />
          <NavItem link="/users" icon="users" label="Usuários" />
        </nav>
      </aside>
    </>
  );
}
export default Nav;
