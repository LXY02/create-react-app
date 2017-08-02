/**
 * Created by XFT User on 2017/8/2 0002.
 */
import React, { Component } from 'react';

//单行每个工作组件
class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }
    checkIt() {
        this.props.callback(this.props.index, !this.props.checked);

    }
    render() {
        return (
            <div>
                <input type="checkbox" id={this.props.obj.jobName} checked={this.props.checked} onChange={this.checkIt.bind(this)} />
                <label htmlFor={this.props.obj.jobName}>{this.props.obj.jobName}</label>
                <span>{this.props.obj.jobNum}</span>
            </div>
        );
    }
}

export default Row;