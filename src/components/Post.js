import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return(
    <>
    <h3>{props.title}</h3>
    <p>{props.body} </p>
    <p>{props.timestamp}</p>
    <button onClick={}>Up-vote</button>
    <button onClick={}>Down-vote</button>
    </>
  )
}

Post.propTypes = {
  title: PropTypes.string, 
  body: PropTypes.string,
  votecount: PropTypes.number,
  // timestamp: PropTypes.figure out datestamp
}

export default Post;