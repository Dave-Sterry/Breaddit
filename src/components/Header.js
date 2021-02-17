import React from 'react';
// import {Container, Row, Col} from 'react-bootstrap';
import Breaddit_logo from './img/Breaddit_logo.JPG';
function Header(){
  const imgStyles = {
    height: '150px',
    width: 'auto'
  }
  const headerStyles = {
    verticalAlign: 'top',
    fontSize: 'xxx-large',
    color: '#31404f'
  }
  return(
    <>
        <h1><img style={imgStyles} src={Breaddit_logo}></img><span style={headerStyles}>readdit</span></h1>
    </>
  )
}

export default Header;