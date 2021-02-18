import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <> 
    <form onSubmit={props.formSubmissionHandler}>
      <input
        type='text'
        name='title'
        placeholder='Title of your post' />
      <textarea
      name='body'
      placeholder='Tell us about your bread' />
      <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes ={
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;