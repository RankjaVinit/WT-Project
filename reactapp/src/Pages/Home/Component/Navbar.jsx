import { useNavigate } from "react-router-dom";



function Navbar( props ){

    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom ps-3 pe-3" style={navbar}>
                <div className="container-fluid">
                    <div className="navbar-brand text-dark"> {props.shopName || "Shop Name"}</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"  style={{bsScrollHeight: "100px"}}>
                        
                        </ul>
                        <div className="d-flex dropdown float-end"> 

                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul className="dropdown-menu" style={{transform: 'translateX(-50%)'}}>
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a className="btn btn-outline-danger dropdown-item text-danger" type="button" onClick={ () => {
                                            navigate('/');
                                        } }> Logout </a>
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