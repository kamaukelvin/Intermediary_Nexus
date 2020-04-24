import React from 'react'
import * as Icon from 'react-feather';
import pic from "../../assets/images/avatar.png"









export default function Nav_Content() {

  // const{DropdownTrigger,DropdownContent}=Dropdown

    return (
        <nav className="navbar navbar-expand-lg">
        <ul className="list-inline list-unstyled mg-r-20">
          {/* Mobile Toggle and Logo */}
          <li className="list-inline-item align-text-top"><a className="hidden-md hidden-lg" href="#" id="sidebar-toggle-button"><Icon.Menu/></a></li>
          {/* PC Toggle and Logo */}
          <li className="list-inline-item align-text-top"><a className="hidden-xs hidden-sm" href="#" id="collapsed-sidebar-toggle-button"><Icon.Menu/></a></li>
        </ul>
        {/*/ Brand and Logo End */}
        {/*================================*/}
        {/* Header Right Start */}
        {/*================================*/}
        <div className="header-right pull-right ml-auto">
          <ul className="list-inline justify-content-end">
            <li className="list-inline-item align-middle"><a href="#" id="search-button"><Icon.Search size={18}/></a></li>
            {/*================================*/}
            {/* Notifications Dropdown Start */}
            {/*================================*/}
            <li className="list-inline-item dropdown hidden-xs">
             
              <a className="notification-icon" href role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Icon.Bell size={18}/>
                <span className="notification-count wave in" />
              </a>
              <div className="dropdown-menu dropdown-menu-right shadow-2">
                {/* Top Notifications Area */}
                <div className="top-notifications-area">
                  {/* Heading */}
                  <div className="notifications-heading">
                    <div className="heading-title">
                      <h6>Notifications</h6>
                    </div>
                    <span>5+ New Notifications</span>
                  </div>
                  <div className="notifications-box" id="notificationsBox">
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-success">
                          <i className="fa fa-smile-o tx-success tx-16" />
                        </div>
                        <div>
                          <span>Your order is placed</span>
                          <span className="small tx-gray-600 ft-right">Jun 10</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-warning">
                          <i className="fa fa-bell tx-warning tx-16" />
                        </div>
                        <div>
                          <span>Your item is shipped</span>
                          <span className="small tx-gray-600 ft-right">Jun 05</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-success">
                          <i className="fa fa-check tx-success tx-16" />
                        </div>
                        <div>
                          <span>New Message received</span>
                          <span className="small tx-gray-600 ft-right">Jun 02</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-danger">
                          <i className="fa fa-heartbeat tx-danger tx-16" />
                        </div>
                        <div>
                          <span>Payment failed!</span>
                          <span className="small tx-gray-600 ft-right">May 29</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-primary">
                          <i className="fa fa-info tx-info tx-16" />
                        </div>
                        <div>
                          <span>New document available</span>
                          <span className="small tx-gray-600 ft-right">May 25</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-primary">
                          <i className="fa fa-info tx-info tx-16" />
                        </div>
                        <div>
                          <span>New document available</span>
                          <span className="small tx-gray-600 ft-right">May 08</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="notifications-footer">
                    <a href>View all Notifications</a>
                  </div>
                </div>
              </div>
              
            </li>
            {/*/ Notifications Dropdown End */}
            {/*================================*/}
            {/* Messages Dropdown Start */}
            {/*================================*/}
            <li className="list-inline-item dropdown hidden-xs">
              <a className="message-icon" href role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Icon.Mail size={18}/>
                <span className="messages-count wave in" />
              </a>
              <div className="dropdown-menu dropdown-menu-right shadow-2">
                <div className="top-message-area">
                  <div className="top-message-heading">
                    <div className="heading-title">
                      <h6>Messages</h6>
                    </div>
                    <span>5+ New Messages</span>
                  </div>
                  <div className="message-box" id="messageBox">
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="pd-r-15">
                          <span className="avatar avatar-online">
                            <img src="https://via.placeholder.com/100x100" className="img-fluid" alt="" />
                            <i />
                          </span>
                        </div>
                        <div>
                          <span>Mary Adams</span>
                          <span className="small tx-gray-600 ft-right">30 minutes ago</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry...</div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="pd-r-15">
                          <span className="avatar avatar-online">
                            <img src="https://via.placeholder.com/100x100" className="img-fluid" alt="" />
                            <i />
                          </span>
                        </div>
                        <div>
                          <span>Richards Caleb</span>
                          <span className="small tx-gray-600 ft-right">12 hours ago</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry...</div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="pd-r-15">
                          <span className="avatar avatar-busy">
                            <img src="https://via.placeholder.com/100x100" className="img-fluid" alt="" />
                            <i />
                          </span>
                        </div>
                        <div>
                          <span>Lane Richards</span>
                          <span className="small tx-gray-600 ft-right">2 days ago</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry...</div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="pd-r-15">
                          <span className="avatar avatar-busy">
                            <img src="https://via.placeholder.com/100x100" className="img-fluid" alt="" />
                            <i />
                          </span>
                        </div>
                        <div>
                          <span>Edward Lane</span>
                          <span className="small tx-gray-600 ft-right">3 days ago</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry...</div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="pd-r-15">
                          <span className="avatar avatar-offline">
                            <img src="https://via.placeholder.com/100x100" className="img-fluid" alt="" />
                            <i />
                          </span>
                        </div>
                        <div>
                          <span>Lane Richards</span>
                          <span className="small tx-gray-600 ft-right">2 days ago</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry...</div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item list-group-item" href="javascript:void(0)">
                      <div className="d-flex justify-content-between">
                        <div className="pd-r-15">
                          <span className="avatar avatar-offline">
                            <img src="https://via.placeholder.com/100x100" className="img-fluid" alt="" />
                            <i />
                          </span>
                        </div>
                        <div>
                          <span>Edward Lane</span>
                          <span className="small tx-gray-600 ft-right">3 days ago</span>
                          <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry...</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="top-message-footer">
                    <a href>View all Messages</a>
                  </div>
                </div>
              </div>
            </li>
            {/*/ Messages Dropdown End */}
            {/*================================*/}
            {/* Profile Dropdown Start */}
            {/*================================*/}
            <li className="list-inline-item dropdown">
              <a href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="select-profile">Hi, User!</span><img src={pic}  className="img-fluid wd-35 ht-35 rounded-circle" alt="" /></a>
              <div className="dropdown-menu dropdown-menu-right dropdown-profile shadow-2">
                <div className="user-profile-area">
                  <div className="user-profile-heading">
                    <div className="profile-thumbnail">
                      <img src="https://via.placeholder.com/100x100" className="img-fluid wd-35 ht-35 rounded-circle" alt="" />
                    </div>
                    <div className="profile-text">
                      <h6>John Deo</h6>
                      <span>email@example.com</span>
                    </div>
                  </div>
                  <a href className="dropdown-item"><i className="icon-user" aria-hidden="true" /> My profile</a>
                  <a href className="dropdown-item"><i className="icon-envelope" aria-hidden="true" /> Messages <span className="badge badge-success ft-right mg-t-3">10+</span></a>
                  <a href className="dropdown-item"><i className="icon-settings" aria-hidden="true" /> settings</a>
                  <a href className="dropdown-item"><i className="icon-share" aria-hidden="true" /> My Activity <span className="badge badge-warning ft-right mg-t-3">5+</span></a>
                  <a href className="dropdown-item"><i className="icon-cloud-download" aria-hidden="true" /> My Download <span className="badge badge-success ft-right mg-t-3">10+</span></a>
                  <a href className="dropdown-item"><i className="icon-heart" aria-hidden="true" /> Support</a>
                  <a href="page-singin.html" className="dropdown-item"><i className="icon-power" aria-hidden="true" /> Sign-out</a>
                </div>
              </div>
            </li>
            {/* Profile Dropdown End */}
            {/*================================*/}
            {/* Setting Sidebar Start */}
            {/*================================*/}
            <li className="list-inline-item dropdown hidden-xs">
              <a className="settings-icon" id="settingSidebarTrigger" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Icon.Settings size={18}/>
              </a>					   
            </li>
            {/*/ Setting Sidebar End */}
          </ul>
        </div>
        {/*/ Header Right End */}
      </nav>
    )
}
