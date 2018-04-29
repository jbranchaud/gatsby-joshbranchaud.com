import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () =>
  <div>
    {/* Banner */}
    <section id="banner">
      <div className="inner">
        <h1>
          Latest Blog Post:{' '}
          <span>
            A free + fully responsive<br />
            site template by TEMPLATED
          </span>
        </h1>
        <ul className="actions">
          <li>
            <a href="#" className="button alt">
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
          I am a Chicago-based software developer at Hashrocket, a software
          consultancy that has me primarily building apps with React, Rails and
          PostgreSQL. I spend my free-time biking around the city, organizing
          with The People's Lobby for a better city and world, and playing board
          games. My other interests include coffee, cats, and cocktails.
        </p>
      </div>
    </section>
    {/* Two */}
    <section id="two">
      <div className="inner">
        <article>
          <div className="content">
            <header>
              <h3>Pellentesque adipis</h3>
            </header>
            <div className="image fit">
              <img src="images/pic01.jpg" alt />
            </div>
            <p>
              Cumsan mollis eros. Pellentesque a diam sit amet mi magna
              ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit
              amet lorem ipsum feugiat tempus.
            </p>
          </div>
        </article>
        <article className="alt">
          <div className="content">
            <header>
              <h3>Morbi interdum mol</h3>
            </header>
            <div className="image fit">
              <img src="images/pic02.jpg" alt />
            </div>
            <p>
              Cumsan mollis eros. Pellentesque a diam sit amet mi magna
              ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit
              amet lorem ipsum feugiat tempus.
            </p>
          </div>
        </article>
      </div>
    </section>
    {/* Three */}
    <section id="three">
      <div className="inner">
        <header>
          <h2>Projects</h2>
        </header>
      </div>
      <div className="inner">
        <article>
          <div className="content">
            <span className="icon fa-edit" />
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
            <span className="icon fa-react" />
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
            <span className="icon fa-react" />
            <header>
              <h3>react-logical</h3>
            </header>
            <p>
              A collection of components for reducing inline logic in your React
              apps.
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
    </section>
    {/* Footer */}
    <section id="footer">
      <div className="inner">
        <div className="footer-icons">
          <a href="https://twitter.com/jbrancha">
            <span className="icon fa-twitter" />
          </a>
          <a href="https://github.com/jbranchaud">
            <span className="icon fa-github" />
          </a>
          <a href="https://www.instagram.com/jbranchaud">
            <span className="icon fa-instagram" />
          </a>
        </div>
        <div className="copyright">
          © Untitled Design: <a href="https://templated.co/">TEMPLATED</a>.
          Images <a href="https://unsplash.com/">Unsplash</a>
        </div>
      </div>
    </section>
  </div>;

export default IndexPage;
