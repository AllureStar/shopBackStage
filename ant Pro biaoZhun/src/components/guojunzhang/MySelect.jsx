import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default class MySelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Select
        defaultValue={this.props.defaultValue}
        style={{ width: 120 }}
        onChange={value => this.props.onChange(value)}
      >
        {this.props.date.map((item, index) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>
    );
  }
}
