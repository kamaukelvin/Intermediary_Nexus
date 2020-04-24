import React from 'react'
import * as Icon from 'react-feather';

export default function index() {
    return (
        <div className="row row-xs clearfix">
            <div className="col-sm-6 col-xl-3">
                <div className="card mg-b-20">
                    <div className="card-body pd-y-0">
                        <div className="custom-fieldset mb-4">
                            <div className="clearfix">
                                <label className>Clients</label>
                            </div>
                            <div className="d-flex align-items-center text-dark">
                                <div className="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-warning">

                                    <Icon.Users />
                                </div>
                                <div>
                                    <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark"><span className="counter">42</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-xl-3">
          <div className="card mg-b-20">
            <div className="card-body pd-y-0">
              <div className="custom-fieldset mb-4">
                <div className="clearfix">
                  <label>Underwriters</label>
                </div>
                <div className="d-flex align-items-center text-dark">
                  <div className="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-success">
                  
                    <Icon.Briefcase/>
                  </div>
                  <div>
                    <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark"><span className="counter">21</span></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div className="col-sm-6 col-xl-3">
          <div className="card mg-b-20">
            <div className="card-body pd-y-0">
              <div className="custom-fieldset mb-4">
                <div className="clearfix">
                  <label>Quotations</label>
                </div>
                <div className="d-flex align-items-center text-dark">
                  <div className="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-primary">
                    
                    <Icon.FileText/>
                  </div>
                  <div>
                    <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark"><span className="counter">19</span></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div className="col-sm-6 col-xl-3">
          <div className="card mg-b-20">
            <div className="card-body pd-y-0">
              <div className="custom-fieldset mb-4">
                <div className="clearfix">
                  <label>Requests</label>
                </div>
                <div className="d-flex align-items-center text-dark">
                  <div className="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-danger">
           
                    <Icon.Globe/>
                  </div>
                  <div>
                    <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark"><span className="counter">23</span></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
