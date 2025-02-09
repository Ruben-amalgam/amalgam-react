import { useEffect } from 'react'
import Cube from '../assets/images/Cube.png'
import Dots from '../assets/images/Dots.png'
import Easel from '../assets/images/Easel.png'
import Laptop from '../assets/images/Laptop.png'
import Webflow from '../assets/images/Webflow.png'
import Circles from '../assets/images/Circles3.png'
import Starfish from '../assets/images/Starfish.png'
import AvatarPlaceholder from '../assets/images/AvatarPlaceholder.png'
import AvatarPlaceholder2 from '../assets/images/Placeholder2.png'
import Bulb from '../assets/images/Bulb.png'
import Hands from '../assets/images/Hands.png'
import Amalgam from '../assets/images/Amalgam-logo.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import '../styles/ourwork.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import One from '../assets/images/One.png'
import Two from '../assets/images/Two.png'
import Three from '../assets/images/Three.png'
import Four from '../assets/images/Four.png'
import Five from '../assets/images/Five.png'
import Six from '../assets/images/Six.png'
function Ourwork() {
    const navigate = useNavigate();


    const { pathname } = useLocation();
    // useEffect(() => {
    //     window.scrollTo(0, 0); // Scroll to the top
    // }, [pathname]);
    return (
        <div style={{ position: "relative", overflowX: "hidden" }}>
            <img src={Starfish} alt="Starfish" className='ourwork-starfish' />
            <img src={Starfish} alt="Starfish" className='ourwork-starfish2' />
            <img src={Bulb} alt="Bulb" className='ourwork-bulb' />
            <div className='ourwork-row-1-background'>
                <div className='ourwork-row-1'>
                    <div className='ourwork-row-1-left'>
                        <img src={Laptop} className='laptop' alt='Placeholder' />
                    </div>
                    <div className='ourwork-row-1-right'>
                        <h1 className='ourwork-row-1-right-header'>Tailored solutions for every stage of your journey</h1>
                        <p className='ourwork-row-1-right-text'>We empower entrepreneurs to make a positive impact by growing their business, adopting cutting-edge technology, and building the right connections.</p>
                        <button className='ourwork-lets-talk'>Let's talk</button>
                    </div>
                </div>

                <img src={Dots} className='dots' alt='Placeholder' />
                <div className='ourwork-row-2'>

                    <div className='ourwork-row-2-container'>
                        <h1 className='ourwork-row-2-header'>How we do it</h1>
                        <p className='ourwork-row-2-text'>We leverage our highly specialized knowledge and deliver innovative solutions that address the needs of forward-thinking business owners.</p>
                        <p className='ourwork-row-2-text'>We support you as you build your products, scale your business, and grow your network with the right connections.</p>
                    </div>
                </div>
            </div>

            <div className='ourwork-row-3'>
                <div className='ourwork-row-3-container'>
                </div>
            </div>

            <div className='ourwork-row-4'>
                <div className='ourwork-row-4-container'>
                    <div className='ourwork-row-4-left'>
                        <p className='ourwork-row-3-header'>You'll benefit from:</p>
                        <div className='ourwork-row-4-subheader'>
                            <img src={Cube} alt="cube" className='cube' />
                            <p>Having a single point of reference for business and digitization support</p>
                        </div>
                        <div className='ourwork-row-4-subheader'>
                            <img src={Cube} alt="cube" className='cube' />
                            <p>Custom solutions that meet your unique needs</p>
                        </div>

                        <div className='ourwork-row-4-subheader'>
                            <img src={Cube} alt="cube" className='cube' />
                            <p>A wide network of visionary leaders, world-class consultants, and funders</p>
                        </div>
                    </div>

                    <div>
                        <img src={Easel} alt="" className='easel' />
                    </div>

                </div>
            </div>

            <section className='ourwork-row-6'>
                <h1>You can count on us for <br />your:</h1>
                <div className='ourwork-row-6-content-container'>
                    <div className='ourwork-row-6-content'>
                        <img src={Cube} alt="Cube" className='our-work-cubes' />
                        <h4>Business consulting</h4>
                        <p>Our experienced team of consultants is ready to guide you through every step of your business journey, from growth advice to rebranding and beyond.</p>
                    </div>
                    <div className='ourwork-row-6-content'>
                        <img src={Cube} alt="Cube" className='our-work-cubes' />
                        <h4>Bespoke tech solutions</h4>
                        <p>We empower you with a wide range of bespoke tech solutions with transparent value, from custom software development to generative AI.</p>
                    </div>
                    <div className='ourwork-row-6-content'>
                        <img src={Cube} alt="Cube" className='our-work-cubes' />
                        <h4>Entrepreneurial hub</h4>
                        <p>We're your bridge to top-tier consultants, forward-thinking business owners, funders, and investors.</p>
                    </div>
                </div>
            </section>
            <section className='ourwork-row-7'>
                <h1>We meet you where you are</h1>
                <div>
                    <p>From your business's conceptual phase to the realization of your most ambitious plans, our end-to-end solution gets you where you want to be. At what stage of your journey are you?</p>
                    <button onClick={() => navigate('/startups')}>I'm a startup</button>
                </div>

            </section>

            <section className='ourwork-row-8'>
                <div>
                    <h1>How we've helped other businesses</h1>
                    <p>Our case studies will give you clear insights into how we've been able to help companies like yours in the past.</p>
                </div>
            </section>

            <section>
                <div className='blog-row-3-article-row' id='ourwork-row-9'>
                    <div className='blog-row-3-card' id='ourwork-row-9-card'>
                        <img src={AvatarPlaceholder2} alt="Placeholder" />
                        <div id='ourwork-row-9-article-info'>
                            <div className='blog-row-3-article-info' >
                                <article>Business</article>
                                <article>How to Build a Successful Startup</article>
                                <article>Learn the key steps to launching and growing a successful startup.</article>
                            </div>

                            <div className='blog-row-2-right-bottom'>
                                <img src={AvatarPlaceholder} alt='Placeholder' />
                                <div className='blog-row-2-article-info'>
                                    <div className=''>
                                        <article >
                                            John Doe
                                        </article>
                                    </div>
                                    <article>10 min read</article>
                                    <article>•</article>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blog-row-3-card' id='ourwork-row-9-card'>
                        <img src={AvatarPlaceholder2} alt="Placeholder" />
                        <div id='ourwork-row-9-article-info'>
                            <div className='blog-row-3-article-info' >
                                <article>Business</article>
                                <article>How to Build a Successful Startup</article>
                                <article>Learn the key steps to launching and growing a successful startup.</article>
                            </div>

                            <div className='blog-row-2-right-bottom'>
                                <img src={AvatarPlaceholder} alt='Placeholder' />
                                <div className='blog-row-2-article-info'>
                                    <div className=''>
                                        <article >
                                            John Doe
                                        </article>
                                    </div>
                                    <article>10 min read</article>
                                    <article>•</article>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blog-row-3-card' id='ourwork-row-9-card'>
                        <img src={AvatarPlaceholder2} alt="Placeholder" />
                        <div id='ourwork-row-9-article-info'>
                            <div className='blog-row-3-article-info' >
                                <article>Business</article>
                                <article>How to Build a Successful Startup</article>
                                <article>Learn the key steps to launching and growing a successful startup.</article>
                            </div>

                            <div className='blog-row-2-right-bottom'>
                                <img src={AvatarPlaceholder} alt='Placeholder' />
                                <div className='blog-row-2-article-info'>
                                    <div className=''>
                                        <article >
                                            John Doe
                                        </article>
                                    </div>
                                    <article>10 min read</article>
                                    <article>•</article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <button id='ourwork-row-9-button'>See all</button>
                </div>
            </section>

            <section className='ourwork-row-10'>
                <img src={Dots} alt="Dots" className='ourwork-dots' />
                <img src={Hands} alt="Dots" className='ourwork-hands' />
                <div className='ourwork-row-10-header'>
                    <h1>What we can help you with</h1>
                    <p>We've helped businesses evolve for over a decade. We can predict your challenges, expedite your results, and help you seize growth opportunities.</p>
                </div>
                <div className='ourwork-row-10-content'>
                    <div>
                        <h3>Business & strategy consulting</h3>
                        <p>We'll be your strategic partners and help you manage your risk and performance</p>
                    </div>
                    <div>
                        <h3>Operational optimization</h3>
                        <p>We'll help you manage changes, reengineer your business processes, and transform your operations so they're as effective as can be.</p>
                    </div>
                    <div>
                        <h3>Marketing & branding support</h3>
                        <p>We'll support you with your branding and market positioning, optimizing the way you present yourself to your potential customers</p>
                    </div>

                </div>
                <p> Our knowledge of modern software building frameworks, AI, ML, and generative AI tools, allows us to solve your most complex tech problems with ease. The possibilities are endless.</p>
                <div className='ourwork-row-10-content2'>
                    <div>
                        <h3>Customer experience & UX/UI</h3>
                        <p>We'll refine your user experience and craft intuitive, visually appealing interfaces to enhance every interaction your customers have with your brand.</p>
                    </div>
                    <div>
                        <h3>Web & mobile app development</h3>
                        <p>We're excited to deliver solutions that are both functional and innovative, whether it's by building a sleek website or a robust mobile application.</p>
                    </div>
                    <div>
                        <h3>Artificial Intelligence & machine learning</h3>
                        <p>We'll help you unlock new insights and make your operations more efficient than ever by harnessing the power of AI and ML.</p>
                    </div>
                    {/* <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Data management</h3>
                    </div> */}
                </div>
                <p>You'll get much farther with the right connections. Here's how we can support you on this front:</p>
                <div className='ourwork-row-10-content3'>
                    <div>
                        <h3>Languages & scripts</h3>
                        <p>JAVA, GO and Scala Technologies | JavaScript frameworks (i.e. angular, react, node, rekit, view) | .NET framework and Akka framework | Content Management Systems with specialization in Magnolia and Wordpress</p>
                    </div>
                    <div>
                        <h3>Databases, integrations & tools</h3>
                        <p>JAVA, GO and Scala Technologies | JavaScript frameworks (i.e. angular, react, node, rekit, view) | .NET framework and Akka framework | Content Management Systems with specialization in Magnolia and Wordpress</p>
                    </div>
                    <div>
                        <h3>Cloud & management Services</h3>
                        <p>Corda R3, Hyperledger, Ethereum | AWS, Digital Ocean, GCP, Azure | Docker, Kubernetes | FIS Profile Banking Core and Channels, Bottomline Digital Banking</p>
                    </div>

                </div>
                <div className='ourwork-row-10-content4'>
                    <div>
                        <h3>Tech & advisory</h3>
                        <p>Our top consultants and tech advisors are ready to share the invaluable insights and guidance you need to make your moonshot a reality.</p>
                    </div>
                    <div>
                        <h3>Funding</h3>
                        <p>JAVA, GO and Scala Technologies | JavaScript frameworks (i.e. angular, react, node, rekit, view) | .NET framework and Akka framework | Content Management Systems with specialization in Magnolia and Wordpress</p>
                    </div>
                    <div>
                        <h3>Networking</h3>
                        <p>Grow your network and influence by engaging with forward-thinking business owners, industry leaders, and key partners. We're ready to introduce you to our trusted partners and peers.</p>
                    </div>

                </div>
                <p>Our knowledge of modern software building frameworks, AI, ML, and generative AI tools, allows us to solve your most complex tech problems with ease. The possibilities are endless.</p>
            </section>

            <section className='ourwork-row-11'>
                <h1>Our way of working</h1>
                <p>It's not about having many resources; it's about having the right ones.<br /> With our proven method, top-notch team, and cutting-edge technology, there's no challenge too big for us to tackle. <br />No two companies are the same. That's why we tailor our approach to your unique needs. Yet, our process, always involves this sequence of steps.</p>
            </section>
            <section className='ourwork-row-12'>
                <div className='ourwork-row-12-content-top'>
                    <div className='ourwork-row-12-content'>
                        <img src={One} alt="One" />
                        <h4>Assessment</h4>
                        <p>We dive deep into your case and take on your challenges and ambitions as our own.</p>
                    </div>
                    <div className='ourwork-row-12-content'>
                        <img src={Two} alt="One" />
                        <h4>Creative <br /> problem-solving</h4>
                        <p>Now, we put our minds together to craft with an ideal strategy that puts your goals within reach.</p>
                    </div>
                    <div className='ourwork-row-12-content'>
                        <img src={Three} alt="One" />
                        <h4>Collaborative & transparent build</h4>
                        <p>We leverage our wealth of experience to seamlessly execute against our vision while keeping you updated with every step.</p>
                    </div>
                </div>
            </section>
            <section className='ourwork-row-13'>
                <div className='ourwork-row-13-content-bottom'>
                    <div className='ourwork-row-13-content'>
                        <img src={Four} alt="One" />
                        <h4>Agile iteration and testing</h4>
                        <p>We second your evolving needs as we test, integrate, build, and learn with you.</p>
                    </div>
                    <div className='ourwork-row-13-content'>
                        <img src={Five} alt="One" />
                        <h4>Measuring success</h4>
                        <p>After our initial scope of work is completed, we work with you to measure our success against your goals.</p>
                    </div>
                    <div className='ourwork-row-13-content'>
                        <img src={Six} alt="One" />
                        <h4>Future growth</h4>
                        <p>We ideate with you on the future state of your business to further support your growth goals.</p>
                    </div>
                </div>
            </section>
            <section>
                <div id='ourwork-row-13'>
                    <div className='blog-row-13-content'>
                        <div className='blog-row-13-content-left' id='ourwork-footer-left'>
                            <img src={Amalgam} alt="Amalgam" id='careers-logo' style={{ filter: "brightness(0) invert(0)" }} />
                        </div>
                        <div className='blog-row-13-content-middle' id='ourwork-footer-middle'>
                            <Link to="/ourwork" className='blog-row-13-links'>Our Work</Link>
                            <Link to="/aboutus" className='blog-row-13-links'>About Us</Link>
                            <Link to="/blog" className='blog-row-13-links'>Blog</Link>
                            <Link to="/careers" className='blog-row-13-links'>Careers</Link>
                            <Link to="/contactus" className='blog-row-13-links'>Contact Us</Link>
                        </div>
                        <div className='blog-row-13-content-right' id='ourwork-footer-right' style={{ filter: "brightness(0) invert(0)" }}>
                            {/* <img src={Facebook} className='social-media' alt='Facebook' />
              <img src={Instagram} className='social-media' alt='Instagram' />
              <img src={X} className='social-media' alt='X' /> */}
                            <img src={LinkedIn} className='social-media' alt='LinkedIn' />
                            {/* <img src={Youtube} className='social-media' alt='Youtube' /> */}
                        </div>
                    </div>

                    <div className='blog-row-13-bottom'>
                        <div></div>
                    </div>
                    <div className='blog-row-13-footer' >
                        <p className='blog-row-13-footer-links'>© 2023 Relume. All rights reserved.</p>
                        <p className='blog-row-13-footer-links'>Privacy Policy</p>
                        <p className='blog-row-13-footer-links'>Terms and Conditions</p>
                        <p className='blog-row-13-footer-links'>Cookie Policy</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Ourwork 