import { useEffect, useState } from 'react'
import SVGComponent from '../assets/components/SvgComponent'
import Amalgam from '../assets/images/Amalgam-logo.png'
import Bulb from '../assets/images/Bulb.png'
import Cloud from '../assets/images/Cloud.png'
import Dribble from '../assets/images/Dribble.png'
import LinkedIn from '../assets/images/LinkedInDark.png'
import Map from '../assets/images/Map.png'
import Neeraj from '../assets/images/Neeraj.png'
import AvatarPlaceholder from '../assets/images/Placeholder2.png'
import Team from '../assets/images/Team.png'
import David from '../assets/images/Team/David.png'
import Jub from '../assets/images/Team/Jub.png'
import Lisa from '../assets/images/Team/Lisa.png'
import Naren from '../assets/images/Team/Naren.png'
import Neeraj2 from '../assets/images/Team/Neeraj.png'
import Oleg from '../assets/images/Team/Oleg.png'
import Sumita from '../assets/images/Team/Sumita.png'
import Vikas from '../assets/images/Team/Vikas.png'
import LeftCurve from '../assets/images/timeline/CurvedLineLeft.png'
import RightCurve from '../assets/images/timeline/CurvedLineRight.png'
import LineAcross from '../assets/images/timeline/ShortLine.png'
import Star5 from '../assets/images/timeline/Black5Point.png'
import GreenCircle from '../assets/images/timeline/GreenCircle.png'
import Green11Point from '../assets/images/timeline/Green11Point.png'
import LightGreenCircle from '../assets/images/timeline/LightGreenCircle.png'
import X from '../assets/images/XDark.png'
import '../styles/aboutus.css'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import LinkedInLight from '../assets/images/LinkedIn.png'

function Aboutus() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, [pathname]);
    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowDimensions.width < 560;

    const employees1 = [
        {
            img: Neeraj2,
            name: "Neeraj",
            title: "CEO",
            description: "Neeraj is Amalgam's founder. He digs into 25 years of experience in startups, Financial Services, and software development to mentor and guide our team of consultants. He's an avid reader, dabbles in writing, and loves to travel.",
            social: ""
        },
        {
            img: David,
            name: "David",
            title: "Principal, BD & Partnerships",
            description: "David focuses on business development and engineering custom solutions. He has over 8 years of marketing, sales, and investing experience in the financial technology and media sectors. David loves cats and making comedy sketches.",
            social: ""
        },
        {
            img: Jub,
            name: "Supamit (Jub)",
            title: "Lead Developer",
            description: "Over the last 20 years, Hub has found breakthrough technical solutions to business problems for a variety of major names in the retail, financial, and insurance industries. He's built himself a reputation as a stellar problem-solver, and a proficient full-stack developer. When he isn't programming, Jub listens to music and plays with his daughter.",
            social: ""
        },
        {
            img: Naren,
            name: "Naren",
            title: "Enterprise Architect",
            description: "Naren is an accomplished leader with deep technical skills developing next-gen, cloud-compliant applications using open-source and emerging technologies. He has over 20 years of experience in successfully creating enterprise products within finance, retail, telecom, CPG, and pharma firms. In his free time, Naren loves to play badminton.",
            social: ""
        }
    ]

    const employees2 = [
        {
            img: Lisa,
            name: "Lisa",
            title: "Agile Practice Lead",
            description: "Lisa's experience includes quality assurance testing, development, project management, and scrum master roles utilizing Waterfall and Agile methodologies in the telecommunications, pharmaceutical, and insurance spaces. In her free time, she's an amateur photographer, nature lover, and fitness enthusiast.",
            social: ""
        },
        {
            img: Vikas,
            name: "Vikas",
            title: "Principal, BD & Partnerships",
            description: "Vikas specializes in the architecture and development of very large scale enterprise applications, data pipeline, and service integration platform. He has over 20 years of experience and has worked in Sun Microsystems, Software AG, OpenText and Oracle. Vikas loves to visit new places and explore.",
            social: ""
        },
        {
            img: Sumita,
            name: "Sumita",
            title: "Partner - Legal & HR",
            description: "Sumita’s business and legal acumen is essential to keeping daily operations running smoothly at Amalgam. She uses her law background to oversee agreements and define terms of work with our clients. She also loves creating a variety of dishes in the kitchen for her family, friends and colleagues.",
            social: ""
        },
        {
            img: Oleg,
            name: "Oleg",
            title: "Architect and DevOps Lead",
            description: "Oleg has been leading DevOps at Amalgam for the last 5 years. His focus had been on Docker, Kubernetes and AWS. He has more than 12 years of experience leading the development and deployment of large scale web & mobile applications. When he's off, Oleg loves spending time with his children and playing table tennis.",
            social: ""
        }
    ]

    return (
        <div >
            <h1 className='aboutus-row-1-header' >Get to know us</h1>
            <section className='aboutus-row-1'>
                <div className='aboutus-row-1-content'>
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
                <img src={Bulb} alt="Bulb" className='bulb' />
                <div className='aboutus-row-2-left'>
                    <h2 className='aboutus-row-2-left-header'>What we believe in</h2>
                    <p className='aboutus-row-2-left-text'>At Amalgam, our commitment to innovation, efficiency, and partnership is rooted in these four core values:</p>
                    <button className='aboutus-row-2-left-button'>Learn more about us.</button>
                </div>
                <div className='aboutus-row-2-right'>
                    <div className='aboutus-row-2-right-top'>
                        <div className='aboutus-row-2-right-content'>
                            <h2>Creativity</h2>
                            <p>We take pride in our ability to think outside the box, as it allows us to quickly identify the best path forward for our clients from a business and technological perspective.</p>
                        </div>
                        <div className='aboutus-row-2-right-content'>
                            <h2>Integrity</h2>
                            <p>It informs our every move - from our way of working and the quality of our deliverables, to the clients we onboard. We love collaborating with inspired entrepreneurs who strive to find impactful solutions to world problems.</p>
                        </div>
                    </div>
                    <div className='aboutus-row-2-right-bottom'>
                        <div className='aboutus-row-2-right-content'>
                            <h2>Transparency</h2>
                            <p>We're fueled by our enthusiasm and dedication, and our passion has been growing evermore since we began our journey 14 years ago. We see every challenge an opportunity for growth.</p>
                        </div>
                        <div className='aboutus-row-2-right-content'>
                            <h2>Passion</h2>
                            <p>Our integrity translates into transparency in our practice. Our clear and honest communication helps us nurture a healthy, trusting relationship with our clients.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='aboutus-row-3'>
                <img src={Cloud} className='cloud' alt='Placeholder' />
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
                                    <img src={employee.img} alt="" />
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
                                    <img src={employee.img} alt="" />
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

                    <button onClick={() => navigate("/careers")}>Join our team.</button>
                </div>
            </section >

            <section className='aboutus-row-5'>
                <h2>Our team in action</h2>
                <img src={Team} alt='team' />
            </section>

            <section className='aboutus-row-6'>
                <div className='aboutus-row-6-headers'>
                    <p>We're fully global</p>
                    <h1>Our team is truly global:</h1>
                </div>
                <div className='aboutus-row-6-bottom'>
                    <img src={Map} alt='Map' />
                </div>
            </section>

            <section className='aboutus-row-7'>
                <h2>Our story thus far</h2>
                <p>Here are a few significant milestones we hit during the past decade.</p>
                <div className='aboutus-timeline'>
                    <div className='aboutus-timeline-row-1'>
                        <p className='aboutus-timeline-p'>Amalgam was born. In the early days, we worked with financial institutions. We're proud to say, we rapidly grew our numbers to double digits.</p>
                        <img src={GreenCircle} alt="Green Circle" className='aboutus-green-circle' />
                    </div>
                    {/* <SVGComponent dimensions={windowDimensions} /> */}
                    <img src={Star5} alt="" className='aboutus-star-5' />
                    <img src={LineAcross} alt="" className='aboutus-line-across1' />
                    <div className='aboutus-timeline-row-2'>
                        <p className='aboutus-timeline-p'>We launched two products:
Transliter8, a software producing precise, standardized transliteration of personal or legal entities from or to English.
AML Analyzer, analyzing sanctions list data for sanction screening companies to ensure that it's accurate and up to date.</p>
                        <img src={LightGreenCircle} alt="Green Circle" className='aboutus-light-green-circle' />
                    </div>
                    <img src={LeftCurve} alt="" className='aboutus-curved-left1' />
                    <img src={LineAcross} alt="" className='aboutus-line-across2' />
                    <div className='aboutus-timeline-row-3'>
                        <p className='aboutus-timeline-p'>We sold Transliter8 to Meta (ex-Facebook) and helped Fortune 100 clients with their digital transformation.</p>
                        <img src={GreenCircle} alt="Green Circle" className='aboutus-green-circle' />
                    </div>


                    <img src={RightCurve} alt="" className='aboutus-curved-right1' />
                    <img src={LineAcross} alt="" className='aboutus-line-across3' />

                    <div className='aboutus-timeline-row-4'>
                        <p className='aboutus-timeline-p'>We invested in a Dublin-based company and grew fourfold!</p>
                        <img src={LightGreenCircle} alt="Green Circle" className='aboutus-green-circle' />
                    </div>
                    <img src={LeftCurve} alt="" className='aboutus-curved-left2' />
                    <img src={LineAcross} alt="" className='aboutus-line-across4' />

                    <div className='aboutus-timeline-row-5'>
                        <p className='aboutus-timeline-p'>We onboarded a number of clients in the retail and insurance spaces.</p>
                        <img src={GreenCircle} alt="Green Circle" className='aboutus-green-circle' />
                    </div>
                    <img src={RightCurve} alt="" className='aboutus-curved-right3' />
                    <img src={LineAcross} alt="" className='aboutus-line-across5' />
                    <img src={LeftCurve} alt="" className='aboutus-curved-left3' />
                    <img src={LineAcross} alt="" className='aboutus-line-across6' />
                    <img src={RightCurve} alt="" className='aboutus-curved-right4' />
                    <div className='aboutus-timeline-row-6'>
                        <p className='aboutus-timeline-p'>We refined our skills in generative AI techniques, became equity and development partners to a number of entrepreneurial ventures that gelled with our ethos, and grew more involved in the startup ecosystem.</p>
                        <img src={Green11Point} alt="Green Circle" className='aboutus-green11point-circle' />
                    </div>

                </div>

            </section>


            <section className='aboutus-timeline-2'>
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
                            <img src={Amalgam} alt="Amalgam" className='startups-amalgam-footer-logo' />
                        </div>
                        <div className='home-row-13-content-middle'>
                            <Link to="/ourwork" className='home-row-13-links'>Our Work</Link>
                            <Link to="/aboutus" className='home-row-13-links'>About Us</Link>
                            <Link to="/blog" className='home-row-13-links'>Blog</Link>
                            <Link to="/careers" className='home-row-13-links'>Careers</Link>
                            <Link to="/contactus" className='home-row-13-links'>Contact Us</Link>
                        </div>
                        <div className='home-row-13-content-right'>
                            {/* <img src={Facebook} className='social-media' alt='Facebook' />
                            <img src={Instagram} className='social-media' alt='Instagram' />
                            <img src={Xlight} className='social-media' alt='X' /> */}
                            <img src={LinkedInLight} className='social-media' alt='LinkedIn' />
                            {/* <img src={Youtube} className='social-media' alt='Youtube' /> */}
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

        </div >
    )
}

export default Aboutus