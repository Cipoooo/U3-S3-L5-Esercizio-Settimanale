import { Container, Row, Col} from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aside from './components/Aside';
import MusicRow from './components/MusicRow';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
<Container fluid>
  <Row>
    <Aside />
    <Col className="col-12 col-md-9 offset-md-3">
      <Row>
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex mt-5">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row className="row mt-5">
        <Col className="col-10">
          <MusicRow genre="rock" artistName="queen"></MusicRow>
          <MusicRow genre="pop"  artistName={"TaylorSwift"}></MusicRow>
          <MusicRow genre="rap"  artistName={"emninem"}></MusicRow>
        </Col>
      </Row>
    </Col>
    <Footer />
  </Row>
</Container>
    </>
  )
}

export default App
