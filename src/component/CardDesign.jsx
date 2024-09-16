import React from 'react'

export const CardDesign = () => {
    return (
        // <div className="food-card" style={{ width: "18rem" }}>
        //     <div className="card-header">
        //         <button className="btn btn-light close-btn">&times;</button>
        //     </div>
        //     <div className="card-body bg-light rounded-3">
        //         <div className='bg-dark'></div>
        //         <div className="card-content">
        //             <h5 className="card-title">Chicken Curry with Rice</h5>
        //             <div className="d-flex justify-content-between align-items-center mb-2">
        //                 <span>30 min</span>
        //                 <span role="img" aria-label="calories">🔥 375 calories</span>
        //                 <span role="img" aria-label="rating">⭐ 4.8</span>
        //             </div>
        //             <p className="card-description">
        //                 Indian chicken curry stewed in an onion and tomato-based sauce, flavored with ginger, garlic, tomato puree, chili peppers, and a variety of spices, often including turmeric, cumin, cardamom.
        //             </p>
        //             <div className="d-flex justify-content-between align-items-center">
        //                 <div className="input-group">
        //                     <ul className="pagination pagination-sm">
        //                         <li className="page-item disabled">
        //                             <a className="page-link" href="#">-</a>
        //                         </li>
        //                         <li className="page-item"><a className="page-link" href="#">2</a></li>
        //                         <li className="page-item"><a className="page-link" href="#">+</a></li>
        //                     </ul>
        //                 </div>
        //                 <button className="btn btn-dark">Add to Cart  <span>$18</span></button>
                       
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="d-flex justify-content-center align-items-center bg-light min-vh-100">
        <div className="card bg-dark rounded-5 border-0" style={{ width: '20rem'}}>
            <div className="row"> 
                <div className="col-8"></div>
                <div className="col-4" style={{position:'relative',top:'25px',left:'25px'}}><i className="bi bi-bookmark-fill bg-white text-danger p-2 fs-5 rounded-pill"></i></div>
            </div>
            <div className="mx-auto mb-1">
                <img src="samosa.png" alt="img" className='img-fluid' style={{ width: '180px', height: '180px',position:'relative',top:'80px' }} />
            </div>
            <div className="card-body bg-white text-center rounded-5 pt-5">
                <h5 className='card-title fs-3 pt-4'>Samosa</h5>
                <div className="d-flex justify-content-between">
                    <span className=' fs-5 fw-bold d-flex'><i className="bi bi-currency-rupee"></i>20</span>
                    <span className=' fs-5 fw-bold text-capitalize d-flex gap-1'><i className="bi bi-easel2-fill text-danger"></i>snack</span>
                    <span className='fs-5 fw-bold d-flex gap-1'><i className="bi bi-star-fill" style={{color:'gold'}}></i>4.5</span>

                    </div>
                        <p className='mt-3 lh-md fw-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore deserunt sunt eos. Minus tenetur natus dolore pariatur modi exercitationem tempore.</p>
                        <div className="">
                        <button className='btn btn-dark'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>


    )
}
