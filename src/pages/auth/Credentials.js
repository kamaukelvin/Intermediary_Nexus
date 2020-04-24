import React, { useState } from "react";
import bg from "../../assets/images/auth/credentials3.jpg";
import Logo from "../../assets/images/nexus_logo.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useToasts } from 'react-toast-notifications'


//  React Notification
import { NotificationManager } from "react-notifications";

//  Validation
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// token
import { setUserSession } from "../../utils/Common";

const Credentials = (props) => {

  const { addToast } = useToasts();
  // states

  const [user, setUser] = useState({
    firstName: "",
    lastName:'',
    username: '',
    contact: '',
    password: '',
    employee_ref: '',
    confirmPassword: '',
    tnc:false,
    showPassword: false,
    showConfirmPassword:false
  });

  const [error, setError] = useState("");
  const[loading, setLoading]= useState(false)

  //  destructure
  const { firstName, lastName, username, password, tnc, employee_ref, contact, } = user;
  const { history } = props;


  // methods

  const handleChange = (evt) => {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });

    console.log(user);
  };

  const togglePassword=()=>{
    setUser({...user,
      showPassword:!user.showPassword
    })

  }
  const toggleConfirmPassword=()=>{
    setUser({...user,
      showConfirmPassword:!user.showConfirmPassword
    })

  }

    const toggleAcceptTerms=()=>{
    setUser({...user,
      tnc:!user.tnc
    })
  }

  //  Login in user

  const submitCredentials = () => {

    const reg_id = sessionStorage.getItem('registration_id')
   
    const body = 

      {
        "resource":"registration",
        "action":"credential",
        "data" :{
            "registration_setup_id": `${reg_id}` ,
             "tnc" : `${tnc}`,
             "names":`${firstName +""+ lastName}`,
             "contact":`${contact}`,
             "employee_ref":`${employee_ref}`,
             "password":`${password}`,
             "username":`${username}`
        }
        
      }
    
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "http://api.nexus.ke/api/web/v1/intermediary",
       body,
        config
      )
      // console.log("this is the body"+ JSON.stringify(body))
 
      .then((res) => {
        setLoading(false);
        sessionStorage.removeItem('registration_id')
        history.push("/login");
      })
      // errors are printed out in the console
      .catch((err) => {
        console.log("we are at the error and error is" + JSON.stringify(err.response));
        setError(err.response.data.err_msg);
        addToast(err.response.data.err_msg, { appearance: 'error',autoDismiss: true, } )
        setLoading(false);
      });
      setLoading(true);
      console.log("this is the id"+ reg_id)
  };




  return (
    <Formik
      enableReinitialize
      initialValues={user}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .required("First Name is required"),
        lastName: Yup.string()
          .required("Last Name is required"),
      contact: Yup.string()
          .required("Contact is required"),
          employee_ref: Yup.string()
            .required("Employee reference is required"),
          
        username: Yup.string()
          .required("username is required"),
        password: Yup.string()
          .min(6, 'Password must be atleast 6 characters')
          .required("Password is required"),
        confirmPassword: Yup.string()
              .oneOf([Yup.ref('password')], 'Passwords do not match')
              .required('Confirm password is required'),
        tnc: Yup.boolean()
              .oneOf([true], 'Please accept Terms and Conditions')
      })}
      onSubmit={() => submitCredentials()}
    >
      {({ errors, touched }) => (
        <div className="d-flex">
          <div
            className="col-md-6 d-flex "
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <Link to="/" className="">
              <img
                style={{
                  height: "100px",
                  width: "100px",
                }}
                alt="Logo"
              />
            </Link>

            {/* <div className=" align-self-center text-white">
              <h3>Complete your Registration</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                itaque debitis doloribus?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Amet itaque debitis doloribus?met itaque
                debitis doloribus?
              </p>
            </div> */}

            <div
              className=""
              style={{
                position: "absolute",
                margin: "auto",
                bottom: "0",
              }}
            >
              <Link to="#" className="">
                Terms and conditions |
              </Link>
              <Link to="#" className=" ">
                {" "}
                &copy; 2020 Nexus
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className="container">
             
              <div
                className="col-md-6 "
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "25%",
                }}
              >
                {/* {error ? (
                  <div role="alert" className="alert alert-danger">
                    <div className="alert-text">{error}</div>
                  </div>
                ) : null} */}
                <h2 className="text-center mb-5">Set up your Credentials</h2>
                <Form className="login-form">
                  <div className="form-row">
           <div className="col-md-6">
                    <div className="form-group ">
                      <label htmlFor="firstName">First Name</label>
                        <input
                          name="firstName"
                          type="text"
                          value={user.firstName}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.firstName && touched.firstName ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name='firstName'
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                 
        </div>
           <div className="col-md-6">
                    <div className="form-group ">
                      <label htmlFor="lastName">Last Name</label>
                        <input
                          name="lastName"
                          type="text"
                          value={user.lastName}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.lastName && touched.lastName ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                 
        </div>
        </div>
                 
                  <div className="form-group mt-0 ">
                      <label htmlFor="username">Username</label>
                        <input
                          name="username"
                          type="text"
                          value={user.username}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.username && touched.username ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                    <div className="form-row">
                    <div className="col-md-6">
                  <div className="form-group mt-0">
                      <label htmlFor="password">Password</label>
                        <input
                          name="password"
                          type={user.showPassword ? "text" : "password"}
                          value={user.password}
                          onChange={handleChange}
                          className={
                            "form-control border password-input" +
                            (errors.password && touched.password ? " is-invalid" : "")
                          }
                        /><i className={`fa ${user.showPassword ? 'fa-eye' : 'fa-eye-slash'} password-icon`} onClick={togglePassword}/>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                  <div className="form-group mt-0">
                      <label htmlFor="password">Confirm Password</label>
                        <input
                          name="confirmPassword"
                          type={user.showConfirmPassword ? "text" : "password"}
                          value={user.confirmPassword}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.confirmPassword && touched.confirmPassword ? " is-invalid" : "")
                          }
                        /><i className={`fa ${user.showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'} password-icon`} onClick={toggleConfirmPassword}/>
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                    </div>
                    </div>
                    <div className="form-group mt-0 ">
                      <label htmlFor="username">Contact</label>
                        <input
                          name="contact"
                          type="text"
                          value={user.contact}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.contact && touched.contact ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="contact"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                    <div className="form-group mt-0 ">
                      <label htmlFor="username">Employee Reference</label>
                        <input
                          name="employee_ref"
                          type="text"
                          value={user.employee_ref}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.employee_ref && touched.employee_ref ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="employee_ref"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                           <div className="form-group form-check">
  
                      <input
                        type="checkbox"
                        name="tnc"
                        checked={user.tnc}
                        onChange={toggleAcceptTerms}
                        className={
                          "form-check-input" +
                          (errors.tnc && touched.tnc ? " is-invalid" : "")
                        }
                      />
                    <label className="form-check-label">
                      I have read the terms and conditions
                    </label>
                    <ErrorMessage
                      name="tnc"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-login btn-block my-5"
                    // onClick={login}
                  >
                   {loading && ( <i className="fa fa-circle-notch fa-spin" style={{ marginRight: "5px" }}/>)}
                    {loading && <span className="text-capitalize">
                      Submit
                      </span>
                    }
                    {!loading && (
                      <span className="text-capitalize"> Submit</span>
                    )}
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default Credentials;
