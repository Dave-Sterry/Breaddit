export default (state = null, action) => {
  const { title, body, votecount, timestamp, id } = action
  switch(action.type){
    case 'SELECT_POST':
      return {
        title,
        body,
        votecount,
        timestamp,
        id
      }
  case 'DESELECT_POST':
    return null;
  default:
    return state;
}
};