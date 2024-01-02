import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { loginSliceActions } from "../../Store/loginSlice";
import { URL } from "../../Assets/environment/url";
import logo from "../../Assets/Imgs/titanic-logo-3653E95B5B-seeklogo.com.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useSelector((state) => state.login);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const logoutHandler = async () => {
    await axios({
      method: "GET",
      url: `${URL}user/logout`,
    })
      .then((res) => {
        if (res.data.status === "Success") {
          dispatch(loginSliceActions.setLogin(false));
          dispatch(loginSliceActions.setUserInfo(null));
          navigate("/");
        }
      })
      .catch((e) => {
        alert("Oops, something went wrong!");
      });
  };
  // sticky top-0 z-50
  return (
    <div
      className={`backdrop-blur-md p-2 md:p-4 lg:p-6  shadow-md shadow-blue-200`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="cursor-pointer w-24 h-12"
            onClick={() => navigate("/")}
          />
        </div>
        <h2 className="text-orange-900 ml-2 text-xl md:text-2xl lg:text-4xl font-bold tracking-[1px]">
          Titanic Services
        </h2>
        <div className="hidden md:flex items-center space-x-2 text-lg md:space-x-4 lg:space-x-6">
          {isLoggedIn && (
            <>
              {userInfo.role === "ns-admin" && (
                <NavLink
                  to="inventory"
                  className="text-black hover:underline font-semibold"
                >
                  Inventory
                </NavLink>
              )}
              <NavLink
                to="myOrders"
                className="text-black hover:underline font-semibold"
              >
                My Orders
              </NavLink>
              <NavLink
                to="cart"
                className="text-black hover:underline font-semibold"
              >
                Cart
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink
                to="login"
                className="text-black hover:underline font-semibold"
              >
                Login
              </NavLink>
              <NavLink
                to="signUp"
                className="text-black hover:underline font-semibold"
              >
                Sign up
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <div className="flex items-center">
              <NavLink
                to="#"
                className="text-blue-700 text-xl tracking-[1px] font-semibold underline"
              >
                {userInfo.name}
              </NavLink>
              <button
                onClick={logoutHandler}
                className="bg-blue-500 text-white px-2 py-1 rounded-full font-semibold hover:bg-red-500 ml-2"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button
            className="text-black"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden py-2">
          <div className="container mx-auto space-y-4">
            {isLoggedIn && (
              <>
                {userInfo.role === "ns-admin" && (
                  <NavLink
                    to="inventory"
                    className="text-center text-black block hover:underline font-semibold"
                  >
                    Inventory
                  </NavLink>
                )}
                <NavLink
                  to="myOrders"
                  className="text-center text-black block hover:underline font-semibold"
                >
                  My Orders
                </NavLink>
                <NavLink
                  to="myOrders"
                  className="text-center text-black block hover:underline font-semibold"
                >
                  Cart
                </NavLink>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavLink
                  to="login"
                  className="text-center text-black block hover:underline text-[18px] font-bold tracking-[1px]"
                >
                  Login
                </NavLink>
                <NavLink
                  to="signUp"
                  className="text-center text-black block hover:underline text-[18px] font-bold tracking-[1px]"
                >
                  Sign up
                </NavLink>
              </>
            )}
            {isLoggedIn && (
              <div className="flex items-center justify-center">
                <NavLink
                  to="#"
                  className="text-green-500 font-semibold hover:underline"
                >
                  {userInfo.name}
                </NavLink>
                <button
                  onClick={logoutHandler}
                  className="bg-blue-400 text-white px-2 py-1 rounded-full font-semibold hover:bg-red-500 ml-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
