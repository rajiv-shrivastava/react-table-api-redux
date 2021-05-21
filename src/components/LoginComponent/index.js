import './style.css';
import React,{Component} from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData: {
                username: '',
                password: ''
            }
        }
    }

    handleInputChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let userData= this.state.userData
        userData[name] = value
        this.setState({userData})
    }

    submitForm = (e) => {
        e.preventDefault()
        let check = true;
        let userData = this.state.userData
        for (let key in userData) {
            if (userData[key] == null || userData[key] == "" || userData[key].lenngth == 0){
                check = false;
            }   
        }
        if(check){
            console.log(this.state,localStorage)

            if(this.state.userData.username == "test" && this.state.userData.password =="test"){
                
                localStorage.setItem('authed',true)
                console.log('logged in successfully') 
                this.props.history.push("/employees")
            }
            else {
                console.log('no')
            }


               
        }
        else {
            alert('data invalid please fill all the entries')
        }        
    }  

    render(){
        return(
            <div>
                <h1> Login to Employee List</h1>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="name" className="control-label col-sm-2">UserName:</label>
                        <div className="col-sm-10"> 
                        <input type="text" onChange={this.handleInputChange}
                          className="form-control" placeholder="Enter UserName" name="username" required='true'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="control-label col-sm-2">Password:</label>
                        <div className="col-sm-10"> 
                        <input type="password" onChange={this.handleInputChange}
                          className="form-control" placeholder="Enter Password" name="password" required='true'/>
                        </div>
                    </div>

                    <p> Username - test Password - test </p>
                    
                    
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary" 
                          onClick={(e) => this.submitForm(e)}>
                              Submit
                        </button>
                    </div>
                    </div>
            </form>
                </div>
        )
  }
} 


export default withRouter(LoginComponent)
