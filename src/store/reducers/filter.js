import actionTypes from '../actions/actionTypes';

const initialState = 'All';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.changeFilter:
      return action.category;
    default:
      return state;
  }
};
