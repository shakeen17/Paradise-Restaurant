

import React from 'react';
import { Link } from 'react-router-dom';
import { Order } from './Order';
// import './home.css';
import { Slide } from './Slide';


    
export const Home = () => {
    
    

    return (
        <>
            <div className="container-fluid mt-3">
                

            <div className="parent-container">
          <div className="" >
            <Slide />
          </div>
         </div> 
                  
                

                <div className="row align-items-center mt-5 mb-3">
                    <div className="col-md-4 text-center">
                        <img src="https://khalidsbiriyani.com/wp-content/uploads/2023/03/Bread.jpg" className="img-fluid" style={{ maxHeight: "400px", objectFit: 'cover' }} alt="First Image" />
                    </div>
                    <div className="col-md-4 text-center">
                        <h5 className='fw-bold fs-3 text-danger'>Paradise Reastuant</h5>
                        <p>WELCOME TO
                            Paradise Reastuant
                            Khalids Biriyani is Namma Chennai’s Muslim-style biriyani. We make the one-pot dish more special with Basmati rice from Punjab.

                            Our succulent meat is from Malimpadi, from the south side of Tamil Nadu. We use handpicked spices, and the biriyani is cooked using firewood at 200 degrees C to ensure consistency and lingering taste.

                            At Khalids Biriyani, we offer robust biriyanis of excellent quality made using basmati rice and infused with aromas of various spices and juicy and tender meat paired with it.</p>
                        <Link className='nav-link' to='/Order' ><button type="button" className="btn btn-outline-danger mb-3">ORDER NOW</button></Link>
                    </div>
                    <div className="col-md-4 text-center mb-3">
                        <img src="https://khalidsbiriyani.com/wp-content/uploads/2023/03/Cakes.jpg" className="img-fluid" style={{ maxHeight: "400px", objectFit: 'cover' }} alt="Second Image" />
                    </div>
                </div>

                <div className='position-relative'>
      <img src="https://khalidsbiriyani.com/wp-content/uploads/2023/03/Food-catering.jpeg" alt="catering" className='custom-img shadow ' style={{ maxHeight: "400px", objectFit: 'cover', width: "100%" }} />
      <div className="overlay-container position-absolute top-50 start-50 translate-middle text-center">
        <div className="p-4 rounded text-center" style={{backgroundColor : "rgba(255,255,255,0.5)"}}>
          <h5 className="text-danger d-none d-md-block">Our catering experts can help you create a lasting impression for that very special occasion</h5>
          <h2 className='fw-bold fs-3 text-danger'>WEDDINGS & EVENTS CATERING</h2>
          <Link to={'/Order'} className="btn btn-outline-dark">Discover More</Link>
        </div>
      </div>
    </div>

               <div>
               <Order />
               </div>
            </div>
        </>
    );
};

