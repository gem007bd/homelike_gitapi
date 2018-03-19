import React, { Component } from 'react';
import { request ,GraphQLClient } from 'graphql-request';
import { createApolloFetch } from 'apollo-fetch';

// import ReactDOM from 'react-dom';
import {Navbar} from './components/Navbar';
import {User} from './components/User';
import './App.css';

class App extends Component {
  state = {
    user: { }
  };
  gitUser = () => {
    const name = this.refs.name.value;
    fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data =>{
      this.setState({
        user:{
          name: data.name,
          location: data.location,
          avatar_url: data.avatar_url,
          bio: data.bio
        }
      })
    })
  };

  render() {
    const {user} = this.state;
    return (
      <div className="App">

        <Navbar />
        <div className="container">
          <div className="col-xs-12">
            <div className="input-group col-xs-4 pull-right">
                <input type="text" className="form-control" placeholder="Enter a user name"  ref="name" />
                <span className="btn btn-primary input-group-addon" onClick={this.gitUser}>Get user Detail</span>
            </div>
          </div>
            <div className="row">
              <User user={user}/>
                <div className="col-md-9 col-xs-12 col-sm-6 col-lg-9">
                    <div className="row">
                      <div className="col-xs-12">
                        <h3>Popular repositories </h3>
                        <div className="col-xs-6 repo-detail-box">
                            <a href="#" className="text-bold">
                              <span className="text-bold" >quote-suspended</span>
                            </a>
                             <p>browser tab suspender with nice quotes</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default App;
