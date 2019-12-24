// 提款管理
import React from 'react';
import styles from '../shoppingMall.less';
import { DatePicker, Input, Button, Table } from 'antd';
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
    title: '机构ID',
    dataIndex: 'mechanismId',
    key: 'mechanismId',
  },
  {
    title: '用户名/手机号码',
    dataIndex: 'userIP',
    key: 'userIP',
    render: text => (
      <div>
        <p>用户名：{text.userId}</p>
        <p>手机号码：{text.phone}</p>
      </div>
    ),
  },
  {
    title: '提款方式/金额',
    dataIndex: 'drawing',
    key: 'drawing',
    render: text => (
      <div>
        <p>方式：{text.name}</p>
        <p>金额：{text.amount}</p>
      </div>
    ),
  },
  {
    title: '支付宝/校验名字',
    dataIndex: 'check',
    key: 'check',
    render: text => (
      <div>
        <p>支付宝：{text.id}</p>
        <p>校验名字：{text.name}</p>
      </div>
    ),
  },
  {
    title: '户名/卡号',
    dataIndex: 'account',
    key: 'account',
    render: text => (
      <div>
        <p>户名：{text.name}</p>
        <p>卡号：{text.number}</p>
      </div>
    ),
  },
  {
    title: '时间/状态',
    dataIndex: 'time',
    key: 'time',
    render: text => (
      <div>
        <p>时间：{text.number}</p>
        <p>状态：{text.state}</p>
      </div>
    ),
  },
  {
    title: '操作',
    dataIndex: 'time',
    key: 'time1',
    render: text => (
      <div>
        <span>帐变记录</span>
        {text.state !== '完成' ? (
          <p>
            <span>已经打款</span>
            &nbsp;
            <span>立即撤销</span>
          </p>
        ) : (
          <span> </span>
        )}
      </div>
    ),
  },
];
const namespace = 'Drawing';

const mapStateToProps = state => {
  const tableDate = state[namespace].date;
  return {
    tableDate,
  };
};

@connect(mapStateToProps)
export default class Drawing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountChangeBool: false,
      // 搜索变量
      endTime: '',
      stateDate: '',
      name: '',
      ID: '',
      number: '',
      Alipay: '',
      phone: '',
    };
  }
  render() {
    return (
      <div className={styles.Drawing}>
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
            <MySelect
              date={['所有状态', '进行中', '完成', '撤销', '作废']}
              defaultValue={'所有状态'}
              onChange={value => {
                this.setState({ stateDate: value });
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
            <div className={styles.AllOrderItitle}>卡号：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ number: value });
              }}
            />
          </div>
          <div className={styles.AllOrderInput}>
            <div className={styles.AllOrderItitle}>支付宝：</div>
            <Input
              className={styles.AllOrderInputFloat}
              placeholder=""
              onChange={({ target: { value } }) => {
                this.setState({ Alipay: value });
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
        </div>
        <div>
          <Table columns={columns} dataSource={this.props.tableDate} />
        </div>
      </div>
    );
  }
}
