import React from 'react'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <div>
      {/* Banner */}
      <section id="banner">
        <div className="inner">
          <h1>
            Latest Blog Post:{' '}
            <span>Create Quick JSON Data Dumps From PostgreSQL</span>
          </h1>
          <ul className="actions">
            <li>
              <a
                href="https://hashrocket.com/blog/posts/create-quick-json-data-dumps-from-postgresql"
                className="button special"
              >
                Read It
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* One */}
      <section id="one">
        <div className="inner">
          <header>
            <h2>About Me</h2>
          </header>
          <p>
            I am a Chicago-based software developer at{' '}
            <a href="https://www.landscapehub.com/">LandscapeHub</a>, where I
            build technology that ultimately helps more trees get planted. I am
            also a software consultant (
            <a href="mailto:jbranchaud@gmail.com">
              so, let me know how I can help you with your product
            </a>
            ). I previous worked at{' '}
            <a href="https://hashrocket.com">Hashrocket</a>. I like working on
            products where I can have a big impact. I primarily build with
            React, Ruby on Rails and PostgreSQL. I spend my free-time biking
            around the city, organizing with{' '}
            <a href="http://www.thepeopleslobbyusa.org/">The People's Lobby</a>{' '}
            for a better city and world, and playing board games. My other
            interests include coffee, cats, and cocktails.
          </p>
        </div>
      </section>
      {/* Two */}
      <section id="two">
        <div className="inner">
          <article>
            <div className="content">
              <header>
                <h3>Frontend</h3>
              </header>
              {/*<div className="image fit">
              <img src="images/pic01.jpg" alt />
            </div>*/}
              <p>
                I build user-focused interfaces using{' '}
                <a href="https://reactjs.org/">React</a> and many tools from the
                its cutting edge ecosystem. I employ modern CSS to make these
                interfaces look good across devices.
              </p>
            </div>
          </article>
          <article className="alt">
            <div className="content">
              <header>
                <h3>Backend</h3>
              </header>
              {/*<div className="image fit">
              <img src="images/pic02.jpg" alt />
            </div>*/}
              <p>
                I primarily employ{' '}
                <a href="http://rubyonrails.org/">Ruby on Rails</a> and{' '}
                <a href="https://www.postgresql.org/">PostgreSQL</a> to quickly
                build out robust backend services that power these frontend user
                interfaces. I also reach for Elixir/Phoenix or Go when the need
                arises.
              </p>
            </div>
          </article>
        </div>
      </section>
      {/* Three */}
      <section id="three">
        <div className="inner">
          <header>
            <h2>Open Source Work</h2>
          </header>
        </div>
        <div className="inner">
          <article>
            <div className="content">
              <span className="icon far fa-keyboard" />
              <header>
                <h3>TIL</h3>
              </header>
              <p>
                A collection of concise write-ups on small things I learn day to
                day across a variety of languages and technologies.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/jbranchaud/til"
                    className="button alt"
                  >
                    Learn More
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <div className="content">
              <span className="icon fab fa-react" />
              <header>
                <h3>Reason of Life</h3>
              </header>
              <p>
                An implementation of Conway's Game of Life written with ReasonML
                and React.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/jbranchaud/reason-of-life"
                    className="button alt"
                  >
                    Learn More
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <div className="content">
              <span className="icon fab fa-react" />
              <header>
                <h3>react-logical</h3>
              </header>
              <p>
                A collection of components for reducing inline logic in your
                React apps.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/jbranchaud/react-logical"
                    className="button alt"
                  >
                    Learn More
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div className="inner">
          <h4>
            Check out my other open-source work on{' '}
            <a href="https://github.com/jbranchaud">GitHub</a>.
          </h4>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
