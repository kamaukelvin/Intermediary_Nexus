import React from 'react'
import Spinner from '../../../assets/images/spinner_2.svg';

const Loader=({style})=> {
    return (
        <div  className="center">
       <span><img src={Spinner} alt="spinner" style={style}/></span> 
        </div>
    )
}

export default Loader
