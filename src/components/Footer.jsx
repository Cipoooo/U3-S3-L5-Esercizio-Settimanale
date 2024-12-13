import { Col, Container, Row } from "react-bootstrap";
import FooterPlayer from "./FooterPlayer";

const Footer = () =>{
    return(
      <>
       <Container className="container-fluid fixed-bottom bg-container pt-1">
      <Row className="row h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className="row h-100 flex-column justify-content-center align-items-center">
            <FooterPlayer></FooterPlayer>  
          </Row>
        </Col>
      </Row>
    </Container>
      </>
    );
};
export default Footer;