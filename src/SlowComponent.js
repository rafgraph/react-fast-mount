import React from 'react';
import { Link } from 'react-router-dom';
import Interactive from 'react-interactive';

export default function SlowComponent() {
  const arr = new Array(40).fill(new Array(5).fill(null));

  return (
    <ul>
      {arr.map((val, i) => (
        <li key={i}>
          Line {i + 1}
          {val.map((val2, i2) => (
            <Interactive as={Link} to="/" key={i2}>Link {i2 + 1}</Interactive>
          ))}
        </li>
      ))}
    </ul>
  );
}
