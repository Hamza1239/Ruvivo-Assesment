import React from "react";
import feather from 'feather-icons';
import { Dropdown } from 'reactjs-dropdown-component';
import {
    LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Sidebar from "./components/Sidebar";

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            dropdownDummy: [
                {
                    id: 0,
                    title: 'Sales',
                    selected: false,
                    key: 'dropdownDummy'
                },
                {
                    id: 1,
                    title: 'Technical',
                    selected: false,
                    key: 'dropdownDummy'
                }
            ],
            data: [
                {
                    name: 'Page A',
                    value: 2400,
                },
                {
                    name: 'Page B',
                    value: 1398,
                },
                {
                    name: 'Page C',
                    value: 9800,
                },
                {
                    name: 'Page D',
                    value: 3908,
                },
                {
                    name: 'Page E',
                    value: 4800,
                },
                {
                    name: 'Page F',
                    value: 3800,
                },
                {
                    name: 'Page G',
                    value: 4300,
                },
            ]
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
            <div className="page-wrapper">
                <Sidebar />

                <main className="main-content">
                    <header className="px-0 mb-3">
                        <div className="row align-items-center w-100 mx-auto">
                            <div className="col-6">
                                <h1 className="header-title p-0 m-0 border-0">Dashboard</h1>
                            </div>
                            <div className="col-6 text-right">
                                <h1 className="header-title p-0 m-0 mr-3 border-0 d-none d-md-inline-block">Jerome Murphy</h1>
                                <button className="btn btn-dark has-icon">
                                    <i data-feather="log-out" className="mr-0 mr-md-3"></i>
                                    <span className="d-none d-md-inline-block">
                                        Logout
                                    </span>
                                </button>
                            </div>
                        </div>
                    </header>

                    <div className="container-fluid">
                        <div className="filters-wrapper mb-3">
                            <div className="row align-items-center">
                                <div className="col-md-1">
                                    <h4 className="mb-3 mb-md-0 filters-title">Filters</h4>
                                </div>
                                <div className="col-md-2">
                                    <Dropdown
                                        title="Last Month"
                                        list={this.state.dropdownDummy}
                                        resetThenSet={this.resetThenSet}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <Dropdown
                                        title="Last Month"
                                        list={this.state.dropdownDummy}
                                        resetThenSet={this.resetThenSet}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <Dropdown
                                        title="Last Month"
                                        list={this.state.dropdownDummy}
                                        resetThenSet={this.resetThenSet}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <Dropdown
                                        title="Last Month"
                                        list={this.state.dropdownDummy}
                                        resetThenSet={this.resetThenSet}
                                    />
                                </div>
                                <div className="col-md">
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                        <label className="custom-control-label" htmlFor="customSwitch1">Exclude Self Reviews</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="dashboard-card mb-3">
                                            <div className="dashboard-card-title">
                                                Internal Quality Score
                                            </div>
                                            <div className="dashboard-card-score">
                                                89%
                                            </div>
                                            <div className="dashboard-card-chart">
                                                <ResponsiveContainer width="100%" height={65}>
                                                    <LineChart data={this.state.data}>
                                                        <Line type="monotone" dataKey="value" stroke="#6F52ED" strokeWidth={2} dataKey="value" />
                                                        <Tooltip />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="dashboard-card mb-3">
                                            <div className="dashboard-card-title">
                                                MoM Score
                                            </div>
                                            <div className="dashboard-card-score">
                                                89%
                                            </div>
                                            <div className="dashboard-card-chart">
                                                <ResponsiveContainer width="100%" height={65}>
                                                    <LineChart data={this.state.data}>
                                                        <Line type="monotone" dataKey="value" stroke="#F25767" strokeWidth={2} dataKey="value" />
                                                        <Tooltip />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="dashboard-card mb-3 mb-md-0">
                                            <div className="dashboard-card-title">
                                                Internal Quality Score
                                            </div>
                                            <div className="dashboard-card-score">
                                                89%
                                            </div>
                                            <div className="dashboard-card-chart">
                                                <ResponsiveContainer width="100%" height={65}>
                                                    <LineChart data={this.state.data}>
                                                        <Line type="monotone" dataKey="value" stroke="#6F52ED" strokeWidth={2} dataKey="value" />
                                                        <Tooltip />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="dashboard-card mb-3 mb-md-0">
                                            <div className="dashboard-card-title">
                                                MoM Score
                                            </div>
                                            <div className="dashboard-card-score">
                                                89%
                                            </div>
                                            <div className="dashboard-card-chart">
                                                <ResponsiveContainer width="100%" height={65}>
                                                    <LineChart data={this.state.data}>
                                                        <Line type="monotone" dataKey="value" stroke="#F25767" strokeWidth={2} dataKey="value" />
                                                        <Tooltip />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="dashboard-card bigger-chart">
                                    <div className="dashboard-card-title">
                                        Internal Quality Score Over Time
                                    </div>
                                    <div className="dashboard-card-chart">
                                        <ResponsiveContainer width="100%" height={250}>
                                            <AreaChart data={this.state.data}>
                                                <defs>
                                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#6F52ED" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="#6F52ED" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <Area type="monotone" dataKey="value" stroke="#6F52ED" fill="url(#colorUv)" strokeWidth={2} dataKey="value" />
                                                <Tooltip />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-12">
                                <div className="dashboard-card ratings-card">
                                    <div className="dashboard-card-title has-padding">
                                        <h6 className="font-weight-bold mb-0">Ratings by Reviewers</h6>
                                    </div>

                                    <div className="header-row has-padding d-none d-md-block">
                                        <div className="row">
                                            <div className="col-md-3">
                                                Reviewer
                                            </div>
                                            <div className="col-md-2 text-center">
                                                Ratings
                                            </div>
                                            <div className="col-md-2 text-center">
                                                Comments
                                            </div>
                                            <div className="col-md-1 text-center">
                                                Tone
                                            </div>
                                            <div className="col-md-1 text-center">
                                                Service
                                            </div>
                                            <div className="col-md-1 text-center">
                                                Efficiency
                                            </div>
                                            <div className="col-md-1 text-center">
                                                Tone
                                            </div>
                                            <div className="col-md-1 text-center">
                                                Score
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        Array(3).fill().map((item, index) => (
                                            <div className="body-row has-padding" key={index}>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <p className="heading mt-3 text-left d-block d-md-none">Reviewer</p>
                                                        <div className="avatar-wrapper">
                                                            <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Photo" />
                                                        </div>
                                                        Agent Name
                                                    </div>
                                                    <div className="col-md-2 col-6 text-center">
                                                        <p className="heading mt-3 text-left d-block d-md-none">Ratings</p>
                                                        <div className="rating-score-card">
                                                            89%
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 col-6 text-center">
                                                        <p className="heading mt-3 text-left d-block d-md-none">Comments</p>
                                                        <div className="rating-score-card">
                                                            89%
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1 col-6 text-center">
                                                        <p className="heading mt-3 text-left d-block d-md-none">Tone</p>
                                                        <div className="rating-score-card is-green">
                                                            89%
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1 col-6 text-center">
                                                        <p className="heading mt-3 text-left d-block d-md-none">Service</p>
                                                        <div className="rating-score-card is-red">
                                                            89%
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1 col-6 text-center">
                                                        <p className="heading mt-3 text-left d-block d-md-none">Efficiency</p>
                                                        <div className="rating-score-card is-green">
                                                            89%
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1 col-6 text-center">
                                                        <p className="heading mt-3 text-left d-block d-md-none">Tone</p>
                                                        <div className="rating-score-card is-red">
                                                            89%
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1 text-center">
                                                        <p className="heading mt-3 text-left d-block d-md-none">Score</p>
                                                        <div className="rating-score-card is-green">
                                                            89%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-12">
                                <div className="dashboard-card ratings-card">
                                    <div className="dashboard-card-title has-padding">
                                        <h6 className="font-weight-bold mb-0">List of Calls</h6>
                                    </div>

                                    <div className="header-row has-padding d-none d-md-block">
                                        <div className="row">
                                            <div className="col-md-1">
                                                File Id
                                            </div>
                                            <div className="col-md-6">
                                                File Name
                                            </div>
                                            <div className="col-md-2">
                                                Has Processed
                                            </div>
                                            <div className="col-md-2">
                                                Created at
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        Array(3).fill().map((item, index) => (
                                            <div className="body-row has-padding" key={index}>
                                                <div className="row">
                                                    <div className="col-md-1 col-6">
                                                        <p className="heading mt-3 text-left d-block d-md-none">File ID</p>
                                                        200
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p className="heading mt-3 text-left d-block d-md-none">File Name</p>
                                                        <Link to="/post-call">
                                                            HomeImprovement 840532381 Current_Customer Current Customer
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-2 col-6">
                                                        <p className="heading mt-3 text-left d-block d-md-none">Has Processed</p>
                                                        Yes
                                                    </div>
                                                    <div className="col-md-2">
                                                        <p className="heading mt-3 text-left d-block d-md-none">Created at</p>
                                                        22/4/2020
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Dashboard;