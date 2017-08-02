import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/common.css';

import registerServiceWorker from './registerServiceWorker';

import Recruitment from './Recruitment';



let positionRecruitment = [
    {
        'departmentName': '工程研发部门',
        'needWorks': [
            {'jobName':'Mac开发工程师','jobNum':9},
            {'jobName':'IOS App测试工程师','jobNum':17},
            {'jobName':'Android远程控制工程师','jobNum':61},
            {'jobName':'Web前端工程师','jobNum':31},
            {'jobName':'Android多媒体软件开发工程师','jobNum':2}
        ]
    },
    {
        'departmentName': '产品设计部门',
        'needWorks': [
            {'jobName':'网页设计师','jobNum':47},
            {'jobName':'ID/工业设计师','jobNum':39},
            {'jobName':'视觉设计师/GUI界面设计师','jobNum':42},
            {'jobName':'平面设计师','jobNum':8}
        ]
    }
];

ReactDOM.render(<Recruitment key="1" tables={positionRecruitment}/>, document.getElementById('container'));
registerServiceWorker();
