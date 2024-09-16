import React from 'react';

// import './About.css'; // Assuming you save the CSS in a file named About.css

export const About = () => {
  return (
    <div>
      <div className="about bg-dark" style={{ width: '100%' }}>
        <div className="text-center text-light p-5 mt-5 mb-5">
          <h4>THE STORY BEHIND THE PASTRY</h4>
          <h1>ABOUT US</h1>
        </div>
      </div>

      <div className="my-5">
        <div className="row mb-4 position-relative">
          <div className="col-md-7 image-container">
            <img
              src="https://s4.scoopwhoop.com/ach/biryani/11.jpg"
              className="img-fluid animated-image "
              style={{ height: '75vh', width: '100%', objectFit: 'cover' }}
              alt="Rich & Healthy"
            />
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center mt-3 animated-text bg-light" style={{ position: 'relative', left: '-5%' ,  backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <div className="p-5">
              <h1 className="text-uppercase text-danger">Rich & Healthy</h1>
              <p className="mt-4">
                At Paradise, we serve authentic Chettinadu Cuisine which is a popular South Indian food from Karaikudi region. The cuisine is world renowned for its spicy tasty food. Established in Chennai, India in the year 1964, Anjappar has been the pioneer to bring the foods of the famed Chettiars to the people around the world. Over the years, Anjappar has mastered the art of using spice to give one’s taste buds the best food experience.
              </p>
              <p>
                From humble beginnings from more than 50 years back, Anjappar has become a synonym for Chettinad Cuisine. The demand for this unique food has led us to take this experience overseas. Anjappar was established in Scarborough in 2005 and has expanded into 3 different locations thanks to the continued patronage from the Greater Toronto area customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
