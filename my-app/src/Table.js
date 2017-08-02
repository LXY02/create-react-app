/**
 * Created by XFT User on 2017/8/2 0002.
 */
import React, { Component } from 'react';
import Row from './Row';
import arrow from './arrow.png';

//每个部门组件
class Table extends Component {
    constructor(props) {
        super(props);
        let rowState =[];
        for(let i = 0; i < this.props.rows.length; i++) {
            rowState[i] = false;
        }
        this.state = {
            checkAll: false,
            rowState:rowState,
            hideDiv: false,
            totalNum: 0
        }
    }
    checkRow(id,value) {
        this.state.rowState[id] = value;
        if (this.state.checkAll) {
            this.state.checkAll = !this.state.checkAll;
        }
        this.setState({
            rowState: this.state.rowState,
            checkAll: this.state.checkAll
        });
    }
    checkAll() {
        let rowState =[];
        let checkState = !this.state.checkAll;
        for(let i = 0; i < this.state.rowState.length; i++) {
            rowState[i] = checkState;
        }

        this.state.checkAll = checkState;

        this.setState({
            rowState: rowState,
            checkAll: this.state.checkAll
        });
    }
    hideOrShow() {
        this.setState({
            hideDiv : !this.state.hideDiv
        });
    }
    totalNumFun() {
        let num = 0;
        for(let i=0;i<this.props.rows.length;i++) {
            num += this.props.rows[i].jobNum;
        }
        return num;
    }
    render() {
        let self = this;
        let divClass = 'workLists';
        let imgClass = 'arrow';
        if(this.state.hideDiv) {
            divClass += ' hide';
            imgClass = 'arrow';
        }else {
            divClass = 'workLists';
            imgClass += ' arrowDown';
        }
        let rows = this.props.rows.map( function( row,index) {
            return (<Row obj={row} key={index} index={index} checked={self.state.rowState[index]} callback={self.checkRow.bind(self)} />);
        });
        return (
            <div className="departmentDiv">
                <input type="checkbox" id={this.props.tableName} checked={this.state.checkAll} onChange={this.checkAll.bind(this)} />
                <label htmlFor={this.props.tableName}>{this.props.tableName}</label>
                <span>{this.totalNumFun()}</span>
                <img className={imgClass} src={arrow} onClick={this.hideOrShow.bind(this)}/>
                <div className={divClass}>{rows}</div>
            </div>
        );
    }
}




export default Table;