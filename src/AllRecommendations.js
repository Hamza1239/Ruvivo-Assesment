import React from 'react';
import feather from 'feather-icons';
import Recommendations from './components/LiveCall';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class AllRecommendations extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    feather.replace();
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    });
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <div className="row w-100 mx-auto">
          <div className="col-md-8 p-0">
            {/* Rest Code of the page to be pasted here */}
          </div>
          {/* Live Call Recommendations */}
          <div className="col-md-4 p-0 text-right">
            <Recommendations
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AllRecommendations;