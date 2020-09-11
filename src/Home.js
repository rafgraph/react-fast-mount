import React from 'react';
import Header from './Header';
import Button from './Button';

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: '#F0F0F0',
        minHeight: '100%',
        minWidth: '100%',
        fontFamily: 'system-ui, helvetica, sans-serif',
        fontWeight: '300',
        fontSize: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ width: '300px', marginBottom: '6vh' }}>
        <Header
          title="React Fast Mount"
          repo="https://github.com/rafgraph/react-fast-mount"
        />
        <Button to="/render-with-fast-mount">Render with Fast Mount</Button>
        <Button to="/normal-render">Normal Render</Button>
        <p style={{ lineHeight: '1.3' }}>
          The difference is most noticeable on mobile devices, especially slower devices.
        </p>
      </div>
    </div>
  );
}
