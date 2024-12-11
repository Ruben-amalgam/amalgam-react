import React, { useEffect } from 'react'
import '../styles/blog.css'
import '../styles/home.css'
import Teamwork from '../assets/images/Teamwork.png'
import AvatarPlaceholder from '../assets/images/AvatarPlaceholder.png'
import Amalgam from '../assets/images/Amalgam-logo.png'
import AvatarPlaceholder2 from '../assets/images/Placeholder2.png'
import Facebook from '../assets/images/Facebook.png'
import Instagram from '../assets/images/Instagram.png'
import X from '../assets/images/X.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import Youtube from '../assets/images/Youtube.png'
import { Link, useLocation } from 'react-router-dom'


function Blog() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [pathname]);
  return (
    <div>
      <div className='blog-layout'>
        <section className='blog-row-1'>
          <h1>Learn more about what drives your growth</h1>
          <p>Explore our content on entrepreneurship, business, technology, and funding.</p>

        </section>
        <section>
          <div className='blog-row-2'>
            <div className='blog-row-2-left'>
              <img src={Teamwork} alt="Teamwork" />
            </div>
            <div className='blog-row-2-right'>
              <div className='blog-row-2-right-top'>
                <article>Thought Leadership</article>
                <article>The Power of Entrepreneurial Mindset</article>
                <article>Discover how a strong entrepreneurial mindset can lead to success.</article>
              </div>
              <div>
                <div className='blog-row-2-right-bottom'>
                  <img src={AvatarPlaceholder} alt='Placeholder' />
                  <div className='blog-row-2-article-info'>
                    <article>10 min read</article>
                    <article>•</article>
                    <article >
                      John Doe
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='blog-row-3'>

          <div className='blog-row-3-content'>
            <hgroup>
              <button>View All</button>
              <button>Business</button>
              <button>Technology</button>
              <button>Entrepreneurship</button>
            </hgroup>
          </div>
          <div className='blog-row-3-articles'>
            <div className='blog-row-3-article-row'>
              <div className='blog-row-3-card'>
                <img src={AvatarPlaceholder2} alt="Placeholder" />
                <div className='blog-row-3-article-info'>
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
              <div className='blog-row-3-card'>
                <img src={AvatarPlaceholder2} alt="Placeholder" />
                <div className='blog-row-3-article-info'>
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
              <div className='blog-row-3-card'>
                <img src={AvatarPlaceholder2} alt="Placeholder" />
                <div className='blog-row-3-article-info'>
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
            <div className='blog-row-3-article-row'>
              <div className='blog-row-3-card'>
                <img src={AvatarPlaceholder2} alt="Placeholder" />
                <div className='blog-row-3-article-info'>
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
              <div className='blog-row-3-card'>
                <img src={AvatarPlaceholder2} alt="Placeholder" />
                <div className='blog-row-3-article-info'>
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
              <div className='blog-row-3-card'>
                <img src={AvatarPlaceholder2} alt="Placeholder" />
                <div className='blog-row-3-article-info'>
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
        </section >
      </div >

      <section className='blog-row-4'>
        <div className='blog-row-4-content'>
          <h1>Subscribe to our monthly newsletter</h1>
        </div>
        <div className="blog-row-4-content-right">
          <p>Stay updated with the latest insights and updates.</p>
          <form>
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit">Join Now</button>
          </form>
          <p>By joining, you agree to our Terms and Conditions.</p>
        </div>

      </section>
      <section>
        <div id='ourwork-row-13'>
          <div className='blog-row-13-content'>
            <div className='blog-row-13-content-left' id='ourwork-footer-left'>
              <img src={Amalgam} alt="Amalgam" className='logo' style={{ filter: "brightness(0) invert(0)" }} />
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

          <div className='blog-row-13-bottom'></div>
          <div className='ourwork-row-13-footer'>
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

export default Blog