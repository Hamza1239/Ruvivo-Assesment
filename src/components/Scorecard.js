import React from 'react';

class Scorecard extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    rateSelection = ({ target }, question) => {
        target.classList.add("is-selected");

        if (target.parentElement.children.length) {
            [...target.parentElement.children].forEach(el => {
                if (!el.classList.contains("is-selected")) {
                    if (el.classList.contains("change") || el.classList.contains("eye")) {
                        el.classList.remove("d-none");
                    } else {
                        el.classList.add("d-none");
                    }
                }
            });
        }
    }

    unrateSelection = ({ target }, question) => {
        if (target.parentElement.children.length) {
            [...target.parentElement.children].forEach(el => {
                if (el.classList.contains("change") || el.classList.contains("eye")) {
                    el.classList.add("d-none");
                } else {
                    el.classList.remove("d-none");
                    el.classList.remove("is-selected");
                }
            });
        }
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapseEvaluationCard${this.props.name}`}>
                            {this.props.name}
                        </button>
                    </div>
                    <div id={`collapseEvaluationCard${this.props.name}`} className="collapse" data-parent="#accordionExample">
                        {
                            this.props.questions && this.props.questions.map(question => (
                                <div className="card-body border-bottom small" key={question}>
                                    <div className="row">
                                        <div className="col-9">
                                            {question}
                                        </div>
                                        <div className="col-3 position-relative">
                                            <button
                                                onClick={e => this.rateSelection(e, question)}
                                                className="btn btn-transparent evaluation-rating thumbs-up"
                                            >
                                                <i data-feather="thumbs-up"></i>
                                                <span>&ensp;Satisfactory</span>
                                            </button>
                                            <button
                                                onClick={e => this.rateSelection(e, question)}
                                                className="btn btn-transparent evaluation-rating thumbs-down"
                                            >
                                                <i data-feather="thumbs-down"></i>
                                                <span>&ensp;Unsatisfactory</span>
                                            </button>
                                            <button
                                                onClick={e => this.rateSelection(e, question)}
                                                className="btn btn-transparent evaluation-rating unsure"
                                            >
                                                <i data-feather="help-circle"></i>
                                                <span>&ensp;Unsure</span>
                                            </button>
                                            <button
                                                onClick={e => this.unrateSelection(e, question)}
                                                className="btn btn-transparent evaluation-rating change d-none"
                                            >
                                                <i data-feather="refresh-cw"></i>
                                                <span>&ensp;Change</span>
                                            </button>
                                            <button
                                                onClick={e => {
                                                }}
                                                className="btn btn-transparent evaluation-rating eye d-none"
                                            >
                                                <i data-feather="eye"></i>
                                                <span>&ensp;Sentence</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Scorecard;