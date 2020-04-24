import React from 'react';
import feather from 'feather-icons';
import { Dropdown } from 'reactjs-dropdown-component';
import Moment from './components/Moment';
import ChatRecommendations from './components/ChatRecommendations';
import Chat from './components/Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class ChatWithRecommendations extends React.Component {
  constructor() {
    super();

    this.state = {
      department: [
        {
          id: 0,
          title: 'Sales',
          selected: false,
          key: 'department'
        },
        {
          id: 1,
          title: 'Technical',
          selected: false,
          key: 'department'
        },
        {
          id: 2,
          title: 'Admin',
          selected: false,
          key: 'department'
        }
      ],
      callType: [
        {
          id: 0,
          title: 'One',
          selected: false,
          key: 'callType'
        },
        {
          id: 1,
          title: 'Two',
          selected: false,
          key: 'callType'
        },
      ],
      callStatus: [
        {
          id: 0,
          title: 'One',
          selected: false,
          key: 'callType'
        },
        {
          id: 1,
          title: 'Two',
          selected: false,
          key: 'callType'
        },
      ],
      scorecard: [
        {
          id: 0,
          title: 'One Scorecard',
          selected: false,
          key: 'scorecard'
        },
        {
          id: 1,
          title: 'Two Scorecard',
          selected: false,
          key: 'scorecard'
        },
      ],
      highlight_threat:''
    }
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
      <div className="container-fluid p-0 chat-with-recommendations">
        <div className="row w-100 mx-auto">
          <div className="col-md-9 p-0">
            <header>
              <div className="row w-100 mx-auto">
                <div className="col-6 p-0">
                  <Link to="/" className="btn btn-dark has-icon">
                    <i data-feather="arrow-left"></i>
                    Back
                  </Link>

                  <h1 className="header-title mb-0">Jerome Murphy</h1>

                  <div className="call-duration-and-date position-absolute">
                    <span>4:14 mins</span>
                    <span>Sep 10, 2020</span>
                  </div>
                </div>
                <div className="col p-0 text-right">
                  <small className="text-white mr-3">Average Score</small>
                  <button className="btn btn-success pl-2 pr-2 mr-3">
                    8.4
                  </button>
                  <button className="btn btn-dark has-icon">
                    <i data-feather="copy"></i>
                    Copy Call ID
                  </button>
                  <button
                    className="btn btn-dark px-2 ml-3"
                  >
                    <i data-feather="chevron-left"></i>
                  </button>
                  <button
                    className="btn btn-dark px-2 ml-3"
                  >
                    <i data-feather="chevron-right"></i>
                  </button>
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="track-data-header">
              <div className="row">
                <div className="col-md-4 mt-3 mt-md-0">
                  <Dropdown
                    title="Select Department"
                    list={this.state.department}
                    resetThenSet={this.resetThenSet}
                  />
                </div>
                <div className="col-md-3 mt-3 mt-md-0">
                  <Dropdown
                    title="Select Call Type"
                    list={this.state.callType}
                    resetThenSet={this.resetThenSet}
                  />
                </div>
                <div className="col-md-3 mt-3 mt-md-0">
                  <Dropdown
                    title="Select Call Status"
                    list={this.state.callStatus}
                    resetThenSet={this.resetThenSet}
                  />
                </div>
                <div className="col-md-2 mt-3 mt-md-0">
                  <button className="btn btn-dark w-100">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="row w-100 mx-auto">
              <div className="col-md-3 px-0">
                <div className="moments-wrapper">
                  <div className="moments-header">
                    <div className="row align-items-center">
                      <div className="col-12">
                        Moments Found
                      </div>
                    </div>
                  </div>
                  <div className="moments-content">
                    <div className="allow-space">
                      <div className="moment-btn is-active">
                        Social Media Threat
                      </div>
                      <div className="moment-btn">
                        One
                      </div>
                    </div>
                    {
                      Array(15).fill().map((item, index) => (
                        <React.Fragment key={index}>
                          {index % 2 == 0?
                            <div className='allow-space'>
                              <div 
                                className="moment-btn"
                                onClick={e => this.setState({highlight_threat:'One More'})}
                              >
                                One More
                              </div>
                              <div 
                                className="moment-btn"
                                onClick={e => this.setState({highlight_threat:'Another Moment'})}
                              >
                                Another Moment
                              </div>
                            </div>
                            :
                            <div className="allow-space">
                              <div 
                                className="moment-btn"
                                onClick={e => this.setState({highlight_threat:'Another Moment'})}
                              >
                                Another Moment
                              </div>
                              <div 
                                className="moment-btn"
                                onClick={e => this.setState({highlight_threat:'One More'})}
                              >
                                One More
                              </div>
                            </div>
                          }
                        </React.Fragment>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="col-md p-0">
                <Chat
                  withRecommendations={true} highlightThreat={this.state.highlight_threat}
                />
              </div>
            </div>
          </div>

          {/* Evaluation Form */}
          <div className="col-md-3 p-0 text-right">
            <ChatRecommendations
              scorecard={this.state.scorecard}
              resetThenSet={this.resetThenSet}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ChatWithRecommendations;