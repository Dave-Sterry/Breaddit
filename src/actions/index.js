import * as c from './ActionTypes';

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addPost = (post) => {
  const { title, body, votecount, id } = post;
  return {
    type: c.ADD_POST,
    title,
    body,
    votecount,
    id
  }
}