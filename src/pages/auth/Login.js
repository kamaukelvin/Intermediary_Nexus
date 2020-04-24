import React, { useState } from "react";
import '../../assets/css/dashboard.css'
import bg from "../../assets/images/bg/bg-7.jpg";
import pic from "../../assets/images/auth/login.jpg"
import { Link } from "react-router-dom";
import axios from "axios";
import { useToasts } from 'react-toast-notifications'



//  Validation
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// token
import { setUserSession } from "../../utils/Common";

const Login = (props) => {

  const { addToast } = useToasts();
  // states

  const [user, setUser] = useState({
    username: "",
    password: "",
    showPassword: false,
    rememberMe: false,
    loading: false,
  });

  const [error, setError] = useState("");

  //  destructure
  const { username, password } = user;
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
  const toggleRememberMe=()=>{
    setUser({...user,
      rememberMe:!user.rememberMe
    })
  }

  const togglePassword=()=>{
    setUser({...user,
      showPassword:!user.showPassword
    })

  }
console.log("this is the stet of login"+JSON.stringify(user))
  //  Login in user

  const login = () => {
    console.log("login functiom")
    const body = {
      
        "resource":"login",
        "action":"login",
        "data" :{
          "username" :`${username}`,
          "password":`${password}`,
          "device_details" :{
              "device_type" :"CHROME",
                "device_category" :"WEB" ,
              "device_version" :"V1" ,
              "device_name" :"CHROME" ,
                "device_uuid" :"1223455"
          }
        }
      
    };

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    axios
    .post( 'http://api.nexus.ke/api/web/v1/intermediary',body, config)
      .then((res) => {
        setUser({...user, loading:false})
        sessionStorage.setItem('token',res.data.result.token )
        setUser({username:'', password:'', rememberMe:false});
        
        history.push("/kyc");
      })
      // errors are printed out in the console
      .catch((err) => {
        console.log("we are at the error and error is" + JSON.stringify(err));
        setError(err.response.data.err_msg);
        addToast(err.response.data.err_msg, { appearance: 'error',autoDismiss: true, } )
        setUser({username:'', password:'', rememberMe:false,loading: false});
   
      });
    setUser({ loading: true });
  };



  return (
    <Formik
      enableReinitialize
      initialValues={user}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          // .email("Please enter a valid email")
          .required("Username is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={() => login()}
    >
      {({ errors, status, touched }) => (
        <div className="d-flex">
          <div
            className="col-md-6 d-flex "
            style={{
              backgroundImage: `url(${pic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "80vw",
              height:"100vh"
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
              <Link to="#" className=" text-white">
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
                  top: "15%",
                  left: "25%",
                }}
              >
                {/* {error ? (
                  <div role="alert" className="alert alert-danger">
                    <div className="alert-text">{error}</div>
                  </div>
                ) : null} */}
                <h2 className="text-center mb-5">Login Account</h2>
                <Form className="login-form">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Username</label>
                    <Field
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
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      name="password"
                      type={user.showPassword ? "text" : "password"}
                      value={user.password}
                      onChange={handleChange}
                      className={
                        "form-control border" +
                        (errors.password && touched.password
                          ? " is-invalid"
                          : "")
                      }
                    /><i className={`fa ${user.showPassword ? 'fa-eye' : 'fa-eye-slash'} password-icon`} onClick={togglePassword}/>
                   
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        className="form-check-input"
                        checked={user.rememberMe}
                        onChange={toggleRememberMe}
                      />
                      <small>Remember Me</small>
                    </label>
                  </div>
                 
                  <p className="text-right ">
               <Link to="/password-reset">Forgot Password?</Link>
              </p>
              <p>
                  <button
                    type="submit"
                    disabled={user.loading}
                    className="btn btn-login btn-block"
                    // onClick={login}
                  >
                    {user.loading && ( <i className="fa fa-circle-notch fa-spin" style={{ marginRight: "5px" }}/>)}
                    {user.loading && <span className="text-capitalize">
                      Logging In
                      </span>
                    }
                    {!user.loading && (
                      <span className="text-capitalize"> Login</span>
                    )}
                  </button>
                  </p>
                   </Form>
                <p className="pt-3">
                Don't have an account yet? <Link to="/signup">Create Account</Link>
              </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default Login;
