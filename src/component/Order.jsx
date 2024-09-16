import React from 'react';
import { Link } from 'react-router-dom';
import './Order.css'; // Assuming you create a separate CSS file for custom styles

export const Order = () => {
  return (
    <div>
      <h1 className='mt-3 fw-semibold' style={{ fontFamily: "italic" }}>Cuisines...</h1>
      <hr className='w-50' style={{ borderTop: '4px solid #ffc107', width: '100%' }} />
      <div className='d-flex mt-5 gap-2 overflow-hidden-container mb-3 flex-wrap justify-content-center'>
        <Link to={'/Product/Arabian'} className="image-container">
          <img src="https://images.deliveryhero.io/image/fd-my/LH/m1pa-hero.jpg" className="d-block custom-img" style={{ height : '250px' ,  weight : '600px'}} alt="Arabian" />
          <div className="text-overlay">
            Arabian Cuisines
          </div>
        </Link>
        <Link to={'/Product/Indian'} className="image-container">
          <img src="https://www.dandeli.com/images/cuisine/05.jpg" className="d-block custom-img" style={{ height : '250px' ,  weight : '600px'}} alt="Indian Cuisine" />
          <div className="text-overlay">
            Indian Cuisine
          </div>
        </Link>
        <Link to={'/Product/Chinese'} className="image-container">
          <img src="https://th.bing.com/th/id/OSK.HEROukPRIF2ecF-lmGSffw22eJ4pRnKdg5CYtuTipkVmqNc?rs=1&pid=ImgDetMain" className="d-block custom-img" style={{ height : '250px' ,  weight : '600px'}} alt="Chinese Cuisine" />
          <div className="text-overlay">
            Chinese Cuisine
          </div>
        </Link>
        <Link to={'/Product/Italian'} className="image-container">
          <img src="https://th.bing.com/th/id/OIP.IuvNTGfjwbMVYF9zQmtv2gHaE8?rs=1&pid=ImgDetMain" className="d-block custom-img" style={{ height : '250px' ,  weight : '600px'}} alt="Italian Cuisine" />
          <div className="text-overlay">
            Italian Cuisine
          </div>
        </Link>
        <Link to={'/Product/Biriyani'} className="image-container">
          <img src="https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__1200_0_0_0_auto.jpg" className="d-block custom-img" style={{ height : '250px' ,  weight : '600px'}} alt="Biriyani" />
          <div className="text-overlay">
            Biriyani
          </div>
        </Link>
        <Link to={'/Product/Pasta'} className="image-container">
          <img src="https://th.bing.com/th/id/OIP.1DVzXvoz1B19kT0je65voAHaE6?rs=1&pid=ImgDetMain" className="d-block custom-img" style={{ height : '250px' ,  weight : '600px'}} alt="Pasta" />
          <div className="text-overlay">
            Pasta
          </div>
        </Link>
        <Link to={'/Product/Dessert'} className="image-container">
          <img src="https://cmsasset.ancestrycdn.com/content/dam/ancestry/ancestry-blogs/en-us/family-history/12559/US_ACOM_PM_Blog_British_Desserts_In-post_1200x800_V3.jpg" className="d-block custom-img" style={{ height : '250px' ,  weight : '600px'}} alt="Dessert" />
          <div className="text-overlay">
            Dessert
          </div>
        </Link>
        <Link to={'/Product/Drinks'} className="image-container">
          <img src="https://www.liquor.com/thmb/p-obVQqfD529bLGLtnpe2NCs6fM=/2121x1414/filters:fill(auto,1)/GettyImages-843630694-13ab0d8e3f1f4b38b2271ee22be6d137.jpg" className="d-block custom-img" style={{ height : '250px' ,  weight : '600px'}} alt="Drinks & CockTails" />
          <div className="text-overlay">
            Drinks & CockTails
          </div>
        </Link>
      </div>
      <hr className='w-50 mt-5 mb-5' style={{ borderTop: '4px solid #ffc107', width: '50%' }} />
    </div>
  );
};
