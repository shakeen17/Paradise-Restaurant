
import { Link } from 'react-router-dom'
export const Header = ({count}) => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger p-4">
                <div className="container-fluid ">
                    <a className="navbar-brand fs-3"><img src="https://th.bing.com/th/id/OIP.YvKJGIu7xvh2bG4_gDV0ZwHaEL?w=914&h=515&rs=1&pid=ImgDetMain" alt=""  className="img-thumbnail rounded-circle me-3"
                  style={{ width: '70px', height: '70px', objectFit: 'cover' }} />Paradise Restaunt</a>
                    <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbar"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id='navbar'>
                        <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                            <li className="nav-item active ">
                                <Link className='nav-link fs-5' to='/' >Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='nav-link fs-5' to='/about'>About</Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link className='nav-link fs-5' to='/cards'>Menu</Link>
                            </li> */}

                            <li className="nav-item">
                                <Link className='nav-link fs-5' to='/order'>Order</Link>
                            </li> 
                            
                            <li className="nav-item">
                                <Link className='nav-link fs-5' to='/catering'>Catering</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='nav-link fs-5' to='/displaydata'>Display</Link>
                            </li>
                            
                        </ul>
                        <Link className='nav-link fs-5 me-3' to='/cart'>Cart<span className='ms-1 rounded-pill bg-primary-subtle p-1 px-2 text-dark'>{count.length}</span></Link>
                    </div>

                </div>
            </nav>
        </div>
    )
}
