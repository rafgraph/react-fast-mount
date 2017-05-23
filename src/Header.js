import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';
import linkStyle from './linkStyle';

export default function Header(props) {
  return (
    <div style={{ marginBottom: '23px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '2px' }}>{props.title}</h1>
      <Interactive
        as="a"
        href={props.repo}
        style={{ fontSize: '14px' }}
        {...linkStyle}
      >
        {props.repo}
      </Interactive>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};
