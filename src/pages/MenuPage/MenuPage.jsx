import { React, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  productData,
  responsive,
} from "../../components/MenuItem/EarthDataItems";
import OfferCard from "../../components/OfferCard/OfferCard";
import Rocket from "../../components/Rocket/Rocket";
import "./MenuPage.scss";

const MenuPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const [selectedItem, setselectedItem] = useState({
    name: "Brownie",
    price: "$19.99",
    description: "Sweet cake with chocolaty texture",
    url: "../../assets/Brownie.png",
  });

  function handleClick(item) {
    setselectedItem(item);
    //console.log(item);
  }
  return (
    <>
      <h1
        style={{
          marginTop: "100px",
          marginBottom: "-200px",
          marginLeft: "30px",
          backdropFilter: "blur(1px)",
          color: "white",
          fontSize: "100px",
        }}
      >
        {" "}
        Earth Menu{" "}
      </h1>
      <div className="MenuPage">
        <div className="carousel2">
          <h1>Menu</h1>
          <Slider {...settings}>
            {productData.map((item) => {
              return (
                <OfferCard
                  click={handleClick}
                  name={item.name}
                  url={item.imageurl}
                  price={item.price}
                  description={item.description}
                />
              );
            })}
          </Slider>
        </div>
        <div>
          <Rocket selectedItem={selectedItem} />
        </div>
      </div>
    </>
  );
};

export default MenuPage;

// import React, { useState } from 'react'
// // import Background from '../../components/Background/Background';
// import Carousel from 'react-multi-carousel';
// // import 'react-multi-carousel/lib/styles.css';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import MenuItem from '../../components/MenuItem/MenuItem';
// import { productData, responsive } from "../../components/MenuItem/EarthDataItems";
// import Rocket from '../../components/Rocket/Rocket';
// import OfferCard from '../../components/OfferCard/OfferCard';
// import './MenuPage.scss';
// import { style } from '@mui/system';
// import zIndex from '@mui/material/styles/zIndex';

// // import Menucard from '../../components/Menucard/Menucard';

// function MenuPage() {

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     infinite: true,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     arrows: false,
//                     dots: true,
//                 },
//             },
//         ],
//     };

//     const [selectedItem, setselectedItem] = useState({
//         name: "",
//         description: "",
//         price: "",
//     })

//     function handleClick(item) {
//         setselectedItem(item);
//         //console.log(item);
//     }

//     // const product = productData.map((item) => (
//     //     <div onClick={() => {
//     //         style={zIndex:"100000"}
//     //         console.log('hello')
//     //         }}>
//     //         <MenuItem
//     //           click={(item)=>{handleClick(item)}}
//     //           name={item.name}
//     //           url={item.imageurl}
//     //           price={item.price}
//     //           description={item.description}
//     //         />
//     //     </div>
//     //   ));

//     return (
//         <div className="Menupage">
//             <div className='carousel'>
//                 <h1>Menu</h1>
//                 <Slider {...settings}>
//                     {productData.map((item) => {
//                         return <OfferCard click={(item) => { handleClick(item) }}
//                             name={item.name}
//                             url={item.imageurl}
//                             price={item.price}
//                             description={item.description} />
//                     })}
//                 </Slider>
//             </div>
//             <div>
//                 <Rocket selectedItem={selectedItem} />
//             </div>

//         </div>
//     )
// }

// export default MenuPage
