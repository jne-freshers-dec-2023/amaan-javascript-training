import keyContentImage from '../../assets/images/FrontendDev.jpeg';

const Header = () => {
  return (
    <header>
      <img src={keyContentImage} alt="This is header" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;
