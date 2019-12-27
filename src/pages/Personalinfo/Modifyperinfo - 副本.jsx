// eslint-disable-next-line import/no-extraneous-dependencies
import { Form, Select, Input, Button } from 'antd';
import connect from 'dva';
import  style from './style.less';


// eslint-disable-next-line no-undef
class Appl extends React.Component {

  // 表单提交时会触发的方法
  // eslint-disable-next-line react/sort-comp
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 所有的数据
        console.log('Received values of form: ', values);
        // 发送到后端的API接口
        // eslint-disable-next-line no-undef
        axios.post('/model/userinfo/modyfiInfo',{
          
          value:values,
        })
        .then(res=>{
          this.props.modyfiInfo();
          console.log(res);
        })
      }
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
      // eslint-disable-next-line react/react-in-jsx-scope
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );




    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <Form className={style.from} labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item label="商城的状态">
          {/* 验证规则 */}
          {getFieldDecorator('truename', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}

        </Form.Item>
        <Form.Item label="商城的标题">
          {/* 验证规则 */}
          {getFieldDecorator('shoptitle', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}

        </Form.Item>
        {/* // eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item label="简单的描述">
          {/* 验证规则 */}
          {getFieldDecorator('shoptitle', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}

        </Form.Item>
        <Form.Item label="发货人员">
          {/* 验证规则 */}
          {getFieldDecorator('shoptitle', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}

        </Form.Item>
        <Form.Item label="财务人员">
          {/* 验证规则 */}
          {getFieldDecorator('shoptitle', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}

        </Form.Item>
        <Form.Item label="底部电话">
          {/* 验证规则 */}
          {getFieldDecorator('shoptitle', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}

        </Form.Item>
        <Form.Item label="服务热线">
          {/* 验证规则 */}
          {getFieldDecorator('shoptitle', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商务热线">
          {/* 验证规则 */}
          {getFieldDecorator('shoptitle', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}
        </Form.Item>
        <Form.Item label="分销系统">
          {/* 验证规则 */}
          {getFieldDecorator('shoptitle', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}
        </Form.Item>
        <Form.Item label="显示资源">
          {/* 验证规则 */}
          {getFieldDecorator('shoptitle', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}
        </Form.Item>
        

        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item label="  ">
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: '请输入你的手机号' },
              // 手机号的验证规则
              { pattern:/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/, message: '请正确输入手机号噢!!!' },
              ],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Please input your email!' },
              { type: 'email',message: 'The input is not valid E-mail!'},
              ],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(<Input />)}
        </Form.Item>


        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}



 export default Form.create()(Appl);

