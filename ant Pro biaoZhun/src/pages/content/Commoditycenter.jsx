import React from 'react';
import { Button } from 'antd';
import { DatePicker } from 'antd';
import style from './Commoditycenter.less';
import './Commoditycentercss.css';
import img from './img/shopping.jpg';
import img1 from './img/erweima.png';
//日期的组件
const { RangePicker } = DatePicker;
function onChange(date, dateString) {
  console.log(date, dateString);
}

//输入框选择的组件
import { Input, Select } from 'antd';
const InputGroup = Input.Group;
const { Option } = Select;

//搜索框的组件
const { Search } = Input;

//表格的组件
import { Table } from 'antd';
// @connect(mapStateToProps, mapDispatchToProps)
const columns = [
  {
    title: '排序',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '缩略图片',
    dataIndex: 'img',
    render: (text, record) => (
      // console.log("record的内容",record)
      // console.log(text)
      <img src={record.img} width="100px" height="100px" alt="" />
    ),
  },
  {
    title: '基本信息',
    dataIndex: 'jiBenXinXi',
    info: 'institutions',
    render: (text, record) => (
      // console.log(text)
      // console.log(record)
      <div>
        <div>
          <span style={{ fontWeight: 'bold' }}>编号:</span>&nbsp;&nbsp;{text.numbering}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>机构:</span>&nbsp;&nbsp;{text.institutions}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>货商:</span>&nbsp;&nbsp;{text.merchants}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>品牌:</span>&nbsp;&nbsp;{text.style}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>状态:</span>&nbsp;&nbsp;{text.state}
        </div>
      </div>
    ),
  },
  {
    title: '更多明细',
    dataIndex: 'moreDetails',
    render: text => (
      // console.log(record)
      <div>
        <div>
          <span style={{ fontWeight: 'bold' }}>品名：</span>&nbsp;{text.productName}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>管理：</span>&nbsp;{text.management}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>价格：</span>&nbsp;¥{text.price}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>库存：</span>&nbsp;{text.inventory}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>更新：</span>&nbsp;{text.update}
        </div>
      </div>
    ),
  },
  {
    title: '扫码浏览',
    dataIndex: 'img1',
    render: (text, record) => (
      // console.log("record的内容",record)
      // console.log(text)
      <img src={record.img1} width="100px" height="100px" alt="" />
    ),
  },
  {
    title: '管理操作',
    // dataIndex: 'img',
    render: record => (
      // console.log(record)
      <div>
        <div>编辑商品</div>
        <div>浏览商品</div>
        <div>订单清单</div>
        <div>复制商品</div>
      </div>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    img: img,
    img1: img1,
    jiBenXinXi: {
      numbering: 4825,
      institutions: '优品严选(427)',
      merchants: '商城系统(167)',
      style: '演示',
      state: '隐藏',
    },
    moreDetails: {
      productName: '二*级*分销功能体验',
      management: ' 13488816033_14084526',
      price: '5',
      inventory: '9998',
      update: '2019-09-28 21:26:36',
    },
  },

  {
    key: '2',
    name: 'John Brown',
    img: img,
    img1: img1,
    jiBenXinXi: {
      numbering: 4447,
      institutions: '优品严选(427)',
      merchants: '商城系统(167)',
      style: '演示',
      state: '发布',
    },
    moreDetails: {
      productName: '二*级*分销功能体验',
      management: ' 13488816033_14084526',
      price: '10',
      inventory: '9995',
      update: '2019-09-28 21:10:04',
    },
  },

  {
    key: '3',
    name: 'John Brown',
    img: img,
    img1: img1,
    jiBenXinXi: {
      numbering: 4447,
      institutions: '优品严选(427)',
      merchants: '商城系统(167)',
      style: '演示',
      state: '发布',
    },
    moreDetails: {
      productName: '二*级*分销功能体验',
      management: ' 13488816033_14084526',
      price: '10',
      inventory: '9995',
      update: '2019-09-28 21:10:04',
    },
  },

  {
    key: '4',
    name: 'John Brown',
    img: img,
    img1: img1,
    jiBenXinXi: {
      numbering: 4447,
      institutions: '优品严选(427)',
      merchants: '商城系统(167)',
      style: '演示',
      state: '发布',
    },
    moreDetails: {
      productName: '二*级*分销功能体验',
      management: ' 13488816033_14084526',
      price: '10',
      inventory: '9995',
      update: '2019-09-28 21:10:04',
    },
  },

  {
    key: '5',
    name: 'John Brown',
    img: img,
    img1: img1,
    jiBenXinXi: {
      numbering: 4447,
      institutions: '优品严选(427)',
      merchants: '商城系统(167)',
      style: '演示',
      state: '发布',
    },
    moreDetails: {
      productName: '二*级*分销功能体验',
      management: ' 13488816033_14084526',
      price: '10',
      inventory: '9995',
      update: '2019-09-28 21:10:04',
    },
  },

  {
    key: '6',
    name: 'John Brown',
    img: img,
    img1: img1,
    jiBenXinXi: {
      numbering: 4447,
      institutions: '优品严选(427)',
      merchants: '商城系统(167)',
      style: '演示',
      state: '发布',
    },
    moreDetails: {
      productName: '二*级*分销功能体验',
      management: ' 13488816033_14084526',
      price: '10',
      inventory: '9995',
      update: '2019-09-28 21:10:04',
    },
  },

  {
    key: '7',
    name: 'John Brown',
    img: img,
    img1: img1,
    jiBenXinXi: {
      numbering: 4447,
      institutions: '优品严选(427)',
      merchants: '商城系统(167)',
      style: '演示',
      state: '发布',
    },
    moreDetails: {
      productName: '二*级*分销功能体验',
      management: ' 13488816033_14084526',
      price: '10',
      inventory: '9995',
      update: '2019-09-28 21:10:04',
    },
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === '', // Column configuration not to be checked
    name: record.name,
  }),
};
export default class Commoditycenter extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    // this.setState(()=>({value1:value1}));
    // console.log()
  };
  render() {
    // eslint-disable-next-line react/react-in-jsx-scope,no-undef
    return (
      <div className={style.commods}>
        {/*添加内容   审核通过   搜索的按钮布局*/}
        <div className={style.operation}>
          <div className={style.addContent}>
            <Button type="primary">添加内容</Button>
          </div>
          <div className={style.approved}>
            <Button type="primary">审核通过</Button>
          </div>
          <div className={style.search}>
            <Button
              type="primary"
              onClick={() => {
                this.onClick();
              }}
            >
              搜索
            </Button>
          </div>
        </div>

        {/* 添加时间  日期等输入框 */}
        <div className={style.addTiime}>
          <div className={style.timeJia}>添加时间 :</div>
          <div className={style.addDate}>
            <RangePicker onChange={onChange} />
          </div>
          {/*全部 推荐 不推荐的下拉选项框*/}
          <div className={style.alls}>
            <InputGroup compact>
              <Select defaultValue="全部">
                <Option value="quanBu">全部</Option>
                <Option value="tuiJian">推荐</Option>
                <Option value="buTuiJian">不推荐</Option>
              </Select>
            </InputGroup>
          </div>

          {/* 标题 简介 用户名 ID的下拉选项框 */}
          <div className={style.tit}>
            <InputGroup compact>
              <Select defaultValue="标题">
                <Option value="biaoTi">标题</Option>
                <Option value="jianJie">简介</Option>
                <Option value="yongHuMing">用户名</Option>
                <Option value="eiD">ID</Option>
              </Select>
            </InputGroup>
          </div>
          {/* 搜索栏的组件 */}
          <div className={style.souSuo}>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
            />
          </div>
        </div>

        {/* 导航条 */}
        <div className={style.navTiao}>
          {/*全选反选*/}
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />,
        </div>
      </div>
    );
  }
}
