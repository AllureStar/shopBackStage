import React from 'react';
import { Button } from 'antd';
import { DatePicker } from 'antd';
import style from './Access.less';
import './accesscss.css';
import img from './img/shopping.jpg';
import img1 from './img/erweima.png';
//日期的组件
const { RangePicker } = DatePicker;
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
    render: text => (
      <div>
        <div>
          <span style={{ fontWeight: '800' }}>机构:&nbsp;&nbsp;</span>
          {text.institutions}
        </div>
        <div>
          <span style={{ fontWeight: '800' }}>类型:&nbsp;&nbsp;</span>
          {text.style1}
        </div>
        <div>
          <span style={{ fontWeight: '800' }}>userid:&nbsp;&nbsp;</span>
          {text.userid}
        </div>
      </div>
    ),
  },
  {
    key: 'xinxi',
    title: '账号/昵称/手机',
    dataIndex: 'xinxi',
    render: text => (
      <div>
        <div>
          <span style={{ fontWeight: '800' }}>账号:&nbsp;&nbsp;</span>
          {text.accountNumber}
        </div>
        <div>
          <span style={{ fontWeight: '800' }}>昵称:&nbsp;&nbsp;</span>
          {text.nikeName}
        </div>
        <div>
          <span style={{ fontWeight: '800' }}>手机:&nbsp;&nbsp;</span>
          {text.phone}
        </div>
      </div>
    ),
  },
  {
    key: 'title',
    title: '标题/内容/事件',
    dataIndex: 'title',
    render: text => (
      <div>
        <div>
          <span style={{ fontWeight: '800' }}>标题:&nbsp;&nbsp;</span>
          {text.tit}
        </div>
        <div>
          <span style={{ fontWeight: '800' }}>内容:&nbsp;&nbsp;</span>
          {text.cont}
        </div>
        <div>
          <span style={{ fontWeight: '800' }}>时间:&nbsp;&nbsp;</span>
          {text.time}
        </div>
      </div>
    ),
  },
];

const data = [
  {
    key: '1',
    id: '5464013',
    age: 32,
    xinxi: {
      accountNumber: '912317650',
      nikeName: '薛佳兴',
      phone: '17603236137',
    },
    jigouStyle: {
      institutions: '优品严选(425 )',
      style1: '会员中心',
      userid: '2804800',
    },
    title: {
      tit: '活动列表',
      cont: '活动列表',
      time: '2019-12-25 06:20:02',
    },
  },
  {
    key: '2',
    id: '5464014',
    age: 32,
    xinxi: {
      accountNumber: '912317650',
      nikeName: '薛佳兴',
      phone: '17603236137',
    },
    jigouStyle: {
      institutions: '优品严选(425 )',
      style1: '会员中心',
      userid: '2804800',
    },
    title: {
      tit: '人脉二维码列表',
      cont: '汇聚人脉资源，广结善缘，合作共赢',
      time: '2019-12-25 06:20:02',
    },
  },
  {
    key: '3',
    id: '5464015',
    age: 32,
    xinxi: {
      accountNumber: '912317650',
      nikeName: '薛佳兴',
      phone: '17603236137',
    },
    jigouStyle: {
      institutions: '优品严选(425 )',
      style1: '会员中心',
      userid: '2804800',
    },
    title: {
      tit: '二*级*分销功能体验',
      cont: '体验商城系统分销功能',
      time: '2019-12-25 06:20:02',
    },
  },
  {
    key: '4',
    id: '5464016',
    age: 32,
    xinxi: {
      accountNumber: '912317650',
      nikeName: '薛佳兴',
      phone: '17603236137',
    },
    jigouStyle: {
      institutions: '优品严选(425 )',
      style1: '会员中心',
      userid: '2804800',
    },
    title: {
      tit: '二*级*分销功能体验',
      cont: '体验商城系统分销功能',
      time: '2019-12-25 06:20:02',
    },
  },
  {
    key: '5',
    id: '5464017',
    age: 32,
    xinxi: {
      accountNumber: '912317650',
      nikeName: '薛佳兴',
      phone: '17603236137',
    },
    jigouStyle: {
      institutions: '优品严选(425 )',
      style1: '会员中心',
      userid: '2804800',
    },
    title: {
      tit: '二*级*分销功能体验',
      cont: '体验商城系统分销功能',
      time: '2019-12-25 06:20:02',
    },
  },
  {
    key: '6',
    id: '5464018',
    age: 32,
    xinxi: {
      accountNumber: '912317650',
      nikeName: '薛佳兴',
      phone: '17603236137',
    },
    jigouStyle: {
      institutions: '优品严选(425 )',
      style1: '会员中心',
      userid: '2804800',
    },
    title: {
      tit: '二*级*分销功能体验',
      cont: '体验商城系统分销功能',
      time: '2019-12-25 06:20:02',
    },
  },
];

export default class Access extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // eslint-disable-next-line react/react-in-jsx-scope,no-undef
    return (
      //绑定另外一个class名
      <div className={style.bodys + ' bodyss'}>
        {/* 添加时间  日期等输入框 */}
        <div className={style.addTiime}>
          <div className={style.timeJia}>添加时间 :</div>
          <div className={style.addDate}>
            <RangePicker onChange={onChange} />
          </div>
          {/*类型的输入框*/}
          <div className={style.leiXFath}>
            <div className={style.leiX}>类型:</div>
            <div className={style.leiXType}>
              <Input placeholder="type" />
            </div>
          </div>

          <div className={style.leiXFath} style={{ width: '175px' }}>
            <div className={style.leiX} style={{ width: '60px' }}>
              用户账号:
            </div>
            <div className={style.leiXType} style={{ width: '110px', marginLeft: '5px' }}>
              <Input placeholder="sser account" />
            </div>
          </div>

          <div className={style.leiXFath}>
            <div className={style.leiX}>昵称:</div>
            <div className={style.leiXType}>
              <Input placeholder="nickname" />
            </div>
          </div>

          <div className={style.leiXFath}>
            <div className={style.leiX}>手机:</div>
            <div className={style.leiXType}>
              <Input placeholder="phone" />
            </div>
          </div>
          <div className={style.leiXFath}>
            <div className={style.leiX}>标题:</div>
            <div className={style.leiXType}>
              <Input placeholder="title" />
            </div>
          </div>
          {/*提交按钮*/}
          <div className={style.tiJiao}>
            <Button type="primary">提交</Button>
          </div>

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
