import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <ul className="actions">
      <li>
        <a
          href="#"
          className="button alt"
          onClick={e => {
            e.preventDefault();
            onClick();
          }}
        >
          {text}
        </a>
      </li>
    </ul>
  );
};

export default Button;
