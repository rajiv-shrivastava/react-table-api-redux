import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';


class My404Component extends Component {
    render(){
        return(
            <div>
                <h1> Page not Found</h1>
                 <Link to="/">  <button className="btn btn-primary">Home  </button> </Link>
                
                </div>
        )
  }
} 


export default withRouter(My404Component)
