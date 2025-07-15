import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import UserCrud from "./components/user/UserCrud";

function Navigation(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/users" element={<UserCrud />}></Route>
      <Route from="*" to="/"></Route>
    </Routes>
  );
}
export default Navigation;
