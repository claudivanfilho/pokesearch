import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BaseLayout} />
        <Route exact path="/generation/:id" component={BaseLayout} />
        <Route
          exact
          path="/generation/:id/pokemon/:name"
          component={BaseLayout}
        />
      </Switch>
    </Router>
  );
}

export default App;
