import React from 'react'
import '../../assets/css/dashboard.css'
import NavSearch from './Nav_Search'
import NavContent from './Nav_Content'


export default function index() {
    return (
        <div className="page-header">
            <NavSearch/>
            <NavContent/>
      </div>
    )
}
