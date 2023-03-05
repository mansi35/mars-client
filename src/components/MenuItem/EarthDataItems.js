import Brownie from '../../assets/Brownie.png';
import Chhole_bhature from '../../assets/Chhole_bhature.png';
import Ice_cream from '../../assets/Ice_cream.png';
import mac_cheese from '../../assets/mac_and_cheese.png';
import Pasta from '../../assets/Pasta.png';
import Pizza from '../../assets/Pizza.png';

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
        imageurl: Brownie,
        name: "Brownie",
        price: "$19.99",
        description: "Sweet cake with chocolaty texture",
    },
    {
        id: 2,
        imageurl: Chhole_bhature,
        name: "Chhole bhature",
        price: "$21.99",
        description: "Chick peas with Fried bread",
    },
    {
        id: 3,
        imageurl: Ice_cream,
        name: "Ice cream",
        price: "$99.99",
        description: "Cold & refreshing",
    },
    {
        id: 4,
        imageurl: mac_cheese,
        name: "Mac & Cheese",
        price: "$14.99",
        description: "Macroni smirred in cheese",
    },
    {
        id: 5,
        imageurl: Pasta,
        name: "Pasta",
        price: "$38.99",
        description: "Pasta with tossed vegetables",
    },
    {
        id: 6,
        imageurl: Pizza,
        name: "Pizza",
        price: "$149.99",
        description: "Sour baked dough topped with vegetables and cheese",
    },
];