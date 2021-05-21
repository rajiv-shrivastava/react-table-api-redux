import './style.css';
import React from 'react';
import UserForm from '../../reusable/UserForm'
import { connect } from "react-redux";
import {fetchUsers} from '../../actions/userActions'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class EmployeeFormComponent extends React.Component {
  
  componentDidMount(){
    this.props.fetchUsers()
    console.log('asasdsadasdas',this.props)
  }
  
  logout = () => {
    localStorage.removeItem('authed',true)
    this.props.history.push("/")
  }

  render(){
    return (
      <div>
         <h1 className="text-center"> Employee Form </h1>
           <div className="text-right">
              <Link to="/employees"> 
              <button className="btn btn-sm btn-warning"> Employees List  </button> 
              </Link>
              <button className="btn btn-sm btn-danger" onClick={this.logout}> Logout  </button>
              </div>
           <UserForm submitUsers={this.props.submitUsers} fromView={this.props.fromView}/>
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

EmployeeFormComponent =  connect(
  mapStateToProps,
  { fetchUsers }
)(EmployeeFormComponent);


export default withRouter(EmployeeFormComponent)
