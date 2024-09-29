import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiBaseUrl } from '../../apiBaseUrl';


function SignUp(){

    return(
        <>
           {/* <!-- Email input --> */}
           <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" >Email address</label>
                <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" />
            </div>

            {/* <!-- Password input --> */}
            <div data-mdb-input-init className="form-outline mb-3">
                <label className="form-label" >Password</label>
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" />
            </div>

         

            <div className="text-center text-lg-center mt-4 pt-2">
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
                style={{ paddingLeft: "5rem",  paddingRight: "5rem" }} >SignUp</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Have an account? <Link to={"/signup"}
                    className="link-danger">Login</Link></p>
            </div>
        </>
    );
}

export default SignUp;