import { Button, Col, Container, Nav, NavItem, NavLink } from "react-bootstrap";
import {BiHome, BiBook} from 'react-icons/bi'
import myImage from '../../src/logo/logo.png'


const Aside = () => {

  return (
    <>
      <Col className="col col-2">
        <Nav
          className="navbar navbar-expand-md fixed-left justify-content-between"
          id="sidebar"
        >
          <Container className="container flex-column align-items-start">
            <NavLink className="navbar-brand" href="index.html">
              <NavItem as={"img"}
                src={myImage}
                alt="Spotify Logo"
                width="131"
                height="40"
              />
            </NavLink>
            <Button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse bg-black text-secondary" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul className="p-0"> {/*Non cambio le liste poiche le liste di react-bootstrap non sono granche secondo me*/}
                  <li>
                    <a
                      className="nav-item nav-link d-flex align-items-center"
                      href="#"
                    >
                      <BiHome className="fs-3 text-secondary"></BiHome>&nbsp; Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-item nav-link d-flex align-items-center"
                      href="#"
                    >
                      <BiBook className="fs-3 text-secondary" />&nbsp; Your Library
                    </a>
                  </li>
                  <li>
                    <div className="input-group mt-3">
                      <input
                        type="text"
                        className="rounded-2 form-control"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <div className="input-group-append ">
                        <Button className="btn outline-light bg-black text-secondary  btn-sm h-100">
                          GO
                        </Button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
          <div className="nav-btn">
            <Button className="btn signup-btn bg-white text-black rounded-pill " style={{borderColor:"black"}}>Sign Up</Button>
            <Button className="btn login-btn bg-black text-white  rounded-pill " style={{borderColor:"white"}}>Login</Button><br />
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </Nav>
      </Col>
    </>
  );
};
export default Aside;
