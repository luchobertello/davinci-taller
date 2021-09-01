import logo from "../../assets/header-logo.png";
import "./Header.less";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Da Vinci Taller Logo" />
    </div>
  );
};

export default Header;
