import React from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <div>
        <hr className="bg-black w-100" />

      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <h4>SUBSCRIBE TO THE NEWSLETTER: LET'S STAY IN TOUCH!</h4>
            <input type="email" className="form-control my-2" placeholder="Your Email Address" />
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="privacyPolicy" />
              <label className="form-check-label" htmlFor="privacyPolicy">
                I agree to the Privacy Policy
              </label>
            </div>
            <h5 className="mt-4">FOLLOW US:</h5>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='p-1'>
              <img src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png" style={{width: "24px", height: "24px", objectFit: "contain"}} alt="YouTube" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='p-1'>
              <img src="https://th.bing.com/th/id/R.0768c020c0fa1573b84bfdf665d341b7?rik=1mf%2binWPP3jAGw&riu=http%3a%2f%2fandersonmgt.com%2fwp-content%2fuploads%2f2020%2f05%2fInstagram-icon.jpg&ehk=hK6l5LWS7A7lvg4vNPOAdW5e6BgImpLTgUMzGlg8F9g%3d&risl=&pid=ImgRaw&r=0" alt=""  style={{width: "24px", height: "24px", objectFit: "contain"}}/>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='p-1'>
                <img src="https://1.bp.blogspot.com/-qdRfUNOtjkM/XeI_00z9pzI/AAAAAAAAF4E/FeD2SvVFnKUjPAKQ_cNM6-D2ahjKb0HkQCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340-2.png" alt=""  style={{width: "24px", height: "24px", objectFit: "contain"}} />
              </a>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <h4>ADDRESS</h4>
            <p>
              Kabini Foods<br />
              No.99, Thiruneermalai Main Road,<br />
              Nagalkeni,<br />
              Chrompet, Chennai 600043
            </p>
            <button className="btn btn-outline-primary">CONTACT US</button>
          </div>

          <div className="col-md-4 text-center mt-3">
            <h4>TAKING ORDERS</h4>
            <p>
              Exclusively by phone<br />
              Tel: +91 78110 78111
            </p>
            <Link className='nav-link' to='/Order' ><button type="button" className="btn btn-outline-danger mb-3">ORDER NOW</button></Link>
            
          </div>
        </div>
      </div>

      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="d-flex align-items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/357/423/original/shop-vector-icon.jpg"
                  alt="Store"
                  className="img-thumbnail rounded-circle me-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div>
                  <h5>IN OUR STORES</h5>
                  <p>Pick up dishes from India, Dubai & Maldives</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="d-flex align-items-center">
                <img
                  src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-free-delivery-car-icon-element-png-image_8877401.png"
                  alt="Home Delivery"
                  className="img-thumbnail rounded-circle me-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div>
                  <h5>HOME DELIVERY</h5>
                  <p>We deliver orders within Chennai</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="d-flex align-items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5433/5433395.png"
                  alt="Midnight Delivery"
                  className="img-thumbnail rounded-circle me-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div>
                  <h5>MIDNIGHT DELIVERY</h5>
                  <p>Available till 3 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-light border-dashed" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
              <p>&copy; 2023 Paradise Restauant. Made with <span className="text-danger">&hearts;</span> in Chennai</p>
            </div>
            <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
              <p><i className="fas fa-phone-alt"></i> +044 2222 7777</p>
            </div>
            <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
              <p><i className="fas fa-envelope"></i> paradiserrestauant@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
