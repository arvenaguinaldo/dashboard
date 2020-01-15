import React, { Component } from 'react'
import { Form, Button, message } from 'antd'
import { Formik, Field} from 'formik';
import { AntInput, AntInputPassword } from "../../components/FormikField/FormikField";

import './Login.less'

export class Login extends Component {

  login = (values) => {
    if (values.email === 'admin@example.com' && values.password === 'admin') {
      localStorage.setItem('isAuthenticated', true);
      this.props.history.push('/dashboard')
    } else {
      message.error('Email and Password is Incorrect');
    }
  }

  render() {
    const { item = {}} = this.props
    return (
      <React.Fragment>
        <div className="form">

          <div className="logo">
            {/* <img alt="logo" src={config.logoPath} /> */}
            <span>QuadX</span>
          </div>

            <Formik
              initialValues={item}
              enableReinitialize
              onSubmit={(values, {setSubmitting, resetForm}) => {
              setSubmitting(false);
              this.login(values)
              }}
            >
            {({
              values,
              handleSubmit,
              isSubmitting,
              submitCount,
            }) => (
            <Form layout="horizontal" onSubmit={handleSubmit}>
              <Field
                component={AntInput}
                placeholder="Email"
                name="email"
                type="text"
                required
                submitCount={submitCount}
                hasFeedback
              />

              <Field
                component={AntInputPassword}
                placeholder="Password"
                name="password"
                type="password"
                required
                submitCount={submitCount}
                hasFeedback
              />

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            )}
          </Formik>
        </div>
      </React.Fragment>
    )
  }
}

export default Login
