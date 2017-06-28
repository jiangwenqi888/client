import React,{Component} from 'react';
import {reduxForm} from 'redux-form';

class Signin extends Component{
  handleFormSubmit({email,password}){
    console.log(email,password);
  }
  render(){
    const {handleSubmit,fields:{email,password}}=this.props;

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="form-group">
      <fieldset>
       <label>Email:</label>
       <input {...email} className="form-control"/>
       </fieldset>

       <fieldset>
        <label>Password:</label>
        <input {...password} className="form-control"/>
        </fieldset>

        <button className="btn btn-primary">Sign In</button>
      </form>

    )
  }
}

export default reduxForm({
  form:'signin',
  fields:['email','password']
})(Signin);
