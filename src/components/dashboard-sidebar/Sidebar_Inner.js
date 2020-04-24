import React from 'react'
import * as Icon from 'react-feather';

export default function Sidebar_Inner() {
    return (
        <div className="page-sidebar-inner mt-5 pt-5">
        <div className="page-sidebar-menu">
          <ul className="accordion-menu">
            <li className="open active">
              <a href><Icon.Home />
                <span>Dashboard</span></a>
            </li>
            <li className="open ">
              <a href><Icon.Users />
                <span>My Clients</span></a>
            </li>
            <li className="open">
              <a href><Icon.Briefcase />
                <span>My Underwriters</span></a>
            </li>
            <li className="open">
              <a href><Icon.Globe />
                <span>My Requests</span></a>
            </li>
            <li className="open">
              <a href><Icon.Bell />
                <span>Notifications</span></a>
            </li>
            <li className="open">
              <a href><Icon.FileText />
                <span>Quotations</span></a>
            </li>
            <li className="open">
              <a href><Icon.CreditCard />
                <span>Accounts</span></a>
            </li>
            <li className="open">
              <a href><Icon.MessageSquare />
                <span>Chats</span></a>
            </li>
            <li className="open">
              <a href><Icon.Award />
                <span>My Profession</span></a>
            </li>
            <li className="open">
              <a href><Icon.Info />
                <span>Terms and Conditions</span></a>
            </li>
          </ul>
        </div>
      </div>
    )
}
