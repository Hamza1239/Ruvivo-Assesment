import React from "react";
import feather from 'feather-icons';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import {
    Tooltip as ReactTooltip,
} from 'react-tippy';

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        feather.replace();
    }

    render() {
        return (
            <aside className="sidebar">
                <div className="logo-wrapper">
                    <ReactTooltip
                        title="Soprano"
                        position="right"
                        distance={20}
                        followCursor={true}
                    >
                        <Link to="/">
                            <img src="/logo.png" alt="Logo" />
                        </Link>
                    </ReactTooltip>
                </div>

                <ul>
                    <li>
                        <ReactTooltip
                            title="Home"
                            position="right"
                            distance={20}
                            followCursor={true}
                        >
                            <Link to="/">
                                <i data-feather="home"></i>
                            </Link>
                        </ReactTooltip>
                    </li>
                    <li>
                        <ReactTooltip
                            title="Calls List"
                            position="right"
                            distance={20}
                            followCursor={true}
                        >
                            <Link to="/live-call">
                                <i data-feather="list"></i>
                            </Link>
                        </ReactTooltip>
                    </li>
                    <li>
                        <ReactTooltip
                            title="Reports"
                            position="right"
                            distance={20}
                            followCursor={true}
                        >
                            <Link to="/reports">
                                <i data-feather="archive"></i>
                            </Link>
                        </ReactTooltip>
                    </li>
                    <li>
                        <ReactTooltip
                            title="Documents"
                            position="right"
                            distance={20}
                            followCursor={true}
                        >
                            <Link to="/">
                                <i data-feather="file-text"></i>
                            </Link>
                        </ReactTooltip>
                    </li>
                    <li>
                        <ReactTooltip
                            title="Custom Documents"
                            position="right"
                            distance={20}
                            followCursor={true}
                        >
                            <Link to="/">
                                <i data-feather="file-plus"></i>
                            </Link>
                        </ReactTooltip>
                    </li>
                    <li>
                        <ReactTooltip
                            title="Chat"
                            position="right"
                            distance={20}
                            followCursor={true}
                        >
                            <Link to="/chat">
                                <i data-feather="message-circle"></i>
                            </Link>
                        </ReactTooltip>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default Sidebar;