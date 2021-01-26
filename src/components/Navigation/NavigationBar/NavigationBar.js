import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavigationItem from "../NavigationItem/NavigationItem";
import "./NavigationBar.css";
import Image from "react-bootstrap/Image";
import face from "../../../media/face.jpg";

export default function NavigationBar(props) {
  // const [scrollAmount, setScrollAmout] = useState(0);

  // window.onscroll = function (e) {
  //   //console.log(window.scrollY);
  //   setScrollAmout(window.scrollY);
  // };

  // let homeRef = useRef(null);
  // let aboutRef = useRef(null);
  // let skillsRef = useRef(null);
  //let projectsRef = useRef(null);

  // function findProjectRef() {
  //   if (projectsRef && projectsRef.current) {
  //     if (scrollAmount >= 1942) {
  //       projectsRef.current.style.color = "yellow";
  //     }
  //   }
  // }

  // function findSkillsRef() {
  //   if (skillsRef && skillsRef.current) {
  //     if (
  //       scrollAmount >= 1400 &&
  //       scrollAmount < 1942 &&
  //       skillsRef.current.classList[1]
  //     ) {
  //       skillsRef.current.style.color = "yellow";
  //     }
  //   }
  // }

  // function findAboutRef() {
  //   if (aboutRef && aboutRef.current) {
  //     if (scrollAmount >= 750 && scrollAmount < 1400) {
  //       aboutRef.current.style.color = "yellow";
  //     }
  //   }
  // }

  // function findHomeRef() {
  //   if (homeRef && homeRef.current) {
  //     if (scrollAmount >= 0 && scrollAmount < 750) {
  //       homeRef.current.style.color = "yellow";
  //     }
  //   }
  // }

  // useEffect(() => {
  //   console.log(scrollAmount);
  //   console.log({ skillsRef });
  //   findProjectRef();
  //   findSkillsRef();
  //   findAboutRef();
  //   findHomeRef();
  // });

  return (
    <Navbar className="Topbar" expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Navbar.Brand className="Topbar">
            <Image className="Face" src={face} alt="my face" roundedCircle />
          </Navbar.Brand>
          <NavigationItem className="Left" itemName="Mike" link="#Home" />
          <NavigationItem className="Left" itemName="Daniels" link="#Home" />
        </Nav>
        <Nav className="Navigation Center" expand="lg" defaultActiveKey="#Home">
          <NavigationItem itemName="Home" link="#Home" />

          <NavigationItem itemName="About" link="#About" />
          <NavigationItem itemName="Skills" link="#Skills" />

          <NavigationItem itemName="Projects" link="#Projects" />

          {/* <NavigationItem itemName="Contact" /> */}
        </Nav>
        <Nav className="Right">
          <Button variant="info" size="sm">
            Hire Me
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
