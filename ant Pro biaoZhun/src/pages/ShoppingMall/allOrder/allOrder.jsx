// 全部订单页
import React from 'react';
import styles from '../shoppingMall.less';
import './allOrder1.css';
import { DatePicker, Select, Input, Button, Table } from 'antd';
import { connect } from 'dva';

const { Option } = Select;
const { RangePicker } = DatePicker;

const namespace = 'AllOrderModel';

const mapStateToProps = state => {
  const tableDate = state[namespace].date;
  return {
    tableDate,
  };
};

// model中的方法传递
// const mapDispatchToProps = (dispatch) => ({
//   getData: () => {
//     dispatch({
//       type: `${namespace}/getData`,
//     });
//   },
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   del:key => {
//     dispatch({
//       type: `${namespace}/delOne`,
//       payload:key
//     });
//   }
// });

const columns = [
  {
    title: '机构/订单/状态',
    dataIndex: 'name',
    render: text => (
      <div>
        <p>机构：{text.mechanism}</p>
        <p>编号：{text.number}</p>
        <p>状态：{text.state}</p>
      </div>
    ),
  },
  {
    title: '描述',
    dataIndex: 'orderNumber',
    render: text => <p>微信单号：{text}</p>,
  },
  {
    title: '发货信息',
    dataIndex: 'shippingInformation',
    render: text => (
      <div>
        <p>姓名：{text.names}</p>
        <p>电话：{text.Telephone}</p>
        <p>地址：{text.address}</p>
        <p>时间：{text.time}</p>
      </div>
    ),
  },
  {
    title: '操作',
    dataIndex: 'key',
    render: text => (
      <div id={'key' + text} onClick={e => tableId(e)}>
        <span style={{ color: 'red' }}>编辑</span>
        <span>打印</span>
        <span>详情</span>
        <br />
        <span>待发货</span>
        <span>已发货</span>
        <span>已收货</span>
      </div>
    ),
  },
];

// 获取id
function tableId(e) {
  console.log(e.target.innerHTML);
}

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

@connect(mapStateToProps) // ,mapDispatchToProps
export default class AllOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endTime: '',
      stateDate: '',
      ID: '',
      number: '',
      commodity: '',
      name: '',
      phone: '',
    };
  }
  render() {
    return (
      <div className={styles.AllOrder}>
        {/*搜索框*/}
        <div className={styles.AllOrderTop}>
          <RangePicker
            className={styles.AllOrderTime}
            onChange={(date, dateString) => {
              this.setState({ endTime: dateString });
            }}
          />
          <div className={styles.AllOrderInput}>
            状态：
            {/*{this.state.startTime}{this.state.endTime}*/}
            <Select
              defaultValue="全部"
              style={{ width: 120 }}
              onChange={value => {
                this.setState({ stateDate: value });
              }}
            >
              <Option value="全部">全部</Option>
              <Option value="待付款">待付款</Option>
              <Option value="待发货">待发货</Option>
              <Option value="待收货">待收货</Option>
              <Option value="已收货">已收货</Option>
              <Option value="已退货">已退货</Option>
              <Option value="待退款">待退款</Option>
              <Option value="已退款">已退款</Option>
            </Select>
          </div>
          <div className={styles.AllOrderInput}>
            <div className={styles.AllOrderItitle}>代理ID：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ ID: value });
              }}
            />
          </div>
          <div className={styles.AllOrderInput}>
            <div className={styles.AllOrderItitle}>订单号：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ number: value });
              }}
            />
          </div>
          <div className={styles.AllOrderInput}>
            <div className={styles.AllOrderItitle}>商品：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ commodity: value });
              }}
            />
          </div>
          <div className={styles.AllOrderInput}>
            <div className={styles.AllOrderItitle}>姓名：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ name: value });
              }}
            />
          </div>
          <div className={styles.AllOrderInput}>
            <div className={styles.AllOrderItitle}>手机：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ phone: value });
              }}
            />
          </div>
          <div className={styles.AllOrderInput}>
            <Button
              type="primary"
              onClick={() => {
                console.log(this.state);
              }}
            >
              搜索
            </Button>
          </div>
          <div className={styles.AllOrderInput}>
            <Button type="danger">删除选中</Button>
          </div>
        </div>
        {/*表格*/}
        <div className={styles.AllOrder}>
          <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.tableDate} />,
        </div>
      </div>
    );
  }
}
