import React, { useEffect } from 'react'
import '../styles/aboutus.css'
import AvatarPlaceholder from '../assets/images/Placeholder2.png'
import Neeraj from '../assets/images/Neeraj.png'
import Cube from '../assets/images/Cube.png'
import X from '../assets/images/XDark.png'
import LinkedIn from '../assets/images/LinkedInDark.png'
import Dribble from '../assets/images/Dribble.png'
import Team from '../assets/images/Team.png'
import Map from '../assets/images/Map.png'
import Divider from '../assets/images/Divider.png'
import Envelope from '../assets/icons/Envelope.png'
import Location from '../assets/icons/Location.png'
import Phone from '../assets/icons/Phone.png'
import Amalgam from '../assets/images/Amalgam-logo.png'

import Xlight from '../assets/images/X.png'
import LinkedInLight from '../assets/images/LinkedIn.png'
import Facebook from '../assets/images/Facebook.png'
import Instagram from '../assets/images/Instagram.png'
import Youtube from '../assets/images/Youtube.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Aboutus() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, [pathname]);

    const employees1 = [
        {
            img: AvatarPlaceholder,
            name: "Neeraj",
            title: "CEO",
            description: "Neeraj is Amalgam's founder. He digs into 25 years of experience in startups, Financial Services, and software development to mentor and guide our team of consultants. He's an avid reader, dabbles in writing, and loves to travel.",
            social: ""
        },
        {
            img: AvatarPlaceholder,
            name: "David",
            title: "Principal, BD & Partnerships",
            description: "David focuses on business development and engineering custom solutions. He has over 8 years of marketing, sales, and investing experience in the financial technology and media sectors. David loves cats and making comedy sketches.",
            social: ""
        },
        {
            img: AvatarPlaceholder,
            name: "Supamit (Jub)",
            title: "Lead Developer",
            description: "Over the last 20 years, Hub has found breakthrough technical solutions to business problems for a variety of major names in the retail, financial, and insurance industries. He's built himself a reputation as a stellar problem-solver, and a proficient full-stack developer. When he isn't programming, Jub listens to music and plays with his daughter.",
            social: ""
        },
        {
            img: AvatarPlaceholder,
            name: "Naren",
            title: "Enterprise Architect",
            description: "Naren is an accomplished leader with deep technical skills developing next-gen, cloud-compliant applications using open-source and emerging technologies. He has over 20 years of experience in successfully creating enterprise products within finance, retail, telecom, CPG, and pharma firms. In his free time, Naren loves to play badminton.",
            social: ""
        }
    ]

    const employees2 = [
        {
            img: AvatarPlaceholder,
            name: "Lisa",
            title: "Agile Practice Lead",
            description: "Lisa's experience includes quality assurance testing, development, project management, and scrum master roles utilizing Waterfall and Agile methodologies in the telecommunications, pharmaceutical, and insurance spaces. In her free time, she's an amateur photographer, nature lover, and fitness enthusiast.",
            social: ""
        },
        {
            img: AvatarPlaceholder,
            name: "Vikas",
            title: "Principal, BD & Partnerships",
            description: "Vikas specializes in the architecture and development of very large scale enterprise applications, data pipeline, and service integration platform. He has over 20 years of experience and has worked in Sun Microsystems, Software AG, OpenText and Oracle. Vikas loves to visit new places and explore.",
            social: ""
        },
        {
            img: AvatarPlaceholder,
            name: "Sumita",
            title: "Partner - Legal & HR",
            description: "Sumita’s business and legal acumen is essential to keeping daily operations running smoothly at Amalgam. She uses her law background to oversee agreements and define terms of work with our clients. She also loves creating a variety of dishes in the kitchen for her family, friends and colleagues.",
            social: ""
        },
        {
            img: AvatarPlaceholder,
            name: "Oleg",
            title: "Architect and DevOps Lead",
            description: "Oleg has been leading DevOps at Amalgam for the last 5 years. His focus had been on Docker, Kubernetes and AWS. He has more than 12 years of experience leading the development and deployment of large scale web & mobile applications. When he's off, Oleg loves spending time with his children and playing table tennis.",
            social: ""
        }
    ]

    return (
        <div >
            <section className='aboutus-row-1'>
                <div className='aboutus-row-1-content'>
                    <h1 className='aboutus-row-1-header' style={{ position: "absolute", top: 50,  left: "50%", transform: "translate(-50%, -50%)"}}>Get to know us</h1>
                    <h2>When I founded Amalgam, I wanted to build a business that reflected my ethos. We made one promise to our clients, and never broke it: to always put them first.</h2>
                    <div className='aboutus-row-1-info'>
                        <img src={AvatarPlaceholder} alt="placeholder" />
                        <h4>Neeraj Vir</h4>
                        <p>CEO, Amalgam</p>
                    </div>
                </div>
                <img src={Neeraj} className='Neeraj' alt="Neeraj" />
            </section>

            <section className='aboutus-row-2'>
                <div className='aboutus-row-2-left'>
                    <h2 className='aboutus-row-2-left-header'>What we believe in</h2>
                    <p className='aboutus-row-2-left-text'>At Amalgam, our commitment to innovation, efficiency, and partnership is rooted in these four core values:</p>
                    <button className='aboutus-row-2-left-button'>Learn more about us.</button>
                </div>
                <div className='aboutus-row-2-right'>
                    <div className='aboutus-row-2-right-top'>
                        <div className='aboutus-row-2-right-content'>
                            <img src={Cube} alt="cube" className='cube' />
                            <h2>Creativity</h2>
                            <p>We take pride in our ability to think outside the box, as it allows us to quickly identify the best path forward for our clients from a business and technological perspective.</p>
                        </div>
                        <div className='aboutus-row-2-right-content'>
                            <img src={Cube} alt="cube" className='cube' />
                            <h2>Integrity</h2>
                            <p>It informs our every move - from our way of working and the quality of our deliverables, to the clients we onboard. We love collaborating with inspired entrepreneurs who strive to find impactful solutions to world problems.</p>
                        </div>
                    </div>
                    <div className='aboutus-row-2-right-bottom'>
                        <div className='aboutus-row-2-right-content'>
                            <img src={Cube} alt="cube" className='cube' />
                            <h2>Transparency</h2>
                            <p>We're fueled by our enthusiasm and dedication, and our passion has been growing evermore since we began our journey 14 years ago. We see every challenge an opportunity for growth.</p>
                        </div>
                        <div className='aboutus-row-2-right-content'>
                            <img src={Cube} alt="cube" className='cube' />
                            <h2>Passion</h2>
                            <p>Our integrity translates into transparency in our practice. Our clear and honest communication helps us nurture a healthy, trusting relationship with our clients.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='aboutus-row-3'>
                <div className='aboutus-row-3-content'>
                    <p className='aboutus-row-3-content-header'>How we do it</p>
                    <p className='aboutus-row-3-content-text'>We leverage our highly specialized knowledge and deliver innovative solutions that address the needs of forward-thinking business owners.</p>
                    <p className='aboutus-row-3-content-text'>We support you as you build your products, scale your business, and grow your network with the right connections.</p>
                </div>
            </section>

            <section className='aboutus-row-4'>
                <div className='aboutus-row-4-top'>
                    <h2 className='aboutus-row-4-top-header'>The minds behind Amalgam</h2>
                    <p className='aboutus-row-4-top-text'>Our global team of diverse talents makes our clients' visions come to life. Learn more about who they are.</p>
                    <div className='aboutus-row-4-bottom'>
                        <div className='aboutus-row-4-employees'>
                            {employees1.map((employee) => {
                                return <div>
                                    <img src={AvatarPlaceholder} alt="" />
                                    <h2>{employee.name}</h2>
                                    <p>{employee.title}</p>
                                    <p>{employee.description}</p>
                                    <div className='aboutus-row-4-employees-social'>
                                        <img src={LinkedIn} alt="LinkedIn" />
                                        <img src={X} alt="X" />
                                        <img src={Dribble} alt="Dribble" />
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className='aboutus-row-4-employees'>
                            {employees2.map((employee) => {
                                return <div>
                                    <img src={AvatarPlaceholder} alt="" />
                                    <h2>{employee.name}</h2>
                                    <p>{employee.title}</p>
                                    <p>{employee.description}</p>
                                    <div className='aboutus-row-4-employees-social'>
                                        <img src={LinkedIn} alt="LinkedIn" />
                                        <img src={X} alt="X" />
                                        <img src={Dribble} alt="Dribble" />
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className='aboutus-row-5'>
                <h2>Our Team</h2>
                <img src={Team} alt='team' />
            </section>

            <section className='aboutus-row-6'>
                <div className='aboutus-row-6-headers'>
                    <p>We're everywhere!</p>
                    <h1>Our team is truly global:</h1>
                </div>
                <div className='aboutus-row-6-bottom'>
                    <div className='aboutus-row-6-bottom-details'>
                        <img src={Envelope} alt='Envelope' />
                        <img src={Phone} alt='Phone' />
                        <img src={Location} alt='Location' />
                    </div>
                    <img src={Map} alt='Map' />
                </div>
            </section>

            <section className='aboutus-timeline'>
                <div className='aboutus-row-7'>
                    <h1>Our story thus far</h1>
                    <p>Here are a few significant milestones we hit during the past decade.</p>
                </div>
                <div className='aboutus-row-8'>
                    <div className='aboutus-row-8-left'>
                        2010
                    </div>
                    <div className='aboutus-row-8-middle'>
                        <img src={Divider} style={{ height: "100%" }} alt='Divider' />
                    </div>

                    <div className='aboutus-row-8-right'>
                        <p>Amalgam was born. In the early days, we worked with financial institutions. We're proud to say, we rapidly grew our numbers to double digits.</p>
                        <img src={AvatarPlaceholder} alt='Placeholder' />
                    </div>
                </div>

                <div className='aboutus-row-8'>
                    <div className='aboutus-row-8-left'>
                        2012
                    </div>
                    <div className='aboutus-row-8-middle'>
                        <img src={Divider} style={{ height: "100%" }} alt='Divider' />
                    </div>

                    <div className='aboutus-row-8-right'>
                        <p>Amalgam was born. In the early days, we worked with financial institutions. We're proud to say, we rapidly grew our numbers to double digits.</p>
                        <img src={AvatarPlaceholder} alt='Placeholder' />
                    </div>
                </div>
                <div className='aboutus-row-8'>
                    <div className='aboutus-row-8-left'>
                        2015
                    </div>
                    <div className='aboutus-row-8-middle'>
                        <img src={Divider} style={{ height: "100%" }} alt='Divider' />
                    </div>

                    <div className='aboutus-row-8-right'>
                        <p>Amalgam was born. In the early days, we worked with financial institutions. We're proud to say, we rapidly grew our numbers to double digits.</p>
                        <img src={AvatarPlaceholder} alt='Divider' />
                    </div>
                </div>
                <div className='aboutus-row-8'>
                    <div className='aboutus-row-8-left'>
                        2019
                    </div>
                    <div className='aboutus-row-8-middle'>
                        <img src={Divider} style={{ height: "100%" }} alt='Divider' />
                    </div>

                    <div className='aboutus-row-8-right'>
                        <p>Amalgam was born. In the early days, we worked with financial institutions. We're proud to say, we rapidly grew our numbers to double digits.</p>
                        <img src={AvatarPlaceholder} alt='Placeholder' />
                    </div>
                </div>

            </section>

            <section className='aboutus-timeline-2'>
                <div className='aboutus-row-8'>
                    <div className='aboutus-row-8-left'>
                        2023
                    </div>
                    <div className='aboutus-row-8-middle'>
                        <img src={Divider} style={{ height: "100%" }} alt='Divider' />
                    </div>

                    <div className='aboutus-row-8-right'>
                        <p>Amalgam was born. In the early days, we worked with financial institutions. We're proud to say, we rapidly grew our numbers to double digits.</p>
                        <img src={AvatarPlaceholder} alt='Placeholder' />
                    </div>
                </div>

                <div className='aboutus-row-12' style={{ backgroundColor: "unset" }}>
                    <div className='home-row-12-content'>
                        <p className='home-row-12-header'>
                            Get in touch
                        </p>
                        <p className='home-row-12-text'>Reach out to us to gather more information or set our wheels in motion.</p>
                        <button className='home-lets-talk-bottom'>Let's talk</button>
                    </div>
                </div>

                <div className='aboutus-row-13-last'>
                    <div className='home-row-13-content'>
                        <div className='home-row-13-content-left'>
                            <img src={Amalgam} alt="Amalgam" className='logo' />
                        </div>
                        <div className='home-row-13-content-middle'>
                            <Link to="/ourwork" className='home-row-13-links'>Our Work</Link>
                            <Link to="/aboutus" className='home-row-13-links'>About Us</Link>
                            <Link to="/blog" className='home-row-13-links'>Blog</Link>
                            <Link to="/careers" className='home-row-13-links'>Careers</Link>
                            <Link to="/contactus" className='home-row-13-links'>Contact Us</Link>
                        </div>
                        <div className='home-row-13-content-right'>
                            <img src={Facebook} className='social-media' alt='Facebook' />
                            <img src={Instagram} className='social-media' alt='Instagram' />
                            <img src={Xlight} className='social-media' alt='X' />
                            <img src={LinkedInLight} className='social-media' alt='LinkedIn' />
                            <img src={Youtube} className='social-media' alt='Youtube' />
                        </div>
                    </div>

                    <div className='home-row-13-bottom' />
                    <div className='home-row-13-footer'>
                        <p className='home-row-13-footer-links'>© 2023 Relume. All rights reserved.</p>
                        <p className='home-row-13-footer-links'>Privacy Policy</p>
                        <p className='home-row-13-footer-links'>Terms and Conditions</p>
                        <p className='home-row-13-footer-links'>Cookie Policy</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Aboutus