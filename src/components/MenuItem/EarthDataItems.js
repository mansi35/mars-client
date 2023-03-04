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
        imageurl: Brownie,
        name: "Brownie",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 2,
        imageurl: Chhole_bhature,
        name: "Chhole bhature",
        price: "$21.99",
        description: "Some text about the product..",
    },
    {
        id: 3,
        imageurl: Ice_cream,
        name: "Ice_cream",
        price: "$99.99",
        description: "Some text about the product..",
    },
    {
        id: 4,
        imageurl: mac_cheese,
        name: "Mac & Cheese",
        price: "$14.99",
        description: "Some text about the product..",
    },
    {
        id: 5,
        imageurl: Pasta,
        name: "Pasta",
        price: "$38.99",
        description: "Some text about the product..",
    },
    {
        id: 6,
        imageurl: Pizza,
        name: "Pizza",
        price: "$149.99",
        description: "Some text about the product..",
    },
    {
        id: 7,
        imageurl: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Sunglasses",
        price: "$38.99",
        description: "Some text about the product..",
    },
    {
        id: 8,
        imageurl: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Dove cream",
        price: "$49.99",
        description: "Some text about the product..",
    },
];