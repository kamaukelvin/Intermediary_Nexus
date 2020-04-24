import React from 'react'
import * as Icon from 'react-feather';

export default function index() {


  const rows = [
    {
      'image': '',
      'name': 'Stanley Owens',
      'description': 'Nexus Insurance',
      'request_date': '12/03/2020',
      'status':'completed'
    },
    {
      'image': '',
      'name': 'John Doe',
      'description': 'AIG Insurance',
      'request_date': '12/03/2020',
      'status':'declined'
    },
    {
      'image': '',
      'name': 'Adam Easter',
      'description': 'Britam Insurance',
      'request_date': '12/03/2020',
      'status':'pending'
    },
    {
      'image': '',
      'name': 'Robert Owens',
      'description': 'Dhl',
      'request_date': '12/03/2020',
      'status':'completed'
    },
  ]
    return (
        <div className="col-md-12 col-xl-8">
        <div className="card mg-b-20">
          <div className="card-header">
            <h4 className="card-header-title">
              Recent Requests
            </h4>
          </div>
          <div className="card-body pd-0 collapse show" id="customerDetails">
            <div className="table-responsive">
              <table className="table table-hover mg-0">
                <thead className="tx-dark tx-uppercase tx-10 tx-bold">
                  <tr>
                    <th>Client</th>
                    <th>Request Date</th>
                    <th>Status</th>
                    <th className="tx-right">Action</th>
                  </tr>
                </thead>
                <tbody>
               
                    {rows.map(row=>{
                      return(
                        <tr>
                        <td className="d-flex align-items-center">
                        <div className="avatar mr-2">
                          <img src={row.image} className="img-fluid wd-40 ht-40 rounded-circle" alt="" />
                        </div>
                        <div className="d-block">
                          <a href className="my-0 mt-1 tx-13">{row.name}</a>		
                          <p className="tx-12 mg-0 tx-gray-500">{row.description}</p>
                        </div>
                      </td>
                      <td>
                        <p className="tx-12 mb-0 ">{row.request_date}</p>
                      </td>
                      <td>
                        <span className={`badge ${row.status==='pending'?'badge-warning': row.status==='completed'?'badge-success':'badge-danger'}`}>{row.status}</span>
                      </td>
                      <td className="tx-right">
                        <a href className="btn btn-sm btn-label-primary"><Icon.MoreHorizontal/></a>
                      </td>
                      </tr>
                      )
                    })}
                  
                
          
              
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
    )
}
