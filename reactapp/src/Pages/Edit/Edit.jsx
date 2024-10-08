import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiBaseUrl } from '../../apiBaseUrl';


import Navbar from '../Component/Navbar';
import Dialog from './Dialog';

function Edit(){


    const [user, setUser] = useState({});

    // const [submitStatus, setSubmitStatus] = useState(false);

    const [shopName, setShopName] = useState('');

    const [resetData, setResetData] = useState(true);

    const [dataValidation, setDataValidation] = useState({
        'shopName': false,
        'userName': false,
        'email': false,
        'contact': false,
        'password': false
    });


    const { id } = useParams();


    const [isDialogOpen, setDialog] = useState( false );

    const [toDelete, setTODelete] = useState(false);

    // Open dialog
    const openDialog = () => {
        setDialog(true);
    };
    
    // Close dialog
    const closeDialog = () => {
        setDialog(false);
    };

    const navigate = useNavigate();

    const apiUrl = `${apiBaseUrl}/user/${id}`;

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})   
        .then(res=>res.json())
        .then( (res) => {
            setUser(res);
            setShopName(res.shopName);
        });
    }, [apiUrl, resetData]);

    let updateChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value.trim()
        });
        setDataValidation({
            ...dataValidation,
            [e.target.name] : false
        });
    }

    const deleteAccount = () => {
        fetch(`${apiBaseUrl}/user/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.text())
        .then((res) => {
            // Account Deleted
        });
        navigate('/');
    }

    const editAccount = () => {
        fetch(`${apiBaseUrl}/user/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res => res.text())
        .then( (res) => {
            setUser(res);
            setResetData(!resetData);
        });
    }

    const submit = (e) => {

        e.preventDefault();

        if(e.target.name === "delete"){
            setTODelete(true);
            openDialog();
            return;
        }

        let invalid = {};

        let isEmpty = false;

        Object.entries(user).forEach(([key, value]) => {
            if (value === '') {
                invalid[key] = true;
                isEmpty = true; 
            }
        });

        setDataValidation({
            ...dataValidation,
            ...invalid
        });

        if( isEmpty ) return;

        setTODelete(false);
        openDialog();
    }

    return(
        <>
            <Navbar id={user._id} shopName={shopName}/>

            <div className='container pt-5 mt-5' style={{ height: '100%',  width: '100%', overflow: 'hidden', position: 'relative'}}>
                <form>

                <div className="row list-group text-center list-group-horizontal mb-2 text-dark mt-5 ps-lg-5 pe-lg-5 ps-sm-5 pe-sm-5">

                    {/* Username Input */}
                    <div className="col-12 col-lg-6 ">
                        <div data-mdb-input-init className="form-outline mb-2 text-start">
                            <label className="form-label m-0 ms-2" > Username </label> 

                            <input type="text" className="form-control form-control-lg text-secondary" placeholder="Enter Username"
                            name="userName" value={user.userName || ""} disabled/>
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="col-12 col-lg-6">
                        <div data-mdb-input-init className="form-outline mb-2 text-start">
                            <label className="form-label m-0 ms-2" > Email </label> 
                            <label className="form-label ms-4 text-danger" > { dataValidation.email && "Enter Email" } </label>

                            <input type="email" className="form-control form-control-lg" placeholder="Enter Email"
                            name="email" value={user.email || ""} onChange={ (e) => { updateChange(e) } }/>
                        </div>
                    </div>

                </div>


                <div className="row list-group text-center list-group-horizontal mb-2 text-dark ps-lg-5 pe-lg-5 ps-sm-5 pe-sm-5">

                    {/* Shopname Input */}
                    <div className="col-12 col-lg-6">
                        <div data-mdb-input-init className="form-outline mb-2 text-start">
                            <label className="form-label m-0 ms-2" > Shopname </label> 
                            <label className="form-label ms-4 text-danger" > { dataValidation.shopName && "Enter Shopname" } </label>

                            <input type="text" className="form-control form-control-lg" placeholder="Enter Shopname"
                            name="shopName" value={user.shopName || ""} onChange={ (e) => { updateChange(e) } } />
                        </div>
                    </div>

                    {/* Contact Number Input */}
                    <div className="col-12 col-lg-6">
                        <div data-mdb-input-init className="form-outline mb-2 text-start">
                            <label className="form-label m-0 ms-2" > Contact Number </label> 
                            <label className="form-label ms-4 text-danger" > { dataValidation.email && "Enter Contact Number" } </label>

                            <input type="text" className="form-control form-control-lg" placeholder="Enter Contact Number"
                            name="contact" value={user.contact || ""} onChange={ (e) => { updateChange(e) } }/>
                        </div>
                    </div>

                </div>


                {/* <div className="row list-group text-center list-group-horizontal mb-2 text-dark ps-lg-5 pe-lg-5 ps-sm-5 pe-sm-5">
                    <div className="col-12">
                    <label className="text-danger">
                        { submitStatus && "Invalid Password" }
                    </label>
                    </div>
                </div> */}


                {/* Buttons */}
                <div className="row list-group text-center list-group-horizontal text-dark mt-5 ps-lg-5 pe-lg-5 ps-sm-5 pe-sm-5 d-flex justify-content-center">

                    {/* <div className="col-0 col-sm-2 col-md-3 col-lg-2 "></div> */}


                    {/* Reset Button */}
                    <div className="col-11 col-sm-4 col-md-3 col-lg-2">
                        <button  
                            name="reset"
                            type="button"
                            className="mt-2 btn btn-outline-success btn-lg w-100"
                            onClick={ () => setResetData( !resetData ) }
                        > Reset </button>
                    </div>


                    {/* Edit Button */}
                    <div className="col-11 col-sm-4 col-md-3 col-lg-2">
                        <button  
                            name="edit"
                            type="button"
                            className="mt-2 btn btn-outline-danger btn-lg w-100"
                            onClick={ (e) => { submit(e) } }
                        > Edit </button>
                    </div>

                    {/* Delete Button */}
                    <div className="col-11 col-sm-4 col-md-3 col-lg-2">
                        <button  
                            name="delete"
                            type="button"
                            className="mt-2 btn btn-lg btn-outline-danger w-100"
                            onClick={ (e) => { submit(e) } }
                        > Delete </button>
                    </div>

                    {/* Cancel Button */}
                    <div className="col-11 col-sm-4 col-md-3 col-lg-2">
                        <button  
                            name="delete"
                            type="button"
                            className="mt-2 btn btn-lg btn-outline-success w-100"
                            onClick={ (e) => { navigate(`/user/${user._id}`) } }
                        > Cancel </button>
                    </div>

                </div>

                </form>
            </div>

            { isDialogOpen && <Dialog 
                id={id}
                correctPassword={user.password}
                closeDialog={closeDialog}
                callFunction={toDelete ? deleteAccount : editAccount}
            /> }

        </>
    );
}

export default Edit;