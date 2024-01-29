import React from "react";
import mealsImage from '../../Assets/mealsImage.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (<>
  <header>
    <h1>Raectmeals</h1>
    <HeaderCartButton/>
  </header>
  <div>
    <img src={mealsImage} alt="Not Found" />
  </div>
  
  </>
  );
  
};
export default Header;
