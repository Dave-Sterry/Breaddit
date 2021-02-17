import React from "react";
import PostControl from './PostControl';
import Header from './Header';
import { Jumbotron, Container } from 'react-bootstrap';

function App() {
  const jumboStyles = {
    textAlign: 'center',
    backgroundColor: 'white'
  }
  return (
    <React.Fragment>
      <Jumbotron style={jumboStyles}>
        <Header />
      </Jumbotron>
      <Container>
        <PostControl />
      </Container>  
    </React.Fragment>
  );
}

export default App;
