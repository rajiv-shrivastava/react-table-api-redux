import React,{Component} from "react";



export default class UserForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData: {
                addrress: "",
                age: "",
                dob: "",
                guest: "",
                locality: "",
                name: "",
                profession: ""
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
                    <label className="control-label col-sm-2" htmlFor="dob">Date of Birth:</label>
                    <div className="col-sm-10">
                        <input type="date" onChange={this.handleInputChange} className="form-control" id="dob" 
                        placeholder="Enter Date of Birth" name="dob" required/>
                    </div>
                    </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="profession">Profession:</label>
                    <div className="col-sm-10">
                        <select className="form-control" onChange={this.handleInputChange} 
                            id="profession" name="profession">
                            <option value="">Select</option>
                            <option value="employed">Employed</option>
                            <option value="student">Student</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="locality">Locality:</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={this.handleInputChange} 
                          className="form-control" id="locality" 
                        placeholder="Enter Locality" name="locality" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="guest">Guests:</label>
                    <div className="col-sm-10">
                        <input type="number" onChange={this.handleInputChange} 
                          className="form-control" id="guest" 
                           placeholder="Enter Number of Guests" name="guest" min="0" max="2" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="addrress">Address:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="addrress" 
                         onChange={this.handleInputChange} max="50"
                         placeholder="Enter Address" required/>
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
