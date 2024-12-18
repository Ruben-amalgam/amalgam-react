import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import '../../styles/careers.css'
import './accordionfaq.css'
import Leaf from '../images/Leaf.png'

const jobData = [
    {
        title: 'Sales & Marketing Intern (Remote)',
        description: 'Amalgam is seeking a qualified intern to support its marketing and sales efforts. Our selected candidate will have the opportunity to gain real time technical sales and marketing experience in an already well established, lean company while simultaneously learning the fundamentals of cloud-based services such as AWS. This experience will take many forms such as learning how to build marketing and sales materials, managing/help building a sales pipeline, and participating in new prospect and client meetings.',
        hours: "Full-time",
        pay: "$60,000-$100,000",
        duties:['Shadow CEO, Sales Engineer, and supporting teams to gain insight into all aspects of the software development business.', 'Shadow and assist team members with customer presentations, quotations, sales calls, and other customer interactions.', 'Build and manage go-to-market sales materials such as case studies of previous work, amalgam\'s website, and Amalgam\'s blog.', 'Currently working on completion of a Bachelor\'s degree in marketing, finance, economics, computer science, psychology or other business related majors.', '15 flexible hours per week.', 'Ability to meet team members via video conferencing for occasional meetings 8a-7pm EST.']
    }, {
        title: 'Java Full Stack Developer (Remote)',
        description: 'Amalgam is looking for a full stack developer. One who\'s expertise lies in various technologies including Javascript and Java.',
        hours: "Full-time",
        pay: "$80,000-$120,000",
        duties:['You will be expected to have worked in creating RESTful Services, SOA Architecture implementation and building of micro services based solutions', 'You should have had experience on a js front end framework - jQuery, angular, react, view.js preferred', 'Experience in software development life cycle using various methodologies like agile and test-driven development', 'Ability to document software requirements specifications including functional, data and performance requirements, a major plus', 'Fundamentals of how software gets deployed in various environments - AWS, Kubernetes, Docker and Virtual machines will be preferred', 'Ability to effectively communicate and work well in a team will given preference.']
    }, {
        title: 'Senior UX/UI Designer (Remote)',
        description:  'Amalgam is looking for a UX/UI designer who will be responsible for creating elegant websites and software solutions for our clients.',
        hours: "Full-time",
        pay: "$80,000-$120,000",
        duties:['You will be conceptualizing and implementing creative ideas for client websites, as well as creating visual elements that are in line with our clients\' branding.', 'You will be working closely with our development team to ensure a smooth implementation. T o be successful in this role, you will need to have excellent visual design skills and be proficient in one or more of the graphic design tools such as Canva, Figma, Adobe Photoshop and Adobe Illustrator.', 'You will assist in testing and improving the design of the solutions developed. You will lead in establishing design guidelines, standards, and best practices. Maintaining the appearance of websites by enforcing content standards. Designing visual imagery for websites and ensuring that they are in line with branding for clients.', 'Working with different content management systems. Communicating design ideas using user flows, process flows, site maps, and wireframes. Incorporating functionalities and features into websites. Designing sample pages including colors and fonts. Preparing design plans and presenting the website structure.', 'Proficiency in front-end development web programming languages such as HTML and CSS, jQuery, and JavaScript a plus. Good understanding of content management systems. Good understanding of search engine optimization principles. Proficient understanding of cross-browser compatibility issues. Excellent visual design skills. Up-to-date experience with international web protocols, standards, and technologies.', 'Creative and open to new ideas, adaptable and willing to learn new techniques and with excellent communication skills.']
    }
];

function AccordionCareers() {
    return (
        <Accordion defaultActiveKey="0" flush style={{ width: "100%", position: 'relative' }}>
            <img src={Leaf} alt="Leaf" className='leaf' />
            <Accordion.Item eventKey="0">
                <Accordion.Header>Marketing</Accordion.Header>
                <Accordion.Body>
                    <div className='accordion-content'>
                        <h2>{jobData[0].title}</h2>
                        <p>{jobData[0].description}</p>
                         <Link to="/jobpost" state={jobData[0]}>
                            View Details
                        </Link>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Tech</Accordion.Header>
                <Accordion.Body>
                    <div className='accordion-content'>
                        <h2>{jobData[1].title}</h2>
                        <p>{jobData[1].description}</p>
                        <Link to="/jobpost" state={jobData[1]} >
                            View Details
                        </Link>
                    </div>
                    <div className='accordion-content'>
                        <h2>{jobData[2].title}</h2>
                        <p>{jobData[2].description}</p>
                        <Link to="/jobpost" state={jobData[2]}>
                            View Details
                        </Link>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionCareers;

const styles = {
    header: {
        color: "#000",
        fontSize: "32px", // Correct font size
        fontFamily: "Roboto, sans-serif",
        fontWeight: 700,
        lineHeight: "130%",
    },
    drawerContent: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch"
    }
};
