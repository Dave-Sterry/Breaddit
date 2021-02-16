import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostControl extends React.Component {
 


//methods
handleNewFormClick =() => {
  const { dispatch } = this.props
  const action = {
    type: 'TOGGLE_FORM'
  }
  dispatch(action);
}

handleAddingNewPostToList = (newPost) =>{
  const { dispatch } = this.props;
  const { id, title, body, votecount } = newPost;
  const action ={
    type: "ADD_POST",
    id: id,
    title: title,
    body: body,
    votecount: votecount
  }
  dispatch(action);
  const action2 ={
    type: 'TOGGLE_FORM'
  }
  dispatch(action2);
}

render(){
  let currentlyVisibleState = null;
  let buttonText = null;
  if(this.props.formVisibleOnPage) {
    currentlyVisibleState = <NewPostForm onNewPostCreation = {this.handleAddingNewPostToList} />;
    buttonText = "Return to List";
  } else {
    currentlyVisibleState = <PostList postList = {this.props.masterPostList} />;
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


