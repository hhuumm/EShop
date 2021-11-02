import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { cart } from "react-icons-kit/entypo/cart";
import { useHistory } from "react-router";
import { auth } from "../config/Config";
import { CartContext } from "../global/CartContext";
export const Navbar = ({ user }) => {
  const history = useHistory();
  const {totalQty}=useContext(CartContext);
  const logout = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };
  return (
    <div className="navbox">
      <div className="leftside">
        <i class="fas fa-cart-plus fa-3x" style={{ paddingTop: "15px" }}></i>
      </div>
      {!user && (
        <div className="rightside">
          <Link to="signup" className="navlinks">
            SIGN UP
          </Link>
          <Link to="login" className="navlinks">
            LOGIN
          </Link>
        </div>
      )}

      {user && (
        <div className="rightside">
          <span>
            <Link to="/" className="navlinks">
              {user.split(" ")[0]}
            </Link>
          </span>
          <span>
            <Link to="/cartproducts" className="navlinks">
              <Icon icon={cart} />
            </Link>
            <span className='no-of-products'>{totalQty}</span>
          </span>
          
          <span>
            <button className="logout-btn" onClick={logout}>
              LOGOUT
            </button>
          </span>
        </div>
      )}
    </div>
  );
};
