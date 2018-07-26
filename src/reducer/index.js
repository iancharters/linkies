// Import modules ==============================================================
import {combineReducers} from 'redux';

// Import reducers =============================================================
import errors from 'reducer/errors';

const appReducer = combineReducers({
  errors,
});

export default function(state, action) {
  return appReducer(state, action);
}
