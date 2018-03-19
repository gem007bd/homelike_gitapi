import React, { Component } from 'react';

export class  Navbar extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-inverse">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="">github</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li><a href="pull-request">Pull requests</a></li>
                  <li><a href="issues">Issues</a></li>
                  <li><a href="marketplace">Marketplace</a></li>
                  <li><a href="explore">Explore</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="./"><span className="glyphicon glyphicon-bell"></span></a></li>
                    <li className="dropdown">
                      <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <span className="glyphicon glyphicon-plus"></span>
                        <span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a href="">Action</a></li>
                        <li><a href="">Another action</a></li>
                      </ul>
                    </li>
                  <li className="dropdown">
                    <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <img src="https://avatars0.githubusercontent.com/u/6593400?s=460&v=4" className="img-box-small" />
                      &nbsp;<span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="">Your profile</a></li>
                      <li><a href="">Your stars</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="">Help</a></li>
                      <li><a href="">Sign out</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
  }

}
