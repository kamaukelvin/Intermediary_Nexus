import React, { useState } from "react";
import '../../assets/css/dashboard.css'
import bg from "../../assets/images/bg/bg-7.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useToasts } from 'react-toast-notifications'

//  Validation
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const Signup = (props) => {

  const { addToast } = useToasts();

  // states

  const [user, setUser] = useState({

    ira_code: "",
    category:"",
    email: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //  destructure

  const { history } = props;


  // methods

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });

    console.log(user);
  };

  //  Register new user
  const register = () => {

    // body
    const body ={
      "resource":"registration",
	    "action":"add",
      "data": {
        "ira_code": `${user.ira_code}`,
        "category": `${user.category}`,
        "email": `${user.email}`,
      }
    }
    // headers
    const config = {
      header: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
      },
    };

    // API Request
    axios
      .post( 'http://api.nexus.ke/api/web/v1/intermediary',body, config)
      .then((res) => {
        setUser({ ...user});
        setLoading(false)
       
        addToast(`Verification link sent successfully to ${user.email}`, { appearance: 'success',  autoDismiss: true })
        
        // clear fields
         setUser({ira_code:'',email:'', password:''})
          console.log("successful"+ res)
      })
     
      .catch((err) => {
        // console.log("this is the user"+ JSON.stringify(user))
     
        // console.log("we are at the error and error is" + JSON.stringify(err.response.data.err_msg));
        setError(err.response.data.err_msg);
        addToast(err.response.data.err_msg, { appearance: 'error',autoDismiss: true, } )
        setUser({ ...user});
        setLoading(false)
      });
      setLoading(true)};


    // CATEGORY OPTIONS
    const categories = [
      { value: '', label: 'Select a Category' },
      { value: 'AGENT', label: 'Agent' },
      { value: 'BROKER', label: 'Broker' },
      ];

  return (
    <Formik
      enableReinitialize
      initialValues={user}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Email is required"),
        ira_code: Yup.string()
          .required("IRA code is required"),
        category: Yup.string()
        .required("Select a category"),
      })}
      onSubmit={() => register()}
    >
      {({ errors, status, touched }) => (
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

            <div className=" align-self-center text-white">
              <h3 className="text-white pb-3">Register for Free</h3>
              <p className="text-white pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                itaque debitis doloribus?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Amet itaque debitis doloribus?met itaque
                debitis doloribus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                itaque debitis doloribus?Lorem ipsum dolor sit amet consectetur
              
              </p>
              <h4 className="text-white mt-3">Benefits of being part of us</h4>
              <ul>
                <div className="d-flex justify-content-between">
                 
                  <div>
                  <li className="p-2"><i className="fa fa-check pr-2"/> Lorem ipsum lot erluipsum</li>
                  <li className="p-2"><i className="fa fa-check pr-2"/> Lorem ipsum lot erluipsum</li>
                  <li className="p-2"><i className="fa fa-check pr-2"/> Lorem ipsum lot erluipsum</li>
              
                  </div>
                  <div>
                  <li className="p-2"><i className="fa fa-check pr-2"/> Lorem ipsum lot erluipsum</li>
                  <li className="p-2"><i className="fa fa-check pr-2"/> Lorem ipsum lot erluipsum</li>
                  <li className="p-2"><i className="fa fa-check pr-2"/> Lorem ipsum lot erluipsum</li>
                  </div>
          
            <div></div>
                </div>
              </ul>
            </div>

            <div
              className=""
              style={{
                position: "absolute",
                margin: "auto",
                bottom: "0",
              }}
            >
              <Link to="#" className="text-white">
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
                <h2 className="text-center mb-5">Create an Account</h2>
                <Form className="login-form">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      name="email"
                      type="text"
                      value={user.email}
                      onChange={handleChange}
                      className={
                        "form-control border" +
                        (errors.email && touched.email ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <Field 
                    name="category" as="select" 
                    onChange={handleChange}
                    className={
                      "form-control border"+
                      (errors.category && touched.category ? " is-invalid" : "")
                    }>
                     
                      {categories.map(category =>
                        <option value={category.value}>{category.label}</option>
                      )}
                    </Field>
                    <ErrorMessage
                      name="category"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="ira_code">IRA Code</label>
                    <Field
                      name="ira_code"
                      type="text"
                      value={user.ira_code}
                      onChange={handleChange}
                      className={
                        "form-control border " +
                        (errors.ira_code && touched.ira_code ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="ira_code"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-login btn-block mt-5"
                  >
                 {loading && ( <i className="fa fa-circle-notch fa-spin" style={{ marginRight: "5px" }}/>)}
                    {loading && <span className="text-capitalize">
                      Register
                      </span>
                    }
                    {!loading && (
                      <span className="text-capitalize"> Register</span>
                    )}
                  </button>
                </Form>
                <p className="pt-3">
                Already have an account? <Link to="/login">Log In</Link>
              </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default Signup;
