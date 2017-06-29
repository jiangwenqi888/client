import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {signinUser} from '../../actions';
import {connect} from 'react-redux';

class Signin extends Component{
  handleFormSubmit({email,password}){
    this.props.signinUser({email,password});
  }
  renderError(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger">
             <strong>Oops! </strong>{this.props.errorMessage}
        </div>
      )
    }
  }
  render(){
    const {handleSubmit}=this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="form-group">
      <fieldset>
       <label>Email:</label>
       <Field  name="email" component="input" type="email" className="form-control"/>
       </fieldset>

       <fieldset>
        <label>Password:</label>
        <Field name="password" component="input" type="password" className="form-control"/>
        </fieldset>
        <br/>
        {this.renderError()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>

    )
  }
}

function mapStateToProps(state){
  return {errorMessage:state.auth.error}
}
const form=reduxForm({
  form:'signin'
})(Signin);
export default connect(mapStateToProps,{signinUser})(form);
