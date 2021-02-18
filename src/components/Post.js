import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  const {whenClickingUpVote, whenClickingDownVote, whenPostClicked} = props;
  return(
    <React.Fragment>
      <div onClick = {() => whenPostClicked(props.id)}>
        <h3>{props.title}</h3>
        <p>Votes: {props.votecount}</p>
        {/* <p>{props.timestamp}</p> */}
      </div>
      <button onClick={() => whenClickingUpVote(props.id)}>Up-vote</button>
      <button onClick={() => whenClickingDownVote(props.id)}>Down-vote</button>
    </React.Fragment>
  )
}

Post.propTypes = {
  whenPostClicked: PropTypes.func,
  whenClickingUpVote: PropTypes.func,
  whenClickingDownVote: PropTypes.func,
  title: PropTypes.string, 
  body: PropTypes.string,
  votecount: PropTypes.number,
  id: PropTypes.string
  // timestamp: PropTypes.figure out datestamp
}

export default Post;