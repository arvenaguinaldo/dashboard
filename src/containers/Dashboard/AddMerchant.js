import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as uuid from 'uuid/v4';
import { Typography, Button, Form, Collapse, Row, Col, Popconfirm } from 'antd'
import { Formik, Field } from 'formik';
import DashboardLayout from '../../layouts/DashboardLayout'
import { AntInput } from "../../components/FormikField/FormikField";
import { formItemLayout, tailFormItemLayout } from '../../utils/constant'
import { addMerchant } from '../../redux/actions/merchants';
import './Dashboard.less'

const { Title } = Typography;
const { Panel } = Collapse;

export class AddMerchant extends Component {

  render() {
    const { item = {}} = this.props

    return (
      <DashboardLayout>
        <div className="page-header">
          <Title level={2} className="page-header-title">Add New Merchant</Title>
        </div>

        <div className="page-form">
          <Formik
            initialValues={item}
            enableReinitialize
            onSubmit={(values, {setSubmitting, resetForm}) => {
            setSubmitting(false);

              this.props.addMerchant({id: uuid(), ...values})

              this.props.history.push('/dashboard')

              }}
            >
            {({
              values,
              handleSubmit,
              isSubmitting,
              submitCount,
            }) => (
              <Form layout="horizontal" onSubmit={handleSubmit} {...formItemLayout}>
                <Title level={4}>Merchant Name</Title>
                <Field
                  component={AntInput}
                  placeholder="Email"
                  name="name"
                  type="text"
                  required
                  submitCount={submitCount}
                  hasFeedback
                />

                <Title level={4}>Shipping fee</Title>
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="Metro Manila" key="1">
                    <Row gutter={8}>
                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Box"
                          name="shipping_fee.metro_manila.box"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>

                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Oversized"
                          name="shipping_fee.metro_manila.oversized"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Big Pouch"
                          name="shipping_fee.metro_manila.big_pouch"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>

                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Small Pouch"
                          name="shipping_fee.metro_manila.small_pouch"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>
                    </Row>
                  </Panel>
                  <Panel header="Provincial" key="2">
                    <Row gutter={8}>
                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Box"
                          name="shipping_fee.provincial.box"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>

                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Oversized"
                          name="shipping_fee.provincial.oversized"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Big Pouch"
                          name="shipping_fee.provincial.big_pouch"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>

                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Small Pouch"
                          name="shipping_fee.provincial.small_pouch"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>
                    </Row>
                  </Panel>
                  <Panel header="Intra Provincial" key="3" >
                    <Row gutter={8}>
                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Box"
                          name="shipping_fee.intra_provincial.box"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>

                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Oversized"
                          name="shipping_fee.intra_provincial.oversized"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Big Pouch"
                          name="shipping_fee.intra_provincial.big_pouch"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>

                      <Col span={12}>
                        <Field
                          component={AntInput}
                          label="Small Pouch"
                          name="shipping_fee.intra_provincial.small_pouch"
                          type="text"
                          required
                          submitCount={submitCount}
                          hasFeedback
                        />
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>

                <Form.Item style={{padding: '10px 0px'}} {...tailFormItemLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon="upload"
                    style={{marginRight: 16}}
                    disabled={isSubmitting}
                  >
                    Save
                  </Button>


                  <Popconfirm
                    placement="top"
                    title='Discard changes?'
                    onConfirm={() => this.props.history.push('/dashboard')}
                    okText="Discard"
                    cancelText="Cancel"
                    disabled={isSubmitting}
                  >
                    <Button>Cancel</Button>
                  </Popconfirm>
                </Form.Item>
              </Form>
            )}
          </Formik>
        </div>
      </DashboardLayout>
    )
  }
}

const mapDispatchToProps =  {
  addMerchant
};

export default connect(
  null,
  mapDispatchToProps
)(AddMerchant)
