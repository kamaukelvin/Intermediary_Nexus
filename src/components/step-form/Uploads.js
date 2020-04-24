import React, { useContext, useState, useEffect } from "react";
import { KycContext } from "../../context/KycContext";
import "../../assets/css/dashboard.css";
import MdCheckmarkCircleOutline from "react-ionicons/lib/MdCheckmarkCircleOutline";
import IosAttach from "react-ionicons/lib/IosAttach";

import { Upload, message } from "antd";
import * as Icon from "react-feather";
import axios from "axios";


export default function Uploads() {
  const context = useContext(KycContext);
  const {documents, setDocuments } = context;


  // token 

  const token = sessionStorage.getItem('token')


  // upload handlers

  const handleOnKraChange = ({ file, fileList, event }) => {

   if (file.status !== 'uploading') {
    console.log(file, fileList);
  }
  if (file.status === 'done') {
    setDocuments({ ...documents, kra_pin: file });
  } else if (file.status === 'error') {
    setDocuments({ ...documents, kra_pin: [] });
  } else if (file.status ==='removed'){
    message.error(`${file.name} was removed.`);
    setDocuments({ ...documents, kra_pin: [] });
  }
}
  

  const handleCR_12Change = ({ file, fileList, event }) => {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
    if (file.status === 'done') {
      setDocuments({ ...documents, cr_12: file });
    } else if (file.status === 'error') {
      setDocuments({ ...documents, cr_12: [] });
    } else if (file.status ==='removed'){
      message.error(`${file.name} was removed.`);
      setDocuments({ ...documents, cr_12: [] });
    }
  };
  const handleInc_CertChange = ({ file, fileList, event }) => {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
    if (file.status === 'done') {
      setDocuments({ ...documents, incorporation_certificate: file });
    } else if (file.status === 'error') {
      setDocuments({ ...documents, incorporation_certificate: [] });
    } else if (file.status ==='removed'){
      message.error(`${file.name} was removed.`);
      setDocuments({ ...documents, incorporation_certificate: [] });
    }
   
  };
  const handlePract_LicenseChange = ({ file, fileList, event }) => {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
    if (file.status === 'done') {
      setDocuments({ ...documents, practicing_license: file });
    } else if (file.status === 'error') {
      setDocuments({ ...documents, practicing_license: [] });
    } else if (file.status ==='removed'){
      message.error(`${file.name} was removed.`);
      setDocuments({ ...documents, practicing_license: [] });
    }
    
  };
  const handleLic_CertChange = ({ file, fileList, event }) => {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
    if (file.status === 'done') {
      setDocuments({ ...documents, licence_certificate: file });
    } else if (file.status === 'error') {
      setDocuments({ ...documents, licence_certificate: [] });
    } else if (file.status ==='removed'){
      message.error(`${file.name} was removed.`);
      setDocuments({ ...documents, licence_certificate: [] });
    }
   
  };
  const handleMoUChange = ({ file, fileList, event }) => {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
    if (file.status === 'done') {
      setDocuments({ ...documents, mou: file });
    } else if (file.status === 'error') {
      setDocuments({ ...documents, mou: [] });
    } else if (file.status ==='removed'){
      message.error(`${file.name} was removed.`);
      setDocuments({ ...documents, mou: [] });
    }
    
  };

  
 


  // Uploading Methods

  // KRA
  const uploadKra = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
      },
    };
    fmData.append("Kra", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
     
      message.success(`${file.name}'upload successfully.`);
    } catch (err) {
      console.log("Error: ", err);
      message.error(`${file.name} upload failed.`);
      setDocuments({ ...documents, kra_pin: [] });

      onError({ err });
    }
  };

  // CR_12
  const uploadCR_12 = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
      },
    };
    fmData.append("CR_12", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      message.success(`${file.name}'upload successfully.`);
   
    } catch (err) {
      console.log("Error: ", err);
      message.error(`${file.name} upload failed.`);
      setDocuments({ ...documents, cr_12: [] });

      onError({ err });
    }
  };

  // Incorporation Certificate
  const uploadInc_Cert = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
          
      },
    };
    fmData.append("Incorporation Cert", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      message.success(`${file.name}'upload successfully.`);
    
    } catch (err) {
      console.log("Error: ", err);
      message.error(`${file.name} upload failed.`);
      setDocuments({ ...documents, incorporation_certificate: [] });

      onError({ err });
    }
  };

  // Practicing LIcense
  const uploadPract_License = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
      },
    };
    fmData.append("Practicing License", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      message.success(`${file.name}'upload successfully.`);
      
    } catch (err) {
      console.log("Error: ", err);
      message.error(`${file.name} upload failed.`);
      setDocuments({ ...documents, practicing_license: [] });

      onError({ err });
    }
  };

  // License Certificate
  const uploadLic_Cert = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
      },
    };
    fmData.append("License_Certificate", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      message.success(`${file.name}'upload successfully.`);
   
    } catch (err) {
      console.log("Error: ", err);
      message.error(`${file.name} upload failed.`);
      setDocuments({ ...documents, licence_certificate: [] });

      onError({ err });
    }
  };

  // MoU
  const uploadMou = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
      },
    };
    fmData.append("MoU", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      message.success(`${file.name}'upload successfully.`);
     
    } catch (err) {
      console.log("Error: ", err);
      message.error(`${file.name} upload failed.`);
      setDocuments({ ...documents, mou: [] });

      onError({ err });
    }
  };


  return (
    <div>
      <h3 className="upload-title text-center mt-5">Upload Documents</h3>
      <h6 className="text-center">
        Please upload the documents below documents to proceed.
      </h6>
      <p className="font-weight-bold py-3 text-center">
        * Click on <Icon.UploadCloud size={12} /> to upload respective document
      </p>
      <div className="passport offset-md-2">
        <ol>
          <div className="row">
            <div className="col-md-6">
              <h4>
                <li className="py-2 ">
                  Company KRA Pin
                  <span className="pl-2">
                    <Upload
                      onChange={handleOnKraChange}
                      accept=".docx, .pdf,.doc"
                      customRequest={uploadKra}
                   
                    >
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
                <li className="py-2">
                  CR 12 Document
                  <span className="pl-2">
                    <Upload
                      onChange={handleCR_12Change}
                       accept=".docx, .pdf,.doc"
                      customRequest={uploadCR_12}
                    >
                      
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
                <li className="py-2">
                  Incorporation Certificate
                  <span className="pl-2">
                    <Upload
                      onChange={handleInc_CertChange}
                       accept=".docx, .pdf,.doc"
                      customRequest={uploadInc_Cert}
                    >
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
              </h4>
            </div>
            <div className="col-md-6">
              <h4>
                <li className="py-2">
                  Practicing License
                  <span className="pl-2">
                    <Upload
                       onChange={handlePract_LicenseChange}
                        accept=".docx, .pdf,.doc"
                       customRequest={uploadPract_License}
                    >
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
                <li className="py-2">
                  License Certificate
                  <span className="pl-2">
                    <Upload
                       onChange={handleLic_CertChange}
                        accept=".docx, .pdf,.doc "
                       customRequest={uploadLic_Cert}
                    >
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
                <li className="py-2">
                  MoU
                  <span className="pl-2">
                    <Upload
                      onChange={handleMoUChange}
                       accept=".docx, .pdf,.doc"
                      customRequest={uploadMou}
                    >
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
              </h4>
            </div>
          </div>
        </ol>

        {/* {(documents.kra_pin.length >= 1 && documents.cr_12.length >= 1 && documents.incorporation_certificate.length >= 1 &&
        documents.practicing_license.length >= 1 && documents.licence_certificate.length >= 1 && documents.mou.length >= 1) ? 
        <MdCheckmarkCircleOutline className="don_icon" color="#5cb85c"  /> : null} */}
      </div>

      <ul className="file_added">

        <li>Files Added:

        {(documents.kra_pin === undefined || documents.kra_pin.length === 0) &&
        (documents.cr_12 === undefined || documents.cr_12.length === 0) &&
        (documents.incorporation_certificate === undefined || documents.incorporation_certificate.length === 0 ) &&
        (documents.licence_certificate === undefined || documents.licence_certificate.length === 0) &&
        (documents.practicing_license === undefined || documents.practicing_license.length === 0) &&
        (documents.mou === undefined || documents.mou.length === 0) ? <span className="text-danger pl-2 font-weight-bold">none</span> : null
        }
        </li>
        {documents.kra_pin === undefined || documents.kra_pin.length === 0 ? null : <li className="ion-paperclip" ><IosAttach color="#5cb85c" />KRA Pin Certificate:</li> }
        {documents.cr_12 === undefined || documents.cr_12.length === 0 ? null : <li className="ion-paperclip" ><IosAttach color="#5cb85c" />CR_12 Document</li> }
        {documents.incorporation_certificate === undefined || documents.incorporation_certificate.length === 0 ? null : <li className="ion-paperclip" ><IosAttach color="#5cb85c" />Incorporation Certificate</li> }
        {documents.licence_certificate === undefined || documents.licence_certificate.length === 0 ? null : <li className="ion-paperclip" ><IosAttach color="#5cb85c" />License Certificate</li> }
        {documents.practicing_license === undefined || documents.practicing_license.length === 0 ? null : <li className="ion-paperclip" ><IosAttach color="#5cb85c" />Practicing LIcense</li> }
        {documents.mou === undefined || documents.mou.length === 0 ? null : <li className="ion-paperclip" ><IosAttach color="#5cb85c" />MoU</li> }

       

         
      </ul>
    </div>
  );
}

