import vape from '../../assets/Oxygen_vape.png'
import cutlet from '../../assets/Crater_cutlet.png'
import water from '../../assets/Edible_water.png'
import cocktail from '../../assets/Martian_cocktail.png'
import peri from '../../assets/Peri_peri_Aliens.png'

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
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
        description: "Some text about the product..",
    },
    {
        id: 2,
        imageurl: cutlet,
        name: "Crater Cutlet",
        price: "$21.99",
        description: "Some text about the product..",
    },
    {
        id: 3,
        imageurl: water,
        name: "Edible Solid Water",
        price: "$99.99",
        description: "Some text about the product..",
    },
    {
        id: 4,
        imageurl: cocktail,
        name: "Martian Cocktail",
        price: "$14.99",
        description: "Some text about the product..",
    },
    {
        id: 5,
        imageurl: peri,
        name: "Peri Peri Aliens",
        price: "$38.99",
        description: "Some text about the product..",
    },

];