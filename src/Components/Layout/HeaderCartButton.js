import CartIcon from "./CartIcon";

const HeaderCartButton = () => {
  return (
    <>
    <button>
        <span>
          <CartIcon/>
            
        </span>
        <span>
            Your Cart
        </span>
        <span>3</span>
    </button>
    
    </>
  );
};

export default HeaderCartButton;