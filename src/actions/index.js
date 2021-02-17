export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addPost = (post) => {
  const { title, body, votecount, id } = post;
  return {
    type: 'ADD_POST',
    title,
    body,
    votecount,
    id
  }
}