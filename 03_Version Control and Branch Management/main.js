import NavigationBar from "./components/NavigationBar";
import AllLogo from "./components/AllLogo";
import NavIntro from "./components/Intro";
import {Container, Col, Row} from "react-bootstrap";
import NavIntroBody from "./components/Intro-body";

function App(){
  return (
    <div className="App">
      <div className="App-header">
      <NavigationBar />
        <div className="intro">
          <div className="intro-1">
          <Container>
            <Row className="Row-1">
              <Col>
                <AllLogo />
                <NavIntro/>
              </Col>
            </Row>
          </Container>
          </div>
        </div>
        <div className="intro-body">
          <NavIntroBody/>
        </div>
      </div>
    </div>
  );
}

export default App

//Ini update baru

