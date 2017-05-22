import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import RenderWithFastMount from './RenderWithFastMount';
import NormalRender from './NormalRender';

export default function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <div>Example App for React Fast Mount</div>
            <div>
              <Link to="/render-with-fast-mount">Render with fast mount</Link>
            </div>
            <div><Link to="/normal-render">Normal render</Link></div>
          </div>
        )}
      />;
      <Route
        exact
        path="/render-with-fast-mount"
        component={RenderWithFastMount}
      />
      <Route exact path="/normal-render" component={NormalRender} />
    </Switch>
  );
}
