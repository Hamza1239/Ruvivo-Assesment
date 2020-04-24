import React from 'react';
// Don't remove lines from here
import { Dropdown } from 'reactjs-dropdown-component';
import 'react-tippy/dist/tippy.css'
import "./App.scss"
// to here. This is the order of loading CSS files
import Reports from './Reports';
import feather from 'feather-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostCall from './PostCall';
import Dashboard from './Dashboard';
import ChatWithRecommendations from './ChatWithRecommendations';
import AllRecommendations from './AllRecommendations';

class App extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/post-call">
            <PostCall />
          </Route>
          <Route path="/chat">
            <ChatWithRecommendations />
          </Route>
          <Route path="/live-call">
            <AllRecommendations />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;