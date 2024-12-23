import { Accordion } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Amalgam from '../images/Amalgam-logo.png';
import HamburgerIcon from '../icons/HamburgerBlack.png'
import Dropdown from 'react-bootstrap/Dropdown';

function Example() {
    const navigate = useNavigate();

    return (
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header >
                    <img src={HamburgerIcon} alt="Amalgam" style={{height: "30px"}}/>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="nav-links-box" >
                        <Link to="/" className="navlink">Home</Link>
                        <Link to="/ourwork" className="navlink">Our Work</Link>
                        <Link to="/aboutus" className="navlink">About Us</Link>
                        <Link to="/blog" className="navlink">Blog</Link>
                        <Link to="/startups" className="navlink">Startups</Link>
                    </div>
                    <div className="nav-button-container">
                        <button className="careers-button" onClick={() => navigate('/careers')}>Careers</button>
                        <button className="contact-us-button" onClick={() => navigate('/contactus')}>Contact us</button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Example;
