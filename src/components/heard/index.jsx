import "./heard.css";
import { Routerlink } from "../children/router";
import { Tool } from "../children/tool";
import logo from "../../assets/img/public/logo.png";
export function Header() {
  return (
    <div className="heard">
      <div className="Logo">
        <img src={logo} alt=""></img>
      </div>
      <div className="link">
        <Routerlink />
      </div>
      <div className="tool">
        <Tool />
      </div>
    </div>
  );
}
