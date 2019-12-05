import actionTypes from '../actions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.changeFilter:
      return action.category;
    default:
      return state;
  }
};
