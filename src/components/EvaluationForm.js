import React from "react";
import Scorecard from './Scorecard';
import { Dropdown } from 'reactjs-dropdown-component';

class EvaluationForm extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <div className="evaluation-form-wrapper">
                <header className="evaluation-form-header">
                    <div className="row w-100 align-items-center mx-auto">
                        <div className="col-8 p-0 text-left">
                            <h1 className="header-title border-0 m-0 p-0">Evalution Form</h1>
                        </div>
                        <div className="col p-0">
                            <button className="btn text-white px-2 text-muted">
                                <i data-feather="external-link" className="m-0"></i>
                            </button>
                            <button className="btn text-white px-2 text-muted">
                                <i data-feather="x" className="m-0"></i>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="evaluation-form-content text-left">
                    <div className="row">
                        <div className="col-12">
                            <Dropdown
                                title="Select Scorecard"
                                list={this.props.scorecard}
                                resetThenSet={this.props.resetThenSet}
                            />
                        </div>
                        <div className="col-12 mt-4">
                            <div className="accordion" id="accordionExample">
                                <Scorecard
                                    name="Opening"
                                    questions={["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio omnis vel possimus officia, sit fuga.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio omnis vel possimus officia, sit fuga, sunt consequatur mollitia consectetur soluta minima amet ipsa, asperiores non quos aspernatur nisi eius voluptatum."]}
                                />
                                <Scorecard
                                    name="Closing"
                                    questions={["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio omnis vel possimus officia, sit fuga, sunt consequatur mollitia consectetur soluta minima amet ipsa, asperiores non quos aspernatur nisi eius voluptatum.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio omnis vel possimus officia, sit fuga, sunt consequatur mollitia consectetur soluta minima amet ipsa, asperiores non quos aspernatur nisi eius voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio omnis vel possimus officia, sit fuga, sunt consequatur mollitia consectetur soluta minima amet ipsa, asperiores non quos aspernatur nisi eius voluptatum."]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EvaluationForm;