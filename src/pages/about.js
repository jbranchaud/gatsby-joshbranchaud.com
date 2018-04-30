import React from 'react';
import Link from 'gatsby-link';

const AboutPage = () => {
  return (
    <div>
      <section id="one">
        <div className="inner">
          <header>
            <h2>About Me</h2>
          </header>
          <p>
            I am a Chicago-based software developer at{' '}
            <a href="https://hashrocket.com">Hashrocket</a>, a software
            consultancy that has me primarily building apps with React, Rails
            and PostgreSQL. I spend my free-time biking around the city,
            organizing with{' '}
            <a href="http://www.thepeopleslobbyusa.org/">
              The People's Lobby
            </a>{' '}
            for a better city and world, and playing board games. My other
            interests include coffee, cats, and cocktails.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
