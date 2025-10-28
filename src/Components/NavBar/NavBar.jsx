import { useState } from "react";
import { Link } from 'react-router'
import "./NavBar.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


function NavBar() {
  // Reducx logic
  const items = useSelector((state) => 
    {return state.cart.items} )
  console.log(items)


  // Reducx logic

  // MOve to Cart
  const navigate = useNavigate();
    // Navigate home
  const goCart = () => navigate("/Cart");
  // MOver to cart


  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  
  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <>

      <div>
        <nav className="navbar">
          {/* Logo */}
          <div className="logo">
            <h1>Tech<span>Mart</span></h1>
          </div>


{/* Crat */}

       {/* <div> 
          <a href="#" className="cart" onClick={goCart} >
              <i className="fa-solid fa-cart-shopping"></i>
              Cart 
              <span className="itemsadd">{items.length}</span>
            </a>
          </div> */}

          {/* Hamburger Icon (Mobile Only) */}
          <div className="bar" >
            <a href="#" className="cart" onClick={goCart} >
              <i className="fa-solid fa-cart-shopping"></i>
               
              <span className="itemsadd">{items.length}</span>
            </a>
            <i onClick={toggleHamburgerMenu} className="fa-solid fa-bars"></i>
            
          </div>

         

          {/* Navigation Links (Desktop) */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Search Bar (Desktop) */}
          <div className="search-bar">
            <input type="text" placeholder="Search mobiles..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          {/* Right Side Actions (Desktop) */}
          <div className="nav-right">
            <Link to="/form" className="signin"> <i className="fa-regular fa-user"></i>SignIn/Up</Link>
            <span className="divider">|</span>
            <a href="#" className="cart" onClick={goCart} >
              <i className="fa-solid fa-cart-shopping"></i>
              Cart 
              <span className="itemsadd">{items.length}</span>
            </a>
          </div>

        </nav>
        <div className={`hamburger-menu ${showHamburgerMenu ? "show" : ""}`}>
          {/* Close Button */}
          <div className="close-menu" onClick={toggleHamburgerMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>

          {/* Mobile Menu Links */}
          <ul>
            <li><Link to="/" onClick={toggleHamburgerMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleHamburgerMenu}>About</Link></li>
            <li><Link to="/contact" onClick={toggleHamburgerMenu}>Contact</Link></li>
            <li><Link to="/form" onClick={toggleHamburgerMenu} className="signin " style={{color:"white"}}><i className="fa-regular fa-user"></i>SignIn/Up</Link></li>
            <li><a href="#" onClick={()=>{  toggleHamburgerMenu(); goCart()}} className="cart" style={{color:"white"}}>
             <i onClick={goCart}  className="fa-solid fa-cart-shopping"></i>
              Cart
              <span className="itemsadd">{items.length}</span>
            </a></li>
          </ul>
          


        </div>

             {/* Backdrop (Dark Overlay when menu is open) */}
        <div 
          className={`backdrop ${showHamburgerMenu ? "backdrop-show" : ""}`} 
          onClick={toggleHamburgerMenu}
        ></div>
      </div>
    </>
  );
}

export default NavBar;