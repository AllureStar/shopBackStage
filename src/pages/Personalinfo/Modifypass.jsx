
// import { Form, Select, Input, Button } from 'antd';
// import  style from './style.less';
//
//
//
// // eslint-disable-next-line no-undef
// class App extends React.Component {
//
//   // 表单提交时会触发的方法
//   // eslint-disable-next-line react/sort-comp
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         // 所有的数据
//         console.log('Received values of form: ', values);
//         // 发送到后端的API接口
//         // eslint-disable-next-line no-undef
//         dispatch({
//           type: 'userinfo/modify',
//           payload: values,
//         });
//       }
//     });
//   };
//
//
//   // 元素挂载完成之后  设置表单的内容
//   componentDidMount( ) {
//
//     this.props.form.setFieldsValue({
//       "truename":"唐启优",
//     });
//     this.props.form.setFieldsValue({
//       "phone":"13552939619",
//     });
//     this.props.form.setFieldsValue({
//       "email":"qiyoutang@qq.com",
//     })
//
//   }
//
//
//   render() {
//     const { getFieldDecorator } = this.props.form;
//
//     // 验证手机号
//     const prefixSelector = getFieldDecorator('prefix', {
//       initialValue: '86',
//     })(
//       <Select style={{ width: 70 }}>
//         <Option value="86">+86</Option>
//         <Option value="87">+87</Option>
//       </Select>,
//     );
//
//
//
//
//     return (
//       // eslint-disable-next-line react/react-in-jsx-scope
//       <Form className={style.from} labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
//         <Form.Item label="用户名">
//              <span className="ant-form-text">1355293961928202123</span>
//            </Form.Item >
//         <Form.Item label="最后登录的时间">
//            <span className="ant-form-text">2019-12-23 09:33:32</span>
//          </Form.Item>
//          <Form.Item label="最后登录ip">
//            <span className="ant-form-text">123.112.22.199</span>
//          </Form.Item>
//         {/* eslint-disable-next-line react/react-in-jsx-scope */}
//         <Form.Item label="真实姓名">
//           {/* 验证规则 */}
//           {getFieldDecorator('truename', {
//             rules: [{ required: true, message: '请写入你的真实姓名' }],
//             // eslint-disable-next-line react/react-in-jsx-scope
//           })(<Input />)}
//
//         </Form.Item>
//
//         {/* eslint-disable-next-line react/react-in-jsx-scope */}
//         <Form.Item label=" 手机号码s ">
//           {getFieldDecorator('phone', {
//             rules: [
//               { required: true, message: '请输入你的手机号' },
//               // 手机号的验证规则
//               { pattern:/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/, message: '请正确输入手机号噢!!!' },
//               ],
//             // eslint-disable-next-line react/react-in-jsx-scope
//           })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
//         </Form.Item>
//         {/* eslint-disable-next-line react/react-in-jsx-scope */}
//         <Form.Item label="E-mail">
//           {getFieldDecorator('email', {
//             rules: [
//               { required: true, message: 'Please input your email!' },
//               { type: 'email',message: 'The input is not valid E-mail!'},
//               ],
//             // eslint-disable-next-line react/react-in-jsx-scope
//           })(<Input />)}
//         </Form.Item>
//
//
//         {/* eslint-disable-next-line react/react-in-jsx-scope */}
//         <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
//           {/* eslint-disable-next-line react/react-in-jsx-scope */}
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   }
// }
//
// const WrappedApp = Form.create({ name: 'coordinated' })(App);
//
// export default WrappedApp;


// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line import/no-extraneous-dependencies
import { Form, Select, Input, Button } from 'antd';
import  style from './style.less';



// eslint-disable-next-line no-undef
class App extends React.Component {

  // 表单提交时会触发的方法
  // eslint-disable-next-line react/sort-comp
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };

  // 元素挂载完成之后  设置表单的内容
  componentDidMount( ) {

    this.props.form.setFieldsValue({
      "truename":"唐启优",
    });
    this.props.form.setFieldsValue({
      "phone":"13552939619",
    });
    this.props.form.setFieldsValue({
      "email":"qiyoutang@qq.com",
    })

  }


  render() {
    const { getFieldDecorator } = this.props.form;

    // 验证手机号
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );




    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <Form className={style.from} labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="用户名">
          <span className="ant-form-text">1355293961928202123</span>
        </Form.Item >
        <Form.Item label="E-mail">
          <span className="ant-form-text">qiyoutang@qq.com</span>
        </Form.Item>

        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item label="旧密码">
          {/* 验证规则 */}
          {getFieldDecorator('oldpass', {
            rules: [{ required: true, message: '请输入你的旧密码' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}

        </Form.Item>
        {/* // eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item label="新密码">
          {/* 验证规则 */}
          {getFieldDecorator('mewpass', {
            rules: [{ required: true, message: '请写入新的密码' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}
        </Form.Item>


        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item label="重复新密码">
          {/* 验证规则 */}
          {getFieldDecorator('renewpass', {
            rules: [{ required: true, message: '请重复输入新密码' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}
        </Form.Item>

        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedApp = Form.create({ name: 'coordinated' })(App);

export default WrappedApp;
