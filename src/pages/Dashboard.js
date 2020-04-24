import React from 'react'
import '../assets/css/dashboard.css'
import '../assets/css/style.min.css'
import '../assets/css/app.min.css'
import Navbar from '../components/dashboard-nav'
import Sidebar from '../components/dashboard-sidebar'
import Footer from '../components/dashboard-footer'
import CountCard from '../components/count_card'
import TransactionHistory from '../components/transaction_history'
import RecentRequests from '../components/recent_requests'

export default function Dashboard() {
    return (
      <div className="page-container">
        <Sidebar/>
        <div className="page-content">
          <Navbar/>
          <div className="page-inner">
            <div id="main-wrapper">
                <div className="pageheader pd-t-25 pd-b-35">
                  <div className="pd-t-5 pd-b-5">
                    <h1 className="pd-0 mg-0 tx-20">Dashboard</h1>
                  </div>
                  <div className="breadcrumb pd-0 mg-0">
                    <a className="breadcrumb-item" href="index.html"><i className="icon ion-ios-home-outline" /> Home</a>
                    <a className="breadcrumb-item active" href>Dashboard</a>
                  </div>
                </div>
                <CountCard />
                <div class="row row-xs clearfix">
                  <TransactionHistory/>
                  <RecentRequests/>
                </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
}
