import React, { useState, createContext, } from "react";



const KycContext = createContext();
const KycContextProvider = (props) => {
 

  // states

  const [kyc, setKyc] = useState({
    intermediary: "",
    directors: [],
    uploading: false,
  });

  const [image, setImage] = useState([]);

  const [documents, setDocuments] = useState({
    kra_pin: [],
    cr_12: [],
    incorporation_certificate: [],
    practicing_license: [],
    mou: [],
    licence_certificate: [],
  });

  return (
    <KycContext.Provider
      value={{ setKyc, kyc, image, setImage, documents, setDocuments }}
    >
      {props.children}
    </KycContext.Provider>
  );
};

const KycConsumer = KycContext.Consumer;
export { KycContextProvider, KycConsumer, KycContext };