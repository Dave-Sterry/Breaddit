import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class PostControl extends React.Component {


//methods
handleNewFormClick =() => {
  const { dispatch } = this.props
  const action = a.toggleForm();
  dispatch(action);
}

handleAddingNewPostToList = (newPost) =>{
  const { dispatch } = this.props;
  const action = a.addPost(newPost);
  dispatch(action);
  const action2 = a.toggleForm();
  dispatch(action2);
}

handleUpVoting = (id) => {
  const { dispatch } = this.props;
  const thisPost = this.props.masterPostList[id];
  thisPost.votecount = thisPost.votecount + 1;
  const action = a.addPost(thisPost);
  dispatch(action);
}

render(){
  let currentlyVisibleState = null;
  let buttonText = null;
  if(this.props.formVisibleOnPage) {
    currentlyVisibleState = <NewPostForm onNewPostCreation = {this.handleAddingNewPostToList} />;
    buttonText = "Return to List";
  } else {
    currentlyVisibleState = <PostList postList = {this.props.masterPostList} onClickingUpVote = {this.handleUpVoting} />;
    buttonText="New Post";
  }
  return(
    <>
    {currentlyVisibleState}
    <button onClick={this.handleNewFormClick}>{buttonText}</button>
    </>
  );
  }
}


PostControl.propTypes ={
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;


