import Carousel from "react-bootstrap/Carousel";
import "./Header.css";

import PIC1 from "../../Assets/Slides/pic1.jpg";
import PIC2 from "../../Assets/Slides/pic2.jpg";
import PIC3 from "../../Assets/Slides/pic3.jpg";

function Header() {
  return (
    <div className="header-container" id="home">
      <div className="heading">
        <h1 className="title">Lorem ipsum dolor sit amet.</h1>
        <div className="des">
          <font>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ipsum blanditiis, delectus totam eaque laudantium! Quasi labore iste
            tempore aut.
          </font>
        </div>
      </div>

      <div className="carousel-card">
        <Carousel className="Carousel">
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={PIC1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={PIC2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PIC3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Header;
