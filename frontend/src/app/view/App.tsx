import './App.scss';
import { Row, Col } from 'react-bootstrap';
import { DirectoryContainer } from '../component/DirectoryContainer';

type AppProps = {};

export const App = (props: AppProps) => {

  return (
      <div className="main">
        <Row className="g-2">
          <Col>
            <DirectoryContainer label="source path" />
          </Col>
          <Col>
            <DirectoryContainer label="destination path" />
          </Col>
        </Row>
      </div>
  );
};