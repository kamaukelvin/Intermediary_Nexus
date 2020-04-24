import React from 'react'
import '../../assets/css/dashboard.css'
import SidebarInner from '../dashboard-sidebar/Sidebar_Inner'
import SidebarLogo from '../dashboard-sidebar/Sidebar_Logo'
import SidebarFooter from '../dashboard-sidebar/Sidebar_Footer'

export default function index() {
    return (
        <div className="page-sidebar">
            <SidebarLogo/>
            <SidebarInner/>
            <SidebarFooter/>
      </div>
    )
}
