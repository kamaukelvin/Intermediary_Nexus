import React from 'react'
import * as Icon from 'react-feather';

export default function Sidebar_Footer() {
    return (
        <div className="sidebar-footer">									
        <a className="pull-left" href="page-profile.html" data-toggle="tooltip" data-placement="top" data-original-title="Profile">
        <Icon.User /></a>									
        <a className="pull-left " href="mailbox.html" data-toggle="tooltip" data-placement="top" data-original-title="Mailbox">
        <Icon.Mail /></a>
        <a className="pull-left" href="page-unlock.html" data-toggle="tooltip" data-placement="top" data-original-title="Lockscreen">
        <Icon.Lock /></a>
        <a className="pull-left" href="page-singin.html" data-toggle="tooltip" data-placement="top" data-original-title="Sing Out">
        <Icon.LogOut /></a>
      </div>
    )
}
