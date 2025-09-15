import React, { useContext, useMemo } from 'react';
import './Navbar.css';
import logo from '../Assets/Logo.png';
import cart_icon from '../Assets/cart.png';
import darkIcon from '../Assets/Dark.png';
import lightIcon from '../Assets/Light.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menu, setMenu] = React.useState("shop");
  const { cartItems } = useContext(ShopContext);
  const cartCount = useMemo(() => Object.values(cartItems || {}).reduce((sum, n) => sum + n, 0), [cartItems]);

  return (
    <div className={`navbar ${darkMode ? 'dark' : ''} glass-panel`}>
      <Link to="/" className="nav-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={logo} alt="SnapCart Logo" />
        <p>SnapCart</p>
      </Link>

      <ul className="nav-menu">
        <li onClick={() => setMenu("Shop")}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu === "Shop" && <hr />}</li>
        <li onClick={() => setMenu("Mens")}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link> {menu === "Mens" && <hr />}</li>
        <li onClick={() => setMenu("Womens")}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link> {menu === "Womens" && <hr />}</li>
        <li onClick={() => setMenu("Footwear")}><Link style={{textDecoration:'none'}} to='/footwear'>Footwear</Link> {menu === "Footwear" && <hr />}</li>
        <li onClick={() => setMenu("Headphone")}><Link style={{textDecoration:'none'}} to='/headphone'>Headphone</Link> {menu === "Headphone" && <hr />}</li>
        <li onClick={() => setMenu("Mobile")}><Link style={{textDecoration:'none'}} to='/mobile'>Mobile</Link> {menu === "Mobile" && <hr />}</li>
        <li onClick={() => setMenu("Pant")}><Link style={{textDecoration:'none'}} to='/pant'>Pant</Link> {menu === "Pant" && <hr />}</li>
        <li onClick={() => setMenu("T-Shirt")}><Link style={{textDecoration:'none'}} to='/t-shirt'>T-Shirt</Link> {menu === "T-Shirt" && <hr />}</li>
        <li onClick={() => setMenu("Watch")}><Link style={{textDecoration:'none'}} to='/watch'>Watch</Link> {menu === "Watch" && <hr />}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <img 
          src={darkMode ? lightIcon : darkIcon} 
          alt={darkMode ? "Light Mode" : "Dark Mode"} 
          onClick={toggleDarkMode}
          style={{ cursor: 'pointer', width: '24px', marginRight: '15px' }} 
        />
        <div className="nav-cart-wrapper">
          <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
          <div className="nav-cart-count">{cartCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
