import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { Upload, message } from "antd";
import * as Icon from "react-feather";
import "../../../assets/css/dashboard.css";

import { ModalContext } from "../../../context/ModalContext";
import { KycContext } from "../../../context/KycContext";
import { useToasts } from "react-toast-notifications";

//  Validation
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Director_form() {
  const { addToast } = useToasts();

  const context = useContext(ModalContext);
  const { modalClose } = context;
  const kycContext = useContext(KycContext);
  const { kyc, setKyc, image, setImage } = kycContext;
  const { directors } = kyc;

  // states
  const [newDirector, setNewDirector] = useState({
    firstName: "",
    lastName: "",
    director_pin: "",
    id_number: "",
    email: "",
    contact: "",
    address: "",
  });

  // destructure
  const {
    firstName,
    lastName,
    director_pin,
    id_number,
    email,
    contact,
    address,
  } = newDirector;

  const item = {
    name: `${firstName + "" + lastName}`,
    director_pin,
    id_number,
    email,
    contact,
    address,
  };

  const handleAddRow = (e) => {
    // e.preventDefault()
    setKyc({ ...kyc, directors: [...directors, item] });
  };

  const success = () => {
    return modalClose(), handleAddRow();
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setNewDirector({
      ...newDirector,
      [evt.target.name]: value,
    });
  };

  // start

  const token = sessionStorage.getItem("token");

  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        token: `${token}`,
      },
    };
    fmData.append("image", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      // setImage(file);
    } catch (err) {
      console.log("Eroor: ", err);
      // setImage([]);

      onError({ err });
    }
  };

  // function getBase64(img, callback) {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => callback(reader.result));
  //   reader.readAsDataURL(img);
  // }

  const handleOnChange = ({ file, fileList, event, info }) => {
    // if (file.status === 'done') {
    //   // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, imageUrl =>
    //     setImage(
    //       imageUrl,
    //       // loading: false,
    //     ),
    //   );
    // }
    setImage(fileList);
  };
 
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={newDirector}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),

          director_pin: Yup.string().required("KRA Pin is required"),

          id_number: Yup.string().required("ID Number is required"),
          contact: Yup.string().required("Phone Number is required"),
          address: Yup.string().required("Physical address is required"),
          email: Yup.string()
            .email("Enter a valid email")
            .required("Password is required"),
        })}
        onSubmit={() => success()}
      >
        {({ errors, touched }) => (
          <Form className="login-form" enctype="multipart/form-data">
            <div className="form-group ">
              <p className="text-center"> Director's image</p>
              <Upload
                accept="image/*"
                customRequest={uploadImage}
                beforeUpload={beforeUpload}
                onChange={handleOnChange}
                listType="picture-card"
                defaultFileList={image}
                className="image-upload-grid"
              >
                {image.length >= 1 ? null : (
                  <div>
                    <Icon.Edit2 size={18} />
                  </div>
                )}
              </Upload>
              {/* {progress > 0 ? <Progress percent={progress} /> : null} */}
            </div>

            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group ">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    value={newDirector.firstName}
                    // value={directors[index].image}
                    // onChange={handleChange(index)}
                    onChange={handleChange}
                    className={
                      "form-control border" +
                      (errors.firstName && touched.firstName
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="firstName"
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
                    value={newDirector.lastName}
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
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                value={newDirector.email}
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
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group mt-0">
                  <label htmlFor="password">KRA Pin</label>
                  <input
                    name="director_pin"
                    type="text"
                    value={newDirector.director_pin}
                    onChange={handleChange}
                    className={
                      "form-control border password-input" +
                      (errors.director_pin && touched.director_pin
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="director_pin"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mt-0">
                  <label htmlFor="id">ID Number</label>
                  <input
                    name="id_number"
                    type="text"
                    value={newDirector.id_number}
                    onChange={handleChange}
                    className={
                      "form-control border" +
                      (errors.id_number && touched.id_number
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="id_number"
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
                value={newDirector.contact}
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
              <label htmlFor="username">Address</label>
              <input
                name="address"
                type="text"
                value={newDirector.address}
                onChange={handleChange}
                className={
                  "form-control border" +
                  (errors.address && touched.address ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="address"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <button
              color="primary"
              variant="contained"
              type="submit"
              className="btn btn-outline-success px-5 mx-auto "
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
