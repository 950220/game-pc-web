import React from 'react';
import { Form, Input, Icon, Button } from 'antd'
import styles from './index.less'


interface HomeProps {
  form: any
}
const Login : React.FC<HomeProps> = (props: HomeProps) => {
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  const login = () => {

  }
  return (
    <div className={styles["login"]}>
      <div className={styles["login-form"]}>
        <Form>
          <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="default" onClick={login} block>登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Form.create()(Login)