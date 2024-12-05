import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
import '../styles/ourwork.css'

function Ourwork() {
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

            <section className='ourwork-row-5'>
                <h2>Why us? Hear it from our clients</h2>
                <div className='ourwork-row-5-content-container'>
                    <div className='ourwork-row-5-content'>
                        <img src={Webflow} alt="Webflow" />
                        <h5>Partnering with Amalgam has helped us to streamline our team’s evaluative workflows and to pilot new technologies in ways that consistently help us to better understand the impact of our funding and to learn how to improve our grantmaking.</h5>
                        <div className='ourwork-row-5-content-header'>
                            <p>Steve Fitzmier</p>
                            <p>Director of Planning & Evaluation,<br /> John Templeton Foundation</p>
                        </div>
                    </div>
                    <div className='ourwork-row-5-content'>
                        <img src={Webflow} alt="Webflow" />
                        <h5>Partnering with Amalgam has helped us to streamline our team’s evaluative workflows and to pilot new technologies in ways that consistently help us to better understand the impact of our funding and to learn how to improve our grantmaking.</h5>
                        <div className='ourwork-row-5-content-header'>
                            <p>Mike Mooney</p>
                            <p>Chief Technology Officer, CleanItSupply</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ourwork-row-5'>
                <div className='ourwork-row-5-content-container'>
                    <div className='ourwork-row-5-content'>
                        <img src={Webflow} alt="Webflow" />
                        <h5>Amalgam has helped us build the virtual power plant that has
                            helped us raise over $100 millions to date. They've been our loyal allies since our early days, wisely guiding our efforts as we scaled. That's why they're our sole development partner..</h5>
                        <div className='ourwork-row-5-content-header'>
                            <p>Peter Mendonez</p>
                            <p>Co-Founder and President, PearlX Infrastructure</p>
                        </div>
                    </div>
                    <div className='ourwork-row-5-content'>
                        <img src={Webflow} alt="Webflow" />
                        <h5>ASK NEERAJ TO BE PUT IN TOUCH GET QUOTE GET QUOTE GET QUOTE</h5>
                        <div className='ourwork-row-5-content-header'>
                            <p>Zach Peterson</p>
                            <p>Chief Operating Officer, Premier Financial Alliance</p>
                        </div>

                    </div>
                </div>
                <img src={Circles} alt="circles" className='ourwork-row-5-circles' />
            </section>

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
                    <button>I'm a startup</button>
                </div>

            </section>

            <section className='ourwork-row-8'>
                <div>
                    <h1>How we've helped other businesses</h1>
                    <p>Our case studies will give you clear insights into how we've been able to help companies like yours in the past.</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
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
                <div className='ourwork-row-10-header'>
                    <h1>What we can help you with</h1>
                    <p>We've helped businesses evolve for over a decade. We can predict your challenges, expedite your results, and help you seize growth opportunities.</p>
                </div>
                <div className='ourwork-row-10-content'>
                    <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Business & strategy consulting</h3>
                    </div>
                    <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Operational optimization</h3>
                    </div>
                    <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Marketing & branding support</h3>
                    </div>

                </div>
                <div className='ourwork-row-10-content2'>
                    <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Customer experience & UX/UI</h3>
                    </div>
                    <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Web & mobile app development</h3>
                    </div>
                    <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Artificial Intelligence & machine learning</h3>
                    </div>
                    <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Data management</h3>
                    </div>
                </div>
                <div className='ourwork-row-10-content3'>
                    <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Databases, integrations & tools</h3>
                    </div>
                    <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Cloud & management Services</h3>
                    </div>
                    <div>
                        <img src={Cube} alt="Cube" />
                        <h3>Web3 & Blockchain</h3>
                    </div>
                </div>
                <div>

                </div>
                <p>Our knowledge of modern software building frameworks, AI, ML, and generative AI tools, allows us to solve your most complex tech problems with ease. The possibilities are endless.</p>

            </section>

        </div>
    )
}

export default Ourwork 