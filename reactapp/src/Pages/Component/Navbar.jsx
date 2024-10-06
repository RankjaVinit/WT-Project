import { Link } from "react-router-dom";



function Navbar( { id, shopName } ){

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom ps-3 pe-3" style={navbar}>
                <div className="container-fluid">
                    <div className="navbar-brand text-dark"> {shopName || "Shop Name"}</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"  style={{bsScrollHeight: "100px"}}>
                        
                        </ul>
                        <div className="d-flex dropdown float-end"> 

                                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </button>
                                <ul className="dropdown-menu" style={{transform: 'translateX(-50%)'}}>
                                    <li><Link className="dropdown-item" to={`/user/${id}`}> Home </Link></li>
                                    <li><Link className="dropdown-item" to={`/user/edit/${id}`}> Edit </Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="btn btn-outline-danger dropdown-item text-danger" to='/'> Logout </Link>
                                    </li>
                                </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

const navbar = {
    position: 'fixed',
    top: '0px'
}

export default Navbar;