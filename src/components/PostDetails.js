import React from 'react';
import PropTypes from 'prop-types';

function PopstDetail(props) {
  const { post } = props;
}

return (
  <React.Fragment>
    <h1>{post.title} {post.votecount}</h1> 
    <p>{post.body}</p>
    {/* <button ></button> */}
  </React.Fragment>

)

PostDetail.propTypes = {
  post = PropTypes.object
}