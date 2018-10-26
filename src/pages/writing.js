import React from 'react';

import Layout from '../components/Layout';

const WritingPage = () => {
  return (
    <Layout>
      <div>
        <section id="one">
          <div className="inner">
            <header>
              <h2>Writing</h2>
            </header>
            <p>
              I write longer form on the{' '}
              <a href="https://hashrocket.com/blog">Hashrocket blog</a>, I
              microblog "Today I Learned" posts on GitHub, and I post a lot
              about software development and tech on twitter.
            </p>
            <ul>
              <li>
                <a href="https://hashrocket.com/blog/rocketeers/josh-branchaud">
                  My Hashrocket Blog Posts
                </a>
              </li>
              <li>
                <a href="https://github.com/jbranchaud/til">My TIL Posts</a>
              </li>
              <li>
                <a href="https://twitter.com/jbrancha">My Tweets</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WritingPage;
