import React from 'react'
import Carousel from "pages/component/Carousel.jsx";
import Customers from "pages/component/customer/Customers";
import Campaigns from "pages/component/Campaigns.jsx";
import MenuWrapper from "pages/component/products/MenuWrapper.jsx";
import About from "pages/component/About.jsx";
import Reservation from "pages/component/Reservation.jsx";

const Index = ({ categoryList, productList }) => {
  return (
    <React.Fragment>
    <Carousel />
    <Campaigns />
    <MenuWrapper categoryList={categoryList} productList={productList} />
    <About />
   
    <Customers />
    </React.Fragment>
  );
}

export default Index