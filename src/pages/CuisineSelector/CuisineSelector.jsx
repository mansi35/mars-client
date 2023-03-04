// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import Background from '../../components/Background/Background';
// import southIndian from '../../images/south-indian.jpg';
// import './CuisineSelector.scss';
// import OfferCard from '../../components/OfferCard/OfferCard';
// import PageBackground from '../../images/mars-restaurant.jpg';

// function CuisineSelector() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="cuisineSelector">
//       <img className='cuisineSelector__background' src={PageBackground} alt="background" />
//       <div className="cuisineSelector__content">
//         <Slider {...settings}>
//           <OfferCard image={southIndian} />
//           <OfferCard image={southIndian} />
//           <OfferCard image={southIndian} />
//           <OfferCard image={southIndian} />
//           <OfferCard image={southIndian} />
//           <OfferCard image={southIndian} />
//           <OfferCard image={southIndian} />
//           <OfferCard image={southIndian} />
//           <OfferCard image={southIndian} />
//         </Slider>
//       </div>
//     </div>
//   )
// }

// export default CuisineSelector