import React from "react";

class Chat extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className={`chat-section ${this.props.withRecommendations ? "chat-with-recommendations" : ""}`}>
                <div className="search-bar is-collapsed">
                    <input type="text" className="form-control" placeholder="Start typing to search..." id="search-input" />
                    <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={({ target }) => {
                            if (target.parentNode.classList.contains("is-collapsed")) {
                                target.parentNode.classList.remove("is-collapsed");
                                document.getElementById("search-cross").classList.remove("d-none");
                                document.getElementById("search-icon").classList.add("d-none");
                                document.getElementById("search-input").focus();
                            } else {
                                target.parentNode.classList.add("is-collapsed")
                                document.getElementById("search-cross").classList.add("d-none");
                                document.getElementById("search-icon").classList.remove("d-none");
                                document.getElementById("search-input").value = null;
                            }
                        }}
                    >
                        <i data-feather="search" id="search-icon"></i>
                        <i data-feather="x" className="d-none" id="search-cross"></i>
                    </button>
                </div>

                {
                    this.props.withRecommendations ?
                        <>
                            {
                                Array(3).fill().map((item, index) => (
                                    <div key={index}>
                                        <div className="chat-item left">
                                            <small className="timestamp">
                                                00:04 min
                                            </small>
                                            {this.props.highlightThreat == "Another Moment" && index%2==0?
                                                <div className="chat-content-highlight">
                                                    <p>
                                                        Hello. Welcome to Flipkart. Lorem ipsum dolor sit amet.
                                                    </p>
                                                    <div className="mt-3 mt-md-3">
                                                        <button className="btn btn-primary mx-auto">
                                                            {this.props.highlightThreat}
                                                        </button>
                                                    </div>
                                                </div>
                                            :this.props.highlightThreat == "One More" && index%2==1?
                                                <div className="chat-content-highlight">
                                                    <p>
                                                        Hello. Welcome to Flipkart. Lorem ipsum dolor sit amet.
                                                    </p>
                                                    <div className="mt-3 mt-md-3">
                                                        <button className="btn btn-primary mx-auto">
                                                            {this.props.highlightThreat}
                                                        </button>
                                                    </div>
                                                </div>
                                            :
                                                <div className="chat-content">
                                                    <p>
                                                        Hello. Welcome to Flipkart. Lorem ipsum dolor sit amet.
                                                    </p>
                                                </div>
                                            }
                                        </div>
                                        <div className="chat-item right">
                                            <small className="timestamp">
                                                00:04 min
                                            </small>
                                            <div className="chat-content">
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti animi esse, nostrum ducimus exercitationem dolorem autem at! Exercitationem tempore labore repudiandae at quisquam nihil atque sit aperiam, vero ullam molestiae.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                        :
                        <>
                            {
                                Array(3).fill().map((item, index) => (
                                    <div key={index}>
                                        <div className="chat-item left">
                                            <small className="timestamp">
                                                00:04 min
                                </small>
                                            <div className="chat-content">
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur.
                                    </p>
                                                <div className="overlay">
                                                    <div className="chat-actions">
                                                        <button className="chat-action">
                                                            <i data-feather="play"></i>
                                                        </button>
                                                        <button className="chat-action">
                                                            <i data-feather="flag"></i>
                                                        </button>
                                                        <button className="chat-action">
                                                            <i data-feather="message-circle"></i>
                                                        </button>
                                                        <button className="chat-action">
                                                            <i data-feather="eye"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-item right">
                                            <small className="timestamp">
                                                00:04 min
                                </small>
                                            <div className="chat-content">
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti animi esse, nostrum ducimus exercitationem dolorem autem at! Exercitationem tempore labore repudiandae at quisquam nihil atque sit aperiam, vero ullam molestiae.
                                    </p>
                                                <div className="overlay">
                                                    <div className="chat-actions">
                                                        <button className="chat-action">
                                                            <i data-feather="play"></i>
                                                        </button>
                                                        <button className="chat-action">
                                                            <i data-feather="flag"></i>
                                                        </button>
                                                        <button className="chat-action">
                                                            <i data-feather="message-circle"></i>
                                                        </button>
                                                        <button className="chat-action">
                                                            <i data-feather="eye"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                }

                {
                    this.props.withRecommendations ?
                        <div className="search-bar is-message-input">
                            <textarea className="form-control" placeholder="Type message...&#10;Hit enter to send and shift + enter to add a new line..." id="search-input" rows="2" />
                        </div>
                        :
                        <></>
                }
            </div>
        );
    }
}

export default Chat;