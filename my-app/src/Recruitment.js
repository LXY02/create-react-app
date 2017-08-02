/**
 * Created by XFT User on 2017/8/2 0002.
 */
import React, { Component } from 'react';
import Table from './Table';

//整个招聘工作模块组件
class Recruitment extends Component {
    clearAll() {
        //通过refs方式调用子组件
        for(let i=0;i<this.props.tables.length;i++) {
            let tableRef = 'table'+i;
            if(!this.refs[tableRef].state.checkAll) {
                this.refs[tableRef].checkAll();
            }
            this.refs[tableRef].checkAll();
        }

    }
    render() {
        let self = this;
        let tables = this.props.tables.map(function (table,index) {
            return (
                <div key={index}>
                    <Table ref={'table'+index} rows={table.needWorks} tableName={table.departmentName}/>
                </div>
            )
        });
        return (
            <div className="recruitmentDiv">
                <div className="topBar cf">
                    <p className="containerTitle">招聘职位</p>
                    <a className="clearAllA" href="javascript:void(0)" onClick={this.clearAll.bind(this)}>清空</a>
                </div>
                {tables}
            </div>
        );
    }
}

export default Recruitment;