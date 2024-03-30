import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Orders from "pages/Orders";
import Profile from "pages/Profile";
import BecomeSeller from "pages/BecomeSeller";
import HomePage from "pages/HomePage";
import Signin from "pages/Signin";
import SignUp from "pages/SignUp";
import FQA from "pages/FQA";
import Store from "pages/Store";
import Productdetail from "pages/Productdetail";
import Card from "pages/Card";
import ConfirmPayment from "pages/ConfirmPayment";
import Order from "pages/Order";
import ProductdetailOne from "pages/ProductdetailOne";
import Admin from "pages/Admin";
import Dasboard from "pages/Dasboard";
import Cart from "pages/Cart";
import ProductDetails from "pages/ProductDetails";
import MainSection from "pages/MainSection";
import DesktopOne from "pages/DesktopOne";
import Ordercard from "pages/Ordercard";
import Footer2 from "pages/Footer2";
import ProfileOne from "pages/ProfileOne";
import MainSectionOne from "pages/MainSectionOne";
import Frame936 from "pages/Frame936";
import ProfileThree from "pages/ProfileThree";
import ProfileFour from "pages/ProfileFour";
import StoreOne from "pages/StoreOne";
import HomePageOne from "pages/HomePageOne";
import OrdersOne from "pages/OrdersOne";
import HomePageTwo from "pages/HomePageTwo";
import ProductDetailsOne from "pages/ProductDetailsOne";
import ConfirmPaymentOne from "pages/ConfirmPaymentOne";
import CartOne from "pages/CartOne";
import BecomeSellerOne from "pages/BecomeSellerOne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "orders",
      element: <Orders />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "becomeseller",
      element: <BecomeSeller />,
    },
    {
      path: "homepage",
      element: <HomePage />,
    },
    {
      path: "signin",
      element: <Signin />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "fqa",
      element: <FQA />,
    },
    {
      path: "store",
      element: <Store />,
    },
    {
      path: "productdetail",
      element: <Productdetail />,
    },
    {
      path: "card",
      element: <Card />,
    },
    {
      path: "confirmpayment",
      element: <ConfirmPayment />,
    },
    {
      path: "order",
      element: <Order />,
    },
    {
      path: "productdetailone",
      element: <ProductdetailOne />,
    },
    {
      path: "admin",
      element: <Admin />,
    },
    {
      path: "dasboard",
      element: <Dasboard />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "productdetails",
      element: <ProductDetails />,
    },
    {
      path: "mainsection",
      element: <MainSection />,
    },
    {
      path: "desktopone",
      element: <DesktopOne />,
    },
    {
      path: "ordercard",
      element: <Ordercard />,
    },
    {
      path: "footer2",
      element: <Footer2 />,
    },
    {
      path: "profileone",
      element: <ProfileOne />,
    },
    {
      path: "mainsectionone",
      element: <MainSectionOne />,
    },
    {
      path: "frame936",
      element: <Frame936 />,
    },
    {
      path: "profilethree",
      element: <ProfileThree />,
    },
    {
      path: "profilefour",
      element: <ProfileFour />,
    },
    {
      path: "storeone",
      element: <StoreOne />,
    },
    {
      path: "homepageone",
      element: <HomePageOne />,
    },
    {
      path: "ordersone",
      element: <OrdersOne />,
    },
    {
      path: "homepagetwo",
      element: <HomePageTwo />,
    },
    {
      path: "productdetailsone",
      element: <ProductDetailsOne />,
    },
    {
      path: "confirmpaymentone",
      element: <ConfirmPaymentOne />,
    },
    {
      path: "cartone",
      element: <CartOne />,
    },
    {
      path: "becomesellerone",
      element: <BecomeSellerOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
