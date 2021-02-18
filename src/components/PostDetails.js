import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props) {
  const { post } = props;


return (
  <React.Fragment>
    <h1>{post.title}</h1> 
    <h4>Votes: {post.votecount}</h4>
    <p>{post.body}</p>
    {/* <button ></button> */}
  </React.Fragment>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object
}

export default PostDetail;