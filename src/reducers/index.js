import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import authUserReducer from './auth_user';
const rootReducer = combineReducers({
  form:form,
  auth:authUserReducer
});

export default rootReducer;
