// 账变记录
import React from 'react';
import styles from '../shoppingMall.less';
import { DatePicker, Input, Button, Table } from 'antd';
// 郭俊章的选择器组件
import MySelect from '@/components/guojunzhang/MySelect';
import { connect } from 'dva';

const { RangePicker } = DatePicker;

const columns = [
  // 表格样式
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '机构/类型/订单',
    dataIndex: 'OTO',
    key: 'OTO',
    render: text => (
      <div>
        <p>机构：{text.organization}</p>
        <p>类型：{text.type}</p>
        <p>订单：{text.order}</p>
      </div>
    ),
  },
  {
    title: '标题和备注',
    dataIndex: 'TRT',
    key: 'TRT',
    render: text => (
      <div>
        <p>标题：{text.title}</p>
        <p>备注：{text.remarks}</p>
        <p>时间：{text.time}</p>
      </div>
    ),
  },
  {
    title: '用户信息',
    dataIndex: 'UserInformation',
    key: 'UserInformation',
    render: text => (
      <div>
        <p>用户：{text.userName}</p>
        <p>昵称：{text.userNickName}</p>
        <p>手机：{text.phone}</p>
      </div>
    ),
  },
  {
    title: '金额/积分',
    dataIndex: 'AmountPoints',
    key: 'AmountPoints',
    render: text => (
      <div>
        <p>金额：{text.amount}</p>
        <p>积分：{text.integral}</p>
        <p>推广：{text.extension}</p>
      </div>
    ),
  },
];

const namespace = 'AccountChangeModel';

const mapStateToProps = state => {
  const tableDate = state[namespace].date;
  return {
    tableDate,
  };
};

@connect(mapStateToProps)
export default class AccountChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endTime: '',
      stateDate: '',
      userName: '',
      title: '',
      remarks: '',
      orderNumber: '',
    };
  }
  render() {
    return (
      <div className={styles.AccountChange}>
        <div className={styles.AllOrderTop}>
          <RangePicker
            className={styles.AllOrderTime}
            onChange={(date, dateString) => {
              this.setState({ endTime: dateString });
            }}
          />
          <div className={styles.AllOrderInput}>
            类型：
            <MySelect
              date={['金额消费', '一级分红', '二级分红', '三级分红']}
              defaultValue={'选择类型'}
              onChange={value => {
                this.setState({ stateDate: value });
              }}
            />
          </div>
          <div className={styles.AllOrderInput}>
            <div className={styles.AllOrderItitle}>用户名：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ userName: value });
              }}
            />
          </div>
          <div className={styles.AllOrderInput}>
            <div className={styles.AllOrderItitle}>标题：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ title: value });
              }}
            />
          </div>
          <div className={styles.AllOrderInput}>
            <div className={styles.AllOrderItitle}>订单号：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ orderNumber: value });
              }}
            />
          </div>
          <div className={styles.AllOrderInput}>
            <div className={styles.AllOrderItitle}>备注：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ remarks: value });
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
        </div>
        <div className={styles.AccountChange}>
          <Table columns={columns} dataSource={this.props.tableDate} />
        </div>
      </div>
    );
  }
}
