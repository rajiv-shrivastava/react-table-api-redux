import React,{Component} from "react";


export default class UserForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData: {
                name: "",
                age: "",
                department: "",
                jobTitle: "",
                location: '',
                guest: ''
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
            this.props.submitUsers(this.state.userData).then(() => {
                alert('data submitted successfully')
            }).catch((e) => {
                alert('Some error occured')
            }) 
        }
        else {
            alert('data invalid please fill all the entries')
        }        
    }  

    render(){
        let d = true
        return(
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="name" className="control-label col-sm-2">Name:</label>
                        <div className="col-sm-10"> 
                        <input type="text" onChange={this.handleInputChange}
                          className="form-control" placeholder="Enter Name" name="name" required='true'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="age">Age:</label>
                        <div className="col-sm-10">
                        <input type="number" onChange={this.handleInputChange} 
                         className="form-control" id="email" 
                        placeholder="Enter Age" name="age" required/>
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="control-label col-sm-2">Department:</label>
                        <div className="col-sm-10"> 
                        <input type="text" onChange={this.handleInputChange}
                          className="form-control" placeholder="Enter department" name="department" required='true'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="control-label col-sm-2">JobTitle:</label>
                        <div className="col-sm-10"> 
                        <input type="text" onChange={this.handleInputChange}
                          className="form-control" placeholder="Enter jobTitle" name="jobTitle" required='true'/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name" className="control-label col-sm-2">Location:</label>
                        <div className="col-sm-10"> 
                        <input type="text" onChange={this.handleInputChange}
                          className="form-control" placeholder="Enter location" name="location" required='true'/>
                        </div>
                    </div>

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
