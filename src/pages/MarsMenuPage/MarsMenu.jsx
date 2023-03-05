import React from 'react'
// import Background from '../../components/Background/Background';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MenuItem from '../../components/MenuItem/MenuItem';
import { productData, responsive } from "../../components/MenuItem/data";
import Rocket from '../../components/Rocket/Rocket';
import '../MenuPage/MenuPage.scss';

// import Menucard from '../../components/Menucard/Menucard';

function MarsMenu() {

    const product = productData.map((item) => (
        <div className='menu'>
        <MenuItem
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
        />
        </div>
      ));
    
  return (
    <div className="Menupage">
        {/* <Background /> */}
        <div className='carousel'>
            <h1>Menu</h1>
            <Carousel showDots={true} responsive={responsive}>
                {product}
            </Carousel>
        </div>
        <div>
            <Rocket />
        </div>
        <div className='menucard'>
            {/* <Menucard /> */}
        </div>

    </div>
  )
}

export default MarsMenu