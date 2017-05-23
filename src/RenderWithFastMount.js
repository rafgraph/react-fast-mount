import React from 'react';
import fastMount from 'react-fast-mount';
import ColorList from './ColorList';

function RenderWithFastMount() {
  return <ColorList />;
}

export default fastMount(RenderWithFastMount);

// export default fastMount(
//   RenderWithFastMount,
//   <div style={{ backgroundColor: '#F0F0F0', width: '100%', height: '100%' }} />,
// );
