# React Fast Mount

> [Demo website](https://react-fast-mount.rafgraph.dev) (demo code on the [`gh-pages` branch](https://github.com/rafgraph/react-fast-mount/tree/gh-pages))

Fast mount slow loading components for improved responsiveness and perceived performance. This allows a site to respond instantly to user input, even if it is to show a blank screen while the component is loading, so the site is perceived as fast and responsive.

The difference is most noticeable on mobile devices, especially slower devices.

### Usage

React Fast Mount is a high order component (HOC) - just wrap your component in the
Fast Mount function before export, e.g. `export default fastMount(MyComponent);`.

```shell
$ yarn add react-fast-mount
# OR
$ npm install --save react-fast-mount
```

```js
import React from 'react';
import fastMount from 'react-fast-mount';

class MyComponent extends React.Component {
  ...
  render() {
    ...
  }
}

// wrap your component in fastMount to fast mount it
export default fastMount(MyComponent);

//  OR

// you can optionally provide a ReactElement as a second argument to use as a container
// for MyComponent - the container will be rendered on the first render (fast),
// and then MyComponent will be rendered inside of it on the second render
export default fastMount(MyComponent, <div style={{ height: '200px' }} />)
```
