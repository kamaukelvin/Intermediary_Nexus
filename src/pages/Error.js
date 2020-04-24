import React from 'react'
import '../assets/css/dashboard.css'
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div className="ht-100v d-flex">
        <div className="card shadow-none mx-auto text-center bd-transparent bg-transparent align-self-center">
          <h1 className="tx-bold tx-140 tx-gray-500">4<span className="text-danger">0</span>4</h1>
          <h3 className="text-uppercase">Page not found!</h3>
          <p className="tx-gray-500">Seems you're looking for something that doesn't exist.</p>
          <h5>Go back <Link to='/'>Home</Link></h5>
          <div className="text-center">
            <p>Copyright © 2020.</p>
          </div>
        </div>
      </div>
    )
}
