import React from 'react'
import '../styles/blog.css'
import Teamwork from '../assets/images/Teamwork.png'
import AvatarPlaceholder from '../assets/images/AvatarPlaceholder.png'
import AvatarPlaceholder2 from '../assets/images/Placeholder2.png'

function Blog() {
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
      </section>
    </div>
  )
}

export default Blog