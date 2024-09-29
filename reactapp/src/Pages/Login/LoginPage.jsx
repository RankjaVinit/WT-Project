import { useState } from "react";
import { Outlet, Link, useNavigate, useParams } from "react-router-dom";
import './Login.css';
import { apiBaseUrl } from '../../apiBaseUrl';

function LoginPage(){
    return(
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <Outlet/>
                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}



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

export {LoginPage, SignUp};