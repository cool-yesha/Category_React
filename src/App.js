import './App.css';
import CategoryDisplay from './DashBoard/CategoryDisplay';
import CategoryInsert from './DashBoard/CategoryInsert';
import CategoryUpdate from './DashBoard/CategoryUpdate';
import MyCategoryDisplay from './DashBoard/MyCategoryDisplay';
import MyCategoryInsert from './DashBoard/MyCategoryInsert';
import MyCategoryUpdate from './DashBoard/MyCategoryUpdate';
import MyCategoryImageDisplay from './DashBoard/MyCategoryImageDisplay';
import MyCategoryImageInsert from './DashBoard/MyCategoryImageInsert';
import MyCategoryImageUpdate from './DashBoard/MyCategoryImageUpdate';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={CategoryDisplay} />
          <Route exact path="/CategoryInsert" component={CategoryInsert} />
          <Route exact path="/CategoryUpdate/:id" component={CategoryUpdate} />
          <Route exact path="/MyCategoryDisplay" component={MyCategoryDisplay} />
          <Route exact path="/MyCategoryInsert" component={MyCategoryInsert} />
          <Route exact path="/MyCategoryUpdate/:id" component={MyCategoryUpdate} />
          <Route exact path="/MyCategoryImageDisplay" component={MyCategoryImageDisplay} />
          <Route exact path="/MyCategoryImageInsert" component={MyCategoryImageInsert} />
          <Route exact path="/MyCategoryImageUpdate/:id" component={MyCategoryImageUpdate} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;