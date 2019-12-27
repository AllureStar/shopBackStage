import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component, Fragment } from 'react';
import { List } from 'antd';

const passwordStrength = {
  strong: (
    <span className="strong">
      <FormattedMessage
        id="personalinfoandaccountsettings.security.strong"
        defaultMessage="Strong"
      />
    </span>
  ),
  medium: (
    <span className="medium">
      <FormattedMessage
        id="personalinfoandaccountsettings.security.medium"
        defaultMessage="Medium"
      />
    </span>
  ),
  weak: (
    <span className="weak">
      <FormattedMessage id="personalinfoandaccountsettings.security.weak" defaultMessage="Weak" />
      Weak
    </span>
  ),
};

class SecurityView extends Component {
  getData = () => [
    {
      title: formatMessage(
        {
          id: 'personalinfoandaccountsettings.security.password',
        },
        {},
      ),
      description: (
        <Fragment>
          {formatMessage({
            id: 'personalinfoandaccountsettings.security.password-description',
          })}
          ：{passwordStrength.strong}
        </Fragment>
      ),
      actions: [
        <a key="Modify">
          <FormattedMessage
            id="personalinfoandaccountsettings.security.modify"
            defaultMessage="Modify"
          />
        </a>,
      ],
    },
    {
      title: formatMessage(
        {
          id: 'personalinfoandaccountsettings.security.phone',
        },
        {},
      ),
      description: `${formatMessage(
        {
          id: 'personalinfoandaccountsettings.security.phone-description',
        },
        {},
      )}：138****8293`,
      actions: [
        <a key="Modify">
          <FormattedMessage
            id="personalinfoandaccountsettings.security.modify"
            defaultMessage="Modify"
          />
        </a>,
      ],
    },
    {
      title: formatMessage(
        {
          id: 'personalinfoandaccountsettings.security.question',
        },
        {},
      ),
      description: formatMessage(
        {
          id: 'personalinfoandaccountsettings.security.question-description',
        },
        {},
      ),
      actions: [
        <a key="Set">
          <FormattedMessage id="personalinfoandaccountsettings.security.set" defaultMessage="Set" />
        </a>,
      ],
    },
    {
      title: formatMessage(
        {
          id: 'personalinfoandaccountsettings.security.email',
        },
        {},
      ),
      description: `${formatMessage(
        {
          id: 'personalinfoandaccountsettings.security.email-description',
        },
        {},
      )}：ant***sign.com`,
      actions: [
        <a key="Modify">
          <FormattedMessage
            id="personalinfoandaccountsettings.security.modify"
            defaultMessage="Modify"
          />
        </a>,
      ],
    },
    {
      title: formatMessage(
        {
          id: 'personalinfoandaccountsettings.security.mfa',
        },
        {},
      ),
      description: formatMessage(
        {
          id: 'personalinfoandaccountsettings.security.mfa-description',
        },
        {},
      ),
      actions: [
        <a key="bind">
          <FormattedMessage
            id="personalinfoandaccountsettings.security.bind"
            defaultMessage="Bind"
          />
        </a>,
      ],
    },
  ];

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

export default SecurityView;
