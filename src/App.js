import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import RenderWithFastMount from './RenderWithFastMount';
import NormalRender from './NormalRender';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />;
      <Route
        exact
        path="/render-with-fast-mount"
        component={RenderWithFastMount}
      />
      <Route exact path="/normal-render" component={NormalRender} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
}
