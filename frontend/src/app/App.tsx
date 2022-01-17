import './App.scss';
import React from 'react';
import { Row, Col, FloatingLabel, Form } from 'react-bootstrap';

class App extends React.Component<any, any>{

  render(): JSX.Element {
    return (
      <div className="main">
        <Row className="g-2">
          <Col>
            <FloatingLabel controlId="floatingInputGrid" label="Source Location">
              <Form.Control type="text" placeholder="Enter source location" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingInputGrid" label="Destination Location">
              <Form.Control type="text" placeholder="Enter destination location" />
            </FloatingLabel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
