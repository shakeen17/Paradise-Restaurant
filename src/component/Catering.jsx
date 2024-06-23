import React from 'react';

export const Catering = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Our Investigator will call you");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Enquire Form</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Your Number</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label className="form-check-label">Which event</label>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="birthday" name="event" />
                <label htmlFor="birthday" className="form-check-label">Birthday</label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="marriage" name="event" />
                <label htmlFor="marriage" className="form-check-label">Marriage</label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="requiredDate" className="form-label">Required Date</label>
              <input type="date" className="form-control" id="requiredDate" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message (Optional)</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <img src="https://www.weddingbellcaterer.com/wp-content/uploads/2021/10/Birthday-Party-Caterers-Kolkata.jpg" className="img-fluid" alt="Image 1" style={{ height: '600px', objectFit: 'cover' }} />
            </div>
            <div className="col-md-6">
              <img src="https://www.centurioncenter.com/wp-content/uploads/2018/07/our-favourite-wedding-catering-themes.jpg" className="img-fluid" alt="Image 2" style={{ height: '600px', objectFit: 'cover' }}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catering;
