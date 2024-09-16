import  { useContext, useState, useEffect } from 'react'
import { dataContext } from '../App';
export const Cart = () => {
  const { cart, setCart } = useContext(dataContext);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt) * curr.count, 0))
  }, [cart]);

  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const increaseCount = (id) => {
    setCart(cart.map(sum => sum.id === id ? { ...sum, count: sum.count + 1 } : sum));
  }

  const decreaseCount = (id) => {
    setCart(cart.map(sum => sum.id === id && sum.count > 1 ? { ...sum, count: sum.count - 1 } : sum));
  }

  const getData = async(e) => {
    e.preventDefault();

    const filterData = cart.map( item => ({
      id : item.id, name: item.name, amt : item.amt , count : item.count
    }))
  
    const payLoad = {items : filterData, total : total}
  
    try{
      const response = await fetch('https://paradise-d1981-default-rtdb.firebaseio.com/UserData.json',{
        method:'POST', headers:{'Content-Type' : 'application/json'}, body : JSON.stringify(payLoad)
      })
      if(response.ok)
         alert("Data has passed Successfully")
        else
         alert('Data has NOT passed')
    }catch(err){
      alert(`Error Occured ${err}`)
    }
  }


  return (
    <div>
      <h1 className='mb-3 fs-1 fw-bolder'>Cart Products</h1>

      <div className="cart-container d-flex flex-column gap-2">
        {
          cart.map((item) => (
            <div className="cart-product card mb-1 d-flex flex-row" style={{ maxWidth: '540px' }} key={item.id} >
              <img src={item.img} className="img-fluid rounded-start" alt="Product" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title fs-3 fw-medium"> {item.name} </h5>
                <div className='row'>
                  <div className="col">
                    <p className="card-text mt-3 text-muted">Price Rs: {item.amt} </p>
                  </div>
                  <div className="col">
                    <ul className="pagination pagination-md fs-5 fw-medium">
                      <li className="page-item" aria-current="page" style={{ cursor: 'pointer' }}
                        onClick={() => decreaseCount(item.id)} >
                        <span className="page-link" >-</span>
                      </li>
                      <li className="page-item active fw-semibold"><span className="page-link" >{item.count}</span></li>
                      <li className="page-item" style={{ cursor: 'pointer' }}
                        onClick={() => increaseCount(item.id)}><span className="page-link" >+</span></li>
                    </ul>
                  </div>
                </div>
                <button className="btn btn-danger mt-3" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>

      <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
        <h2 className="mt-3 fs-3 fw-bold">Total Amount: {total} </h2>
      </div>

      <button className="btn btn-danger mt-3" onClick={getData}>Order</button>

    </div>
  )
}
