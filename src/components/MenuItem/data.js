import vape from '../../assets/Oxygen_vape.png'
import cutlet from '../../assets/Crater_cutlet.png'
import water from '../../assets/Edible_water.png'
import cocktail from '../../assets/Martian_cocktail.png'
import peri from '../../assets/Peri_peri_Aliens.png'

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 4,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export const productData = [{
        id: 1,
        imageurl: vape,
        name: "Oxygen Vape",
        price: "$19.99",
        description: "Generous way to provide oxygen",
    },
    {
        id: 2,
        imageurl: cutlet,
        name: "Crater Cutlet",
        price: "$21.99",
        description: "Fried potato within veggies",
    },
    {
        id: 3,
        imageurl: water,
        name: "Edible Solid Water",
        price: "$99.99",
        description: "Alternative to fulfill water loss",
    },
    {
        id: 4,
        imageurl: cocktail,
        name: "Martian Cocktail",
        price: "$14.99",
        description: "Cold drinks to refill energy",
    },
    {
        id: 5,
        imageurl: peri,
        name: "Peri Peri Aliens",
        price: "$38.99",
        description: "Potato fries with spicy masala",
    },

];