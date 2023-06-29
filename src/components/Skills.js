import developer from "../assets/img/MERN.png";
import meter2 from "../assets/img/MERN.png";
import html from "../assets/img/html-5.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import auth from "../assets/img/auth.png";
import api from "../assets/img/browser.png";
import next from "../assets/img/next.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Welcome to the Skills section of my portfolio site! Here, you'll discover my diverse skill set, honed through years of experience and continuous learning. From front-end development to UX/UI design and back-end development, I bring a versatile range of skills that enable me to tackle challenges and deliver exceptional results.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={developer} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>MERN Developer</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={auth} alt="Image" />
                                <h5>OAuth</h5>
                            </div>
                            <div className="item">
                                <img src={next} alt="Image" />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                                <img src={api} alt="Image" />
                                <h5>REST APIs</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
