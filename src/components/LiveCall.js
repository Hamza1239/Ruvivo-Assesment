import React from "react";
import Scorecard from './Scorecard';
import { Dropdown } from 'reactjs-dropdown-component';
import {
    Link
} from "react-router-dom";
import feather from 'feather-icons';

class LiveCall extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    componentDidMount(){
        feather.replace()
    }

    render() {
        return (
            <div className="recommendation-wrapper">
                <sidebarheader className="recommendation-header">
                    <div className="row w-100 align-items-center justify-content-center mx-auto">
                        <div className="logo-division">
                            <Link to="/">
                                <img src="/logo-s.png" alt="Logo" />
                            </Link>
                        </div>
                        <div className="p-0 m-0 mx-auto">
                            <div className="row"> 
                                <h1 className="header-title border-0">Soprano</h1>
                                <p className="header-upper">AI</p>
                            </div>
                        </div>
                        <div className="p-0">
                            <button className="btn text-white px-2">
                                <i data-feather="maximize-2" className="m-0"></i>
                            </button>
                            <button className="btn text-white px-2">
                                <i data-feather="x" className="m-0"></i>
                            </button>
                        </div>
                    </div>
                </sidebarheader>

                <div className="row recommendation-btn-wrapper">
                    <button className="btn btn-dark recommendation-button m-2 px-3">
                        Talking Slow
                    </button>
                    <button className="btn btn-dark recommendation-button m-2 px-3">
                        Low Energy
                    </button>
                    <button className="btn btn-dark recommendation-button m-2 px-3">
                        Low Confidence
                    </button>
                </div>

                <div className="recommendation-form-content text-left">
                    <div className="row">
                        <div className="col-12">
                            <div className="card"> 
                                <div className="prime-header">
                                    Checklist
                                </div>
                                {
                                    Array(3).fill().map((item, index) => (
                                        <>
                                            <div className="checklist-white pointer">
                                                <div className="row"> 
                                                    <button className="col-1 btn text-primary">
                                                        <i data-feather="check" className=""></i>
                                                    </button>
                                                    <h1 className="col checklist-text"> 
                                                        So tell me what got you interested in our solution to start with?
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="checklist-light pointer">
                                                <div className="row"> 
                                                    <div className="col-1 btn text-grey">
                                                        <i data-feather="check" className=""></i>
                                                    </div>
                                                    <h1 className="col checklist-text text-decoration-none"> 
                                                        So tell me what got you interested in our solution to start with?
                                                    </h1>
                                                </div>
                                            </div>
                                        </>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card"> 
                                <div className="prime-header">
                                    Recommendations
                                </div>
                                <div 
                                className="prime-body pointer" 
                                onClick={e => this.setState({is_recommendations_on:true},()=> feather.replace())}
                                >
                                    Recommendations will appear as they are triggered.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card pointer"> 
                                <div className="prime-header m-0">
                                    Handy Documents
                                </div>
                                {
                                    Array(3).fill().map((item, index) => (
                                        <>
                                            <div className="prime-body-small">
                                                Company Values
                                            </div>
                                            <div className="prime-body-small-light">
                                                Price Chart
                                            </div>
                                        </>
                                    )
                                )}
                                <div className="prime-body-small-radius">
                                    Company Values
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="card pointer"> 
                                <div className="prime-header m-0">
                                    Previous Recommendations
                                </div>
                                {
                                    Array(3).fill().map((item, index) => (
                                        <>
                                            <div className="prime-body-small">
                                                Company Values
                                            </div>
                                            <div className="prime-body-small-light">
                                                Price Chart
                                            </div>
                                        </>
                                    )
                                )}
                                <div className="prime-body-small-radius">
                                    Company Values
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn has-icon btn-danger end-call">
                            <i data-feather="phone-call"></i>
                            End Call
                        </button>
                    </div>
                    {
                        this.state.is_recommendations_on?
                            <div className="row pop-up slider">
                                <div className="col-12 mx-0 px-0">
                                    <div className="card"> 
                                        <div className="pricing-header">
                                            Pricing
                                            <div> 
                                                <button
                                                    className="btn btn-dark p-1"
                                                >
                                                    <i data-feather="chevron-left"></i>
                                                </button>
                                                <button
                                                    className="btn btn-dark p-1 ml-1"
                                                >
                                                    <i data-feather="chevron-right"></i>
                                                </button>
                                                <button className="btn btn-dark p-1 m-3" onClick={e => this.setState({is_recommendations_on:false})}>
                                                    <i data-feather="x"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="pricing-details pointer px-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?
                                        </div>
                                        
                                        {
                                            Array(3).fill().map((item, index) => (
                                                <>
                                                    <div className="checklist-white pointer">
                                                        <div className="row"> 
                                                            <button className="col-1 btn text-primary">
                                                                <i data-feather="check"></i>
                                                            </button>
                                                            <h1 className="col checklist-text"> 
                                                                So tell me what got you interested in our solution to start with?
                                                            </h1>
                                                        </div>
                                                    </div>
                                                    <div className="checklist-light pointer">
                                                        <div className="row"> 
                                                            <button className="col-1 btn text-grey">
                                                                <i data-feather="check"></i>
                                                            </button>
                                                            <h1 className="col checklist-text text-decoration-none"> 
                                                                So tell me what got you interested in our solution to start with?
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }

                                        <div className="row pricing-details m-0 p-0 pr-3">
                                            <button className="btn btn-dark mx-4">
                                                Open Comparison
                                            </button>
                                            <div> 
                                                <button className="btn btn-success m-1 px-3 border-0">
                                                    <i data-feather="thumbs-up" className="feather-14"></i>
                                                </button>
                                                <button className="btn btn-danger m-1 px-3 border-0">
                                                    <i data-feather="thumbs-down" className="feather-14"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default LiveCall;