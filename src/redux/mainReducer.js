import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn437177137Reducer from '../features/SignIn437177137/redux/reducers'
import SignIn438177136Reducer from '../features/SignIn438177136/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn437177137: SignIn437177137Reducer,
SignIn438177136: SignIn438177136Reducer,

});