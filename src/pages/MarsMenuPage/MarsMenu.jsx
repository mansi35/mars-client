import { React, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData, responsive } from "../../components/MenuItem/data";
import OfferCard from "../../components/OfferCard/OfferCard";
import Rocket from "../../components/Rocket/Rocket";
import "../MenuPage/MenuPage.scss";

const MarsMenu = () => {
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
    name: "Oxygen Vape",
    price: "$19.99",
    description: "Generous way to provide oxygen",
  });

  function handleClick(item) {
    setselectedItem(item);
    //console.log(item);
  }

  function handleClick(item) {
    setselectedItem(item);
    console.log(item);
  }
  return (
    <div className="MenuPage">
      <div className="carousel2">
        {/* <div>
        <h1 style={{color: "white", zIndex: "100", width:"1000px"}}>Menu</h1>
        </div> */}
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
  );
};

export default MarsMenu;
