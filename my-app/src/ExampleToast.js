import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { useState } from "react";


const ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(true);
  
    return (
      <>
        <Jumbotron>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">Starting</strong>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
        </Jumbotron>
      </>
    );
  };
export default ExampleToast;