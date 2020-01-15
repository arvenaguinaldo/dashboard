import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Typography, Button, Form, Collapse, Row, Col, Popconfirm } from 'antd'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import DashboardLayout from '../../layouts/DashboardLayout'
import { AntInput } from "../../components/FormikField/FormikField";
import { formItemLayout, tailFormItemLayout } from '../../utils/constant'
import { updateMerchant, fetchMerchant } from '../../redux/actions/merchants';
import './Dashboard.less'

const { Title } = Typography;
const { Panel } = Collapse;

const validationSchema = Yup.object().shape({
  name: Yup.string().max(80, 'Must be shorter than 35').required('This field is Required'),
  shipping_fee: Yup.object().shape({
    metro_manila: Yup.object().shape({
        box: Yup.number(null,"Must be a number").required('This field is Required'),
        oversized: Yup.number("Must be a number").required('This field is Required'),
        big_pouch: Yup.number("Must be a number").required('This field is Required'),
        small_pouch: Yup.number("Must be a number").required('This field is Required'),
    }),
    provincial: Yup.object().shape({
        box: Yup.number("Must be a number").required('This field is Required'),
        oversized: Yup.number("Must be a number").required('This field is Required'),
        big_pouch: Yup.number("Must be a number").required('This field is Required'),
        small_pouch: Yup.number("Must be a number").required('This field is Required'),
    }),
    intra_provincial: Yup.object().shape({
        box: Yup.number("Must be a number").required('This field is Required'),
        oversized: Yup.number("Must be a number").required('This field is Required'),
        big_pouch: Yup.number("Must be a number").required('This field is Required'),
        small_pouch: Yup.number("Must be a number").required('This field is Required'),
    })
  }),
})

export class EditMerchant extends Component {
  state = {
    merchant: {}
  }
  componentDidMount() {
    const {match: {params}} = this.props;
    this.props.fetchMerchant(params.id);
  }

  render() {
    const { merchant } = this.props

    return (
      <DashboardLayout>
        <div className="page-header">
          <Title level={2} className="page-header-title">Edit Merchant Info</Title>
        </div>

        <div className="page-form">
          <Formik
            validationSchema={validationSchema}
            initialValues={merchant}
            enableReinitialize
            onSubmit={(values, {setSubmitting, resetForm}) => {
            setSubmitting(false);

              this.props.updateMerchant(values)

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
                          type="number"
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
                          type="number"
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
                          type="number"
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
                          type="number"
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
                          type="number"
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
                          type="number"
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
                          type="number"
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
                          type="number"
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
                          type="number"
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
                          type="number"
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
                          type="number"
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
                          type="number"
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
                    icon="edit"
                    style={{marginRight: 16}}
                    disabled={isSubmitting}
                  >
                    Update
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

const mapStateToProps = state => {
  return {
    merchant: state.merchants.merchant
  };
};

const mapDispatchToProps =  {
  fetchMerchant,
  updateMerchant
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMerchant)
