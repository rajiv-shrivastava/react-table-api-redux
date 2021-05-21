import './App.css';
import React from 'react';
import UserForm from './reusable/UserForm'
import { connect } from "react-redux";

import {fetchUsers,submitUsers} from './actions/userActions'

import {Link} from 'react-router-dom';

class App extends React.Component {
  
  componentDidMount(){
    this.props.fetchUsers()
  }	

  render(){
    return (
      <div>
         <h1 className="text-center"> Create New Employee </h1>
           <div className="text-right">
              <Link to="/employees"> 
              <button className="btn btn-sm btn-warning"> Employees List  </button> 
              </Link>
              </div>
           <UserForm submitUsers={this.props.submitUsers}/>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
	console.log("state.users",state.userReducer.users)
  return {
    users: state.userReducer.users || [],
  };
}

export default connect(
  mapStateToProps,
  { fetchUsers,submitUsers }
)(App);
