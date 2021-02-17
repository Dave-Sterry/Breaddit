import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {title, body, votecount, timestamp, id } = action;
  switch(action.type){
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          title,
          body,
          votecount,
          timestamp,
          id
        }
      });
    case c.DELETE_POST:
      let newState= {...state};
      delete newState[id];
      return newState;
      
    default:
      return state;
    }
  
};