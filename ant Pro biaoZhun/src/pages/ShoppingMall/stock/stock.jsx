// 库存报表
import React from 'react';
import styles from './stock.less';
import { DatePicker, Input, Button, Table } from 'antd';
import MySelect from '@/components/guojunzhang/MySelect';
import { connect } from 'dva';

const { RangePicker } = DatePicker;

export default class Stock extends React.Component {
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
      <div className={styles.Stock}>
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
      </div>
    );
  }
}
