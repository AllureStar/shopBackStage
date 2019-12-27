// eslint-disable-next-line import/no-extraneous-dependencies
import { Form, Select, Radio,Input, Button } from 'antd';
import connect from 'dva';
// import  style from './style.less';


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

    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Form.Item label="商城的状态">
          {/* 验证规则 */}
          {getFieldDecorator('shopStatus', {
            rules: [{ required: true, message: '请写入你的真实姓名' }],
            // eslint-disable-next-line react/react-in-jsx-scope
          })(
            // eslint-disable-next-line react/react-in-jsx-scope
            <Radio.Group onChange='' value='1'>
              <Radio  value={1}>开启</Radio>
              <Radio value={2}>关闭</Radio>
            </Radio.Group>
          )}
          

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
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}



 export default Form.create()(Appl);

