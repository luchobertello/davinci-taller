import logo from "../../assets/header-logo.svg";
import { ALT_LOGO } from "../../helpers/consts";
import "./Header.less";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt={ALT_LOGO} />
    </div>
  );
};

export default Header;
