import React from 'react';
import Link from 'gatsby-link';

const ContactPage = () => {
  return (
    <div>
      <section id="one">
        <div className="inner">
          <header>
            <h2>Contact</h2>
          </header>
          <p>
            The best way to contact me is on{' '}
            <a href="https://twitter.com/jbrancha">twitter</a>, but you can also
            try email (<a href="mailto:jbranchaud@gmail.com">
              jbranchaud@gmail.com
            </a>).
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
