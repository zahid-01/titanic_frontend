import { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import DeveloperProfiles from "./components/Footer/Developers";
import Login from "./Pages/authentication/Login/Login";
import Signup from "./Pages/authentication/SignUp/Signup";
import LandingPage, { fetchProducts } from "./components/MainPage/LandingPage";
import ErrorPage from "./Pages/Error/errorPage";
import Product from "./components/Products/Products";
import { fetchProductDescription } from "./components/Products/Products";
import InventoryPage from "./components/Inventory/InventoryInterface/InventoryPage";
import ProductUpload from "./components/Inventory/ProductUploads/ProductUpload";
import MyOrders from "./components/Orders/MyOrders/MyOrders";
import Checkout from "./components/Orders/Checkout/Checkout";
import { tokenLoader } from "./Utilities/tokenLoader";
import { URL } from "./Assets/environment/url";
import { loginSliceActions } from "./Store/loginSlice";
import "./App.css";
import MainLayout from "./UI/MainLayout";
import UICallback from "./Pages/Payment/UICallback/UICallback";
import FooterPart from "./components/Footer/FooterPart";
import RefundPolicy from "./components/Footer/Refund";
import ShippingPolicy from "./components/Footer/Shipping";
import ReturnPolicy from "./components/Footer/Return";
import TermsandConditions from "./components/Footer/Terms&Conditions";
import ShoppingCart from "./components/Cart/ShoppingCart";
import { cartSliceActions } from "./Store/cartSlice";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    id: "token",
    children: [
      {
        path: "/",
        element: <LandingPage />,
        loader: fetchProducts,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Signup />,
      },
      {
        path: "product/:id",
        element: <Product />,
        loader: fetchProductDescription,
      },
      {
        path: "/inventory",
        element: <InventoryPage />,
      },
      {
        path: "/addProduct",
        element: <ProductUpload />,
      },
      {
        path: "/myOrders",
        element: <MyOrders />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/UICallback",
        element: <UICallback />,
      },
      {
        path: "/developer",
        element: <DeveloperProfiles />,
      },
      {
        path: "/refund",
        element: <RefundPolicy />,
      },
      {
        path: "/shipping",
        element: <ShippingPolicy />,
      },
      {
        path: "/return",
        element: <ReturnPolicy />,
      },
      {
        path: "/term",
        element: <TermsandConditions />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoginState = async () => {
      await axios({
        method: "GET",
        url: `${URL}user/isLoggedIn`,
      })
        .then((res) => {
          if (res.status === 200) {
            dispatch(loginSliceActions.setLogin(true));
            dispatch(loginSliceActions.setUserInfo(res.data.userData));
            dispatch(cartSliceActions.setItems(res.data.userData.cart));
            dispatch(cartSliceActions.setCount(res.data.userData.cart.length));
          } else {
            dispatch(loginSliceActions.setLogin(false));
            dispatch(loginSliceActions.setUserInfo(null));
          }
        })
        .catch((e) => console.log(e));
    };

    checkLoginState();
  }, [dispatch]);
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-green-900"></div>
        </div>
      }
    >
      <>
        <RouterProvider router={router} />

        <FooterPart />
      </>
    </Suspense>
  );
}

export default App;
