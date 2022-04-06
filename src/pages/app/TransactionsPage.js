import { Button, Menu, PageHeader, Space, Tag } from 'antd';
import { FaArrowDown, FaArrowUp, FaCoins } from 'react-icons/fa';
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';

export default function TransactionsPage() {
  return (
    <Page title="Transactions | ETNY" className="bg-gray-50 p-2 h-full">
      <HeaderBreadcrumbs links={[{ name: 'Transactions', href: '/transactions' }]} />
      <PageHeader
        title={<span className="text-black dark:text-white">Transactions</span>}
        extra={[
          <Button key="3">
            <Space>
              <FaArrowUp className="pt-1" />
              Send
            </Space>
          </Button>,
          <Button key="2">
            <Space>
              <FaArrowDown className="pt-1" />
              Receive
            </Space>
          </Button>,
          <Button key="1" type="primary">
            <Space>
              <FaCoins className="pt-1" />
              Stake
            </Space>
          </Button>
        ]}
      />
    </Page>
  );
}
