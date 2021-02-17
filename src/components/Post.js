import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  const {whenClickingUpVote, whenClickingDownVote} = props;
  return(
    <>
    <h3>{props.title}</h3>
    <p>{props.body} </p>
    <p>{props.votecount}</p>
    {/* <p>{props.timestamp}</p> */}
    <button onClick={() => whenClickingUpVote(props.id)}>Up-vote</button>
    <button onClick={() => whenClickingDownVote(props.id)}>Down-vote</button>
    </>
  )
}

Post.propTypes = {
  whenClickingUpVote: PropTypes.func,
  whenClickingDownVote: PropTypes.func,
  title: PropTypes.string, 
  body: PropTypes.string,
  votecount: PropTypes.number,
  // timestamp: PropTypes.figure out datestamp
}

export default Post;