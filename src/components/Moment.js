import React from "react";

class Moment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="moments-item">
                <button className="btn btn-transparent text-left rounded-0 px-0 font-weight-bold w-100" type="button" data-toggle="collapse" data-target={`#collapseMoments${this.props.name.replace(/ /g, "")}`}>
                    <i className="fa fa-angle-up fa-lg"></i>&ensp;{this.props.name}
                </button>
                <div className="collapse" id={`collapseMoments${this.props.name.replace(/ /g, "")}`}>
                    <div className="card card-body bg-transparent rounded-0 border-0 py-1 pl-3 pr-1">
                        {
                            this.props.isNested ?
                                this.props.items.map((item, index) => (
                                    <div key={`${item.name}${index}`}>
                                        <button className="btn btn-transparent text-left rounded-0 px-0 font-weight-bold w-100" type="button" data-toggle="collapse" data-target={`#collapseMomentsNested${index}${item.name.replace(/ /g, "")}`}>
                                            <i className="fa fa-angle-up fa-lg"></i>&ensp;{item.name}
                                            <span className={`pulled-right small ${item.foundStatus ? "text-success" : "text-muted"}`}>
                                                {item.foundStatus ? "Found" : "Not Found"}
                                            </span>
                                        </button>
                                        <div className="collapse" id={`collapseMomentsNested${index}${item.name.replace(/ /g, "")}`}>
                                            <div className="card card-body bg-transparent rounded-0 border-0 py-1 pl-3 pr-1">
                                                <div className="list-group p-0">
                                                    {
                                                        item.items.map((el, index) => (
                                                            <a href="#" className="py-2 list-group-item list-group-item-action bg-transparent border-0" key={`${el.name}${index}`}>
                                                                {el.name}
                                                                <span className={`pulled-right small ${el.foundStatus ? "text-success" : "text-muted"}`}>
                                                                    {el.foundStatus ? "Found" : "Not Found"}
                                                                </span>
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :
                                <div className="list-group p-0">
                                    {
                                        this.props.items.map((el, index) => (
                                            <a href="#" className="py-2 list-group-item list-group-item-action bg-transparent border-0" key={`${el.name}${index}`}>
                                                {el.name}
                                                <span className={`pulled-right small ${el.foundStatus ? "text-success" : "text-muted"}`}>
                                                    {el.foundStatus ? "Found" : "Not Found"}
                                                </span>
                                            </a>
                                        ))
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Moment;