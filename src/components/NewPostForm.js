import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewPostForm(props) {

  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      body: event.target.body.value,
      votecount: 0,
      // timestamp:
      id: v4()
    });
  }

  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Post"/>
    </>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;