import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  // const { post } = action
  switch(action.type){
  case c.SELECT_POST:
    return action.post;
  case c.DESELECT_POST:
    return null;
  default:
    return state;
  }
};