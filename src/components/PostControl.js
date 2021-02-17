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

handleUpVoting = (id) => {
  const { dispatch } = this.props;
  const thisPost = this.props.masterPostList[id];
  const { votecount, title, body } = thisPost;

  const action = {
    type: "ADD_POST",
    id: id,
    votecount: votecount + 1,
    title,
    body
  }
  dispatch(action);
}

// handleBuyProduct = (id) => {
//   const newMasterProductList = this.state.masterProductList.map((product)=> ({
//     ...product, 
//       quantity: product.id === id ? product.quantity -1 : product.quantity 
//   }))
//   this.setState({
//     masterProductList: newMasterProductList,
//     selectedProduct: null
//   });
// }


// handleBuyBeer = () => {
//   const newKeg = this.state.selectedKeg;
//   const adjustedKeg = { ...newKeg, beer: newKeg.beer -1 }
//   const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(adjustedKeg);
//   this.setState({
//     masterKegList: editedMasterKegList,
//     selectedKeg: adjustedKeg
//   });



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


