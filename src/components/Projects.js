import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/tripsnap1.png";
import projImg2 from "../assets/img/tripsnap2.png";
import projImg3 from "../assets/img/todo.png";
import projImg4 from "../assets/img/blog.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Trip Advisor",
      description: "Developed a travel advisor app using React, Geolocation, Google Maps API, and Google Places API. Utilized geolocation to fetch data based on user location, filtered it with Google Places API, and provided personalized recommendations. Created a user-friendly interface for an enhanced user experience.",
      imgUrl: projImg1,
    },
    {
      title: "TripSnap",
      description: "Created TripSnap, a responsive social media app using the MERN stack. Integrated pagination, comments, and authentication. Users could log in with email or Google, create posts with tags, photos, and descriptions. Implemented a like feature for interacting with posts, allowing users to comment and delete their own posts.",
      imgUrl: projImg2,
    },
    {
      title: "A ToDo list",
      description: "The Todo List project is built using HTML, CSS, JavaScript, EJS, Node.js, Express, and MongoDB. It includes a dynamic user interface, server-side development with Express, database integration with MongoDB, and the ability to perform CRUD operations on tasks while ensuring data persistence.",
      imgUrl: projImg3,
    },
    {
      title: "Blog site",
      description: "The Blog Site project is developed using HTML, CSS, JavaScript, EJS, Express, and MongoDB. It features a responsive user interface, server-side development with Express, integration of EJS for dynamic content rendering, and MongoDB for storing and retrieving blog articles, ensuring seamless data management and display.",
      imgUrl: projImg4,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to the Projects section of my portfolio! Explore a diverse range of captivating web and mobile projects, showcasing my skills and creativity. From intuitive designs to efficient code, each project reflects my passion for creating impactful digital experiences. Let's bring your ideas to life together!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}

                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
