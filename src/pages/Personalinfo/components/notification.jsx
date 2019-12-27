import { List, Switch } from 'antd';
import React, { Component, Fragment } from 'react';
import { formatMessage } from 'umi-plugin-react/locale';

class NotificationView extends Component {
  getData = () => {
    const Action = (
      <Switch
        checkedChildren={formatMessage({
          id: 'personalinfoandaccountsettings.settings.open',
        })}
        unCheckedChildren={formatMessage({
          id: 'personalinfoandaccountsettings.settings.close',
        })}
        defaultChecked
      />
    );
    return [
      {
        title: formatMessage(
          {
            id: 'personalinfoandaccountsettings.notification.password',
          },
          {},
        ),
        description: formatMessage(
          {
            id: 'personalinfoandaccountsettings.notification.password-description',
          },
          {},
        ),
        actions: [Action],
      },
      {
        title: formatMessage(
          {
            id: 'personalinfoandaccountsettings.notification.messages',
          },
          {},
        ),
        description: formatMessage(
          {
            id: 'personalinfoandaccountsettings.notification.messages-description',
          },
          {},
        ),
        actions: [Action],
      },
      {
        title: formatMessage(
          {
            id: 'personalinfoandaccountsettings.notification.todo',
          },
          {},
        ),
        description: formatMessage(
          {
            id: 'personalinfoandaccountsettings.notification.todo-description',
          },
          {},
        ),
        actions: [Action],
      },
    ];
  };

  render() {
    const data = this.getData();
    return (
      <Fragment>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default NotificationView;
