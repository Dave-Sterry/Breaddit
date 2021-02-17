export default (state = null, action) => {
  // const { post } = action
  switch(action.type){
  case 'SELECT_POST':
    return action.post;
  case 'DESELECT_POST':
    return null;
  default:
    return state;
  }
};