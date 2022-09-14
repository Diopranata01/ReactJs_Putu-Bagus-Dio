/* import { Container } from 'react-bootstrap'; */
import AboutIsi from './AboutIsi';
import myImage from '../asset/img/logo-ALTA@2x.png'
import AboutIsi2 from './AboutIsi2';

function home() {
    return (
      <div className="App">
        <header>
        {/* <Container> */}
        <div className='container'>
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="alterra">
                <a href="index.html"><img className="logo-atas" src={myImage} alt='icon'/></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              {/* <div class="container"> */}
              <div className="row align-items-center navig">
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html">HOME</a></div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html" className="aktif">ABOUT</a></div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div> 
              </div>
              {/* </div> */}
            </div>    
          </div>
        </div>
        {/* </Container> */}
      </header>
      <AboutIsi/>
      <AboutIsi2/>
      </div>
    );
  }

export default home