import React, { useContext } from 'react'
import data from '../assets/Food.json';
import { useParams } from 'react-router-dom';
import { dataContext } from '../App';
// import "./Product.css"

export const Product = () => {
  const{category} = useParams();

  const product = data.filter(item => item.category === category);

  const { cart, setCart } = useContext(dataContext);

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const removeCart = (item) => {
    setCart(cart.filter((c) => c.id !== item.id));
  };

  return (
    <div>
      <div className='d-flex flex-wrap gap-3 mb-3 mt-3 justify-content-center'>
      {product.map((item) => (
        <div className="card" key={item.id} style={{ width: '18rem' }}>
          <div className="">
            <img src={item.img} alt="img" className='card-img-top' style={{ height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-body">
            <h5 className='card-title'>{item.name}</h5>
            <span className='badge text-bg-danger mb-1 text-capitalize'>{item.ftype}</span>
            <p className='card-text'>Rate: ₹{item.amt}</p>
            <p className='card-text'>{item.desp}</p>
          </div>

          {cart.includes(item) ? (
            <button className='btn btn-danger' onClick={() => removeCart(item)}>Remove From Cart</button>
          ) : (
            <button className='btn btn-outline-danger' onClick={() => addCart(item)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
    </div>
  )
}
