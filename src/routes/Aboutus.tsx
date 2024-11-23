import React from 'react'
import '../styles/aboutus.css'
import AvatarPlaceholder from '../assets/images/Placeholder2.png'
import Neeraj from '../assets/images/Neeraj.png'
import Cube from '../assets/images/Cube.png'
import X from '../assets/images/XDark.png'
import LinkedIn from '../assets/images/LinkedInDark.png'
import Dribble from '../assets/images/Dribble.png'
import Team from '../assets/images/Team.png'

function Aboutus() {

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
        <div>
            <section className='aboutus-row-1'>
                <div className='aboutus-row-1-content'>
                    <h2>When I founded Amalgam, I wanted to build a business that reflected my ethos. We made one promise to our clients, and never broke it: to always put them first.</h2>
                    <div className='aboutus-row-1-info'>
                        <img src={AvatarPlaceholder} alt="placeholder" />
                        <h4>Neeraj Vir</h4>
                        <p>CEO, Amalgam</p>
                    </div>
                    <img src={Neeraj} className='Neeraj' alt="Neeraj" />
                </div>
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
                <img src={Team} />
            </section>
        </div>
    )
}

export default Aboutus