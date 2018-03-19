import React, { Component } from 'react';

export class User extends React.Component {

    render(){
      const {user} = this.props
      return(
          <div className="col-md-3 col-xs-12 col-sm-6 col-lg-3">
              <div className="col-xs-12">
                <img src={user.avatar_url} className="img-box" />
                  <h2>{user.name}</h2>
                  <p>{user.bio} </p>
                  <ul className="details">
                    <li><p>{user.location}</p></li>
                  </ul>
              </div>
          </div>
      )
    }
}
