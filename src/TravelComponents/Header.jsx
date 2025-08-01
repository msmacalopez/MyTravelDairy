import planetLogo from "../assets/planetlogo.png";

const Header = () => {
  return (
    <header>
      <img src={planetLogo} alt="Planet Logo" />
      <h1>My Travel Dairy</h1>
    </header>
  );
};

export default Header;
