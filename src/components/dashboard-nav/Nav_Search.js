import React from 'react'

export default function Nav_Search() {
    return (
        <div className="search-form">
        <form action="#" method="GET">
          <div className="input-group">
            <input className="form-control search-input" name="search" placeholder="Type something..." type="text" />
            <span className="input-group-btn">
              <span id="close-search"><i className="ion-ios-close-empty" /></span>
            </span>
          </div>
        </form>
      </div>
    )
}
