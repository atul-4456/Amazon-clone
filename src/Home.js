import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
       <div className='home_container'>
     
            <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg' alt=''/>


            <div className='home_row'>
                <Product 
                id='456'
                title="The lean startup"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                rating={3}
                 />
                <Product
                id='489'
                title="Cubelelo QiYi MS 2x2 Stickerless Magnetic Speedcube Magic Puzzle Toy"
                price={15.99}
                image='https://m.media-amazon.com/images/I/31-S9TpnLCL.jpg'
                rating={5}

                />
               

            </div>
            <div className='home_row'>
                <Product
                id='457'
                 title="ZEBRONICS Zeb-Thunder Bluetooth Wireless Over Ear Headphone"
                 price={25.99}
                 image='https://m.media-amazon.com/images/I/71O7+VmlvVL._SL1500_.jpg'
                 rating={3}
                />
                <Product
                id='458'
                title="FENTACIA Men Driving Premium Loafers"
                price={30.99}
                image='https://m.media-amazon.com/images/I/61C0jWwTWRS._UL1500_.jpg'
                rating={5}
                 />
                <Product
                id='459'
                title="Zebronics ZEB-FIT280CH Smart Watch with Screen Size 3.55cm (1.39inch)  (Black)"
                price={500.99}
                image='https://m.media-amazon.com/images/I/61VxuGKibQL._SL1500_.jpg'
                rating={5}
                />
            </div>
            <div className='home_row'>
                <Product
                id='460'
                title="Samsung 138 cm (55 inches) 4K Ultra HD Smart QLED TV QA55QN90AAKLXL (Titan Black)"
                price={22250.99}
                image='https://m.media-amazon.com/images/I/91RMUYY13VS._SL1500_.jpg'
                rating={5}
                />

            </div>
       </div>
    </div>
  )
}

export default Home;