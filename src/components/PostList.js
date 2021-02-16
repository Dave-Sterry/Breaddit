import React from 'react';
import PropTypes from "prop-types";
import Post from './Post';

function PostList(props){
  return(
    <>
    {Object.values(props.postList).Map((post)=>
    <Post
      title={post.title}
      body={post.body}
      votecount={post.votecount}
      // timestamp={post.timestamp}
      id={post.id}
      key={post.id}
      />
    )}
    </>
  )
}

PostList.propTypes = {
  postList: Proptypes.object,
};

export default PostList;