import React, { useState } from 'react';
import { Form, Input, Icon, Button, message } from 'antd'
import styles from './index.less'
import { loginIn } from './service'

interface HomeProps {
  form: any
}
const Login : React.FC<HomeProps> = (props: HomeProps) => {
  const { getFieldDecorator } = props.form;
  const [ isLoading, setIsLoaning ] = useState(false)
  const login = () => {
    props.form.validateFields((err: any, values: any)=> {
      if (!err) {
        if (!values.username) {
          message.warning('请输入用户名！')
          return
        }
        if (!values.password) {
          message.warning('请输入密码!')
          return
        }
        let params = {
          username: values.username,
          password: values.password,
          action: 'login'
        }
        setIsLoaning(true)
        loginIn(params).then((res: any) => {
          console.log(res)
        })
        .catch((err: any) => {
          console.log(err)
        })
      }
    })
  }
  return (
    <div className={styles["login"]}>
      <div className={styles["login-form"]}>
        <Form>
          <Form.Item>
          {getFieldDecorator('username')(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />
          )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password')(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="default" onClick={login} block={true}>{isLoading ? '登录中...' : '登录'}</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Form.create()(Login)
