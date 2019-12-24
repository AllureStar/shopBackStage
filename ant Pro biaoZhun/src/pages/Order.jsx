import { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import { connect } from 'dva';

const namespace = 'order';

const mapStateToProps = state => {
  const cardList = state[namespace];
  return {
    cardList,
  };
};

const mapDispatchToProps = dispatch => ({
  getData: () => {
    dispatch({
      type: `${namespace}/getData`,
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  del: key => {
    dispatch({
      type: `${namespace}/delOne`,
      payload: key,
    });
  },
});

// eslint-disable-next-line react/prefer-stateless-function,no-undef
@connect(mapStateToProps, mapDispatchToProps)
export default class Order extends Component {
  // eslint-disable-next-line react/sort-comp
  del = param => {
    // eslint-disable-next-line no-console
    this.props.del(param);
  };

  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    this.props.getData();
  }

  // eslint-disable-next-line react/sort-comp
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // eslint-disable-next-line react/react-in-jsx-scope
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        // eslint-disable-next-line react/react-in-jsx-scope
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              // eslint-disable-next-line react/react-in-jsx-scope
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        // eslint-disable-next-line react/react-in-jsx-scope
        <span>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <a>Invite {record.name}</a>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <Divider type="vertical" />
          {/* eslint-disable-next-line react/react-in-jsx-scope,no-console */}
          <a
            onClick={() => {
              this.del(record.key);
            }}
          >
            Delete
          </a>
        </span>
      ),
    },
  ];

  render() {
    // eslint-disable-next-line react/react-in-jsx-scope,no-undef
    return <Table columns={this.columns} dataSource={this.props.cardList} />;
  }
}
