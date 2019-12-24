import React from "react";
import { Button } from 'antd';
import { DatePicker } from 'antd';
import style from './Access.less';
import './accesscss.css';
import img from './img/shopping.jpg'
import img1 from './img/erweima.png'
//日期的组件
const {  RangePicker } = DatePicker;
function onChange(date, dateString) {
  console.log(date, dateString);
}

//输入框选择的组件
import { Input, Select } from 'antd';


//表格的组件
import { Table, Divider } from 'antd';
//表格的渲染
const columns = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
    // render: text => <div>{text}</div>,
  },
  {
    key: 'jigouStyle',
    title: '机构/类型/用户ID',
    dataIndex: 'jigouStyle',
    render: text =>
      <div>
        <div>{text.aaa}</div>
        <div>{text.institutions}</div>
      </div>
  },
  {
    key: 'address',
    title: '账号/昵称/手机',
    dataIndex: 'address',
  },
  {
    key: '1',
    title: '标题/内容/时间',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    id: '5464017',
    age: 32,
    address: 'New York No. 1 Lake Park',
    jigouStyle:{
      aaa:'asdasd',
      institutions:'优品严选(427)',
      style1:'会员中心',
      userid:'2804802',
    },
  },
  {
    key: '2',
    id: '5464017',
    age: 32,
    address: 'New York No. 1 Lake Park',
    jigouStyle:{
      aaa:'asdasd',
      institutions:'优品严选(427)',
      style1:'会员中心',
      userid:'2804802',
    },
  },
  {
    key: '3',
    id: '5464017',
    age: 32,
    address: 'New York No. 1 Lake Park',
    jigouStyle:{
      aaa:'asdasd',
      institutions:'优品严选(427)',
      style1:'会员中心',
      userid:'2804802',
    },
  },

];




export default class Access extends React.Component{
  constructor(props){
    super(props);

  }
  render() {
    // eslint-disable-next-line react/react-in-jsx-scope,no-undef
    return (
      <div className={style.bodys}>
        {/* 添加时间  日期等输入框 */}
        <div className={style.addTiime}>
          <div className={style.timeJia}>添加时间 :</div>
          <div className={style.addDate}><RangePicker onChange={onChange} /></div>
          {/*类型的输入框*/}
            <div className={style.leiXFath}>
              <div className={style.leiX}>类型:</div>
              <div className={style.leiXType}><Input placeholder="type" /></div>
            </div>

            <div className={style.leiXFath} style={{width:'175px'}}>
              <div className={style.leiX} style={{width:'60px'}}>用户账号:</div>
              <div className={style.leiXType} style={{width:'110px',marginLeft:'5px'}}><Input placeholder="sser account" /></div>
            </div>

            <div className={style.leiXFath}>
              <div className={style.leiX}>昵称:</div>
              <div className={style.leiXType}><Input placeholder="nickname" /></div>
            </div>

            <div className={style.leiXFath}>
              <div className={style.leiX}>手机:</div>
              <div className={style.leiXType}><Input placeholder="phone" /></div>
            </div>
            <div className={style.leiXFath}>
              <div className={style.leiX}>标题:</div>
              <div className={style.leiXType}><Input placeholder="title" /></div>
            </div>
          {/*提交按钮*/}
          <div className={style.tiJiao}><Button type="primary">提交</Button></div>


          {/* 标题 简介 用户名 ID的下拉选项框 */}

          {/* 搜索栏的组件 */}

        </div>

        {/* 导航条 */}
        <div className={style.navTiao}>
          {/*全选反选*/}
          <Table columns={columns} dataSource={data} />
        </div>
      </div>

    );

  }
}
