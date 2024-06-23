import React  , { useContext , useState , useEffect } from 'react'
import { dataContext } from '../App';
export const Cart = () => {
  const { cart, setCart } = useContext(dataContext);

  const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc + parseInt(curr.amt),0))
    }, [cart] );

    const handleDelete = (id) => {
      setCart(cart.filter(item => item.id !== id));
    };

    

  return (
    <div>
      <h1 className='mb-3 fs-1 fw-bolder'>Cart Products</h1>

<div className="cart-container d-flex flex-column gap-2">
  {
    cart.map((item) => (
        <div className="cart-product card mb-1 d-flex flex-row" style={{ maxWidth: '540px' }} key={item.id} >
        <img src= {item.img} className="img-fluid rounded-start" alt="Product" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column justify-content-center">
            <h5 className="card-title fs-3 fw-medium"> {item.name} </h5>
            <p className="card-text mt-3 text-muted">Price Rs: {item.amt} </p>
            <button className="btn btn-danger mt-3" onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
    </div>
    ))
  }  
</div>

<div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
<h2 className="mt-3 fs-3 fw-bold">Total Amount: {total} </h2>
</div>
    </div>
  )
}
