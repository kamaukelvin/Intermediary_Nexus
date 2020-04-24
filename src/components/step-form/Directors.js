import React, { useContext, useRef } from "react";
import { KycContext } from "../../context/KycContext";
import { Upload, message, Button, Popconfirm } from "antd";
import "antd/dist/antd.css";
import * as Icon from "react-feather";
import { ModalContext } from "../../context/ModalContext";
import AddDirector from "../widgets/modals/AddDirector";
import "../../assets/css/dashboard.css";
import axios from "axios";

export default function Directors(props) {
  const refModal = useRef();

  const { history } = props;

  // MODAL CONTEXT

  const modalContext = useContext(ModalContext);
  const { setModalShow, modalShow, modalClose } = modalContext;

  // KYC CONTEXT
  const context = useContext(KycContext);
  const { kyc, setKyc } = context;
  const { documents, directors, image } = kyc;

  // const handleChange = (evt) => {
  //   const value = evt.target.value;
  //   setKyc({
  //     ...kyc,
  //     [evt.target.name]: value,
  //   });
  // }
  // const handleRowChange=(index)=>e=>{
  //     const {name, value} =e.target;
  //     const rows = [...directors];
  //     rows[index]={...rows[index],[name]:value};
  //     setKyc({ ...kyc, directors:rows})
  //   }
  console.log("my directors", directors)

  const handleRemoveRow = (index) => (e) => {
    e.preventDefault();
    const rows = [...directors];
    rows.splice(index, 1);
    setKyc({ ...kyc, directors: rows });
  };

  return (
    <>
      <h3 className="upload-title text-center mt-5">Add Directors</h3>

      <div>
        {" "}
        <button
          id="add_row"
          onClick={() => setModalShow(true)}
          class="btn btn-outline-primary  btn-sm py-2  mb-3"
        >
          <i className="fa fa-plus-circle pr-2" />
          Add Director
        </button>
      </div>
      <AddDirector show={modalShow} onHide={modalClose} refModal={refModal} />
      { directors.length === 0 ? null : (
        <table className="table table-bordered table-hover" id="tab_logic">
          <thead className="bg-light">
            <tr>
              {/* <th className="">
                                    Image
                                  </th> */}
              <th className="">Name</th>
              <th className="">ID/Passport</th>
              <th className="text-center">Pin No.</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Email</th>
              <th className="text-center">Address</th>
              <th className="text-center" />
            </tr>
          </thead>
          <tbody>
            {directors.map((director, index) => {
              return (
                <tr>
                  {/* <td className="text-center"></td> */}

                  {/* <td className="text-center">
                                    <div className="profile-thumbnail">
                                    {image[0].file.imageUrl ?<img src={image[0].file.imageUrl} className="img-fluid wd-35 ht-35 rounded-circle" alt="" />: null}
                                  </div>
                                      </td> */}

                  <td className="text-center">{director.name}</td>
                  <td className="text-center">{director.id_number}</td>
                  <td className="text-center">{director.director_pin}</td>
                  <td className="text-center">{director.contact}</td>
                  <td className="text-center">{director.email}</td>
                  <td className="text-center">{director.address}</td>
                  <td className="text-center">
                    <Popconfirm
                      title="Are you sure delete this director?"
                      onConfirm={handleRemoveRow(index)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <button
                        className="btn btn-outline-none btn-xs"
                        // onClick={}
                      >
                        <i className="fa fa-trash text-danger"></i>
                      </button>
                    </Popconfirm>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )} 
    </>
  );
}
