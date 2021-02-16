export default (state = {}, action) => {
  const {title, body, votecount, timestamp, id } = action;
  switch(action.type){
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          title,
          body,
          votecount,
          timestamp,
          id
        }
      });
      default:
        return state;
    }
  
};