import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
    render() {
        const style = {
            color:"blue"
        }
        return (
            <Footer color="cyan" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <h5 className="title">SocketPrograming Project</h5>
                            <p>
                                14110088정건우 & 14110088정도영 <br />
                                (update : 2018/11/19)
                                <br/>
                                Click <a href="https://github.com/devGW/imageSearch" style={style}><b>here</b></a> to view the original source 
                           </p>
                        </Col>
                        <Col md="6">
                            <ul>

                                <li className="list-unstyled">
                                    <a href="#!">　</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">　</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">　</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">　</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://github.com/devGW">devGW</a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;