import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';

const style = {
  normal: {
    color: 'black',
    border: '1px solid black',
  },
  hover: {
    color: 'rgb(0, 168, 0)',
    border: '1px solid rgb(0, 168, 0)',
  },
  active: 'hover',
  focusFromTab: {
    outline: '2px solid rgb(0, 168, 0)',
    outlineOffset: '1px',
  },
};

export default function Button(props) {
  return (
    <Interactive
      as={Link}
      to={props.to}
      style={{
        display: 'block',
        width: '285px',
        height: '40px',
        lineHeight: '38px',
        fontSize: '18px',
        textAlign: 'center',
        margin: '20px 0',
      }}
      {...style}
    >
      {props.children}
    </Interactive>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
