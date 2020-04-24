import React from "react";

class Recommendations extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <div className="evaluation-form-wrapper">
                <header className="evaluation-form-header">
                    <div className="row w-100 align-items-center mx-auto">
                        <div className="col-10 p-0 text-left">
                            <h1 className="header-title border-0 m-0 p-0">Recommendations</h1>
                        </div>
                        <div className="col-1">
                            <button className="btn px-0 text-muted" disabled>
                                &ensp;
                            </button>
                        </div>
                    </div>
                </header>
                <div className="evaluation-form-content text-left">
                    {
                        Array(5).fill().map((item, index) => (
                            <div
                                className="row recommendation-row is-striped"
                                onClick={e => alert(`Selected ${index + 1}`)}
                                key={index}
                            >
                                <div className="col-md-12 mb-3">
                                    <kbd><kbd>CTRL</kbd>&nbsp;+&nbsp;<kbd>{index + 1}</kbd></kbd>
                                </div>
                                <div className="col-md">
                                    <p>
                                        Step {index + 1} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                    <div className="share-link-wrapper">
                        <button className="btn btn-primary border-0 w-100">
                            Share Point Link
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recommendations;