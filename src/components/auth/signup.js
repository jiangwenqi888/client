import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import {signupUser} from '../../actions';

class Signup extends Component{
  renderError(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger">
        <strong>Oops! </strong> {this.props.errorMessage}
        </div>
      )
    }
  }
   handleFormSubmit(formProps){
     this.props.signupUser(formProps);
   }

   renderField(field){
     const {error,touched}=field.meta;
     return(
       <div className="form-group">
          <label>{field.label}</label>
       <div>
       <input {...field.input} className="form-control"/>
         {touched&&error&&<div className="error">{error}</div>}
     </div>
   </div>
     )
   }

  render(){
      const {handleSubmit}=this.props;
    return(
     <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field name="email" type="text" component={this.renderField} label="Email:"/>
        <Field name="password" type="text" component={this.renderField} label="Password:"/>
        <Field name="passwordConfirm" type="text" component={this.renderField} label="Confirm Password:"/>
       {this.renderError()}
      <button action="submit" className="btn btn-primary">Sign Up!</button>
     </form>
    )
  }
}

function validate(formProps){
  const errors={};
 if(!formProps.email){
   errors.email='please enter an email';
 }
 if(!formProps.password){
   errors.password="please enter a password";
 }
 if(!formProps.passwordConfirm){
   errors.passwordConfirm="please enter a password confirmation";
 }

  if(formProps.password!=formProps.passwordConfirm){
    errors.password='passwords must match';
  }
  return errors;
}

function mapStateToProps(state){
  return {errorMessage:state.auth.error}
}

const signupform=reduxForm({form:'signup',validate})(Signup);
export default connect(mapStateToProps,{signupUser})(signupform);
