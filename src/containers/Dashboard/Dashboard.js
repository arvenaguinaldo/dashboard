import React, { Component } from 'react'
import { connect } from 'react-redux';
import DashboardLayout from '../../layouts/DashboardLayout'
import { Table, Divider, Typography, Button, Modal} from 'antd'
import { fetchMerchants, deleteMerchant } from '../../redux/actions/merchants';
import './Dashboard.less'

const { Title } = Typography;
const { confirm } = Modal



export class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchMerchants();
  }

  handleDelete = (id) => {
    const { deleteMerchant } = this.props;
    confirm({
      title: `Are you sure you want to delete this Merchant?`,
      onOk() {
        deleteMerchant(id)
      }
    })
  }

  render() {
    const { merchants } = this.props

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => text,
      },
      {
        title: 'Action',
        key: 'action',
        width: 400,
        render: (text, record) => (
          <span>
            <Button
              onClick={() => this.props.history.push(`/dashboard/editmerchant/${record.id}`)}
            >
              Edit
            </Button>
            <Divider type="vertical" />
            <Button
              type="danger"
              onClick={() => this.handleDelete(record.id)}
            >
              Delete
            </Button>
          </span>
        ),
      },
    ];

    return (
      <DashboardLayout>
        <div className="page-header">
          <Title level={2} className="page-header-title">List of Merchandise</Title>

          <Button
            type="primary"
            className="page-header-button"
            icon="plus"
            onClick={() => this.props.history.push('/dashboard/addmerchant')}
            >
            Add Merchant
          </Button>
        </div>

        <Table columns={columns} dataSource={merchants.merchants} rowKey={record => record.id} />
      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    merchants: state.merchants
  };
};

const mapDispatchToProps =  {
  fetchMerchants,
  deleteMerchant
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
