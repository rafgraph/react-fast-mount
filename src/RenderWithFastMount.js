import React from 'react';
import fastMount from 'react-fast-mount';
import SlowComponent from './SlowComponent';

function RenderWithFastMount() {
  return <SlowComponent />;
}

export default fastMount(
  RenderWithFastMount,
  // <div style={{ backgroundColor: 'blue' }} />,
);
