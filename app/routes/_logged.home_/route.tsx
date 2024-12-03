import { Typography, Table, Button, Switch, Modal, message } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedEmails, setSelectedEmails] = useState<string[]>([])

  // Fetch emails
  const {
    data: emails,
    isLoading,
    refetch,
  } = Api.emailData.findMany.useQuery({
    where: {
      recipients: {
        some: {
          userId: user?.id,
        },
      },
      isDraft: false,
    },
    include: {
      sender: true,
      recipients: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  // Mutations
  const { mutateAsync: deleteEmail } = Api.emailData.delete.useMutation()
  const { mutateAsync: updateEmail } = Api.emailData.update.useMutation()

  // Handlers
  const handleCompose = () => {
    navigate('/compose')
  }

  const handleDelete = async (emailId: string) => {
    try {
      await deleteEmail({ where: { id: emailId } })
      message.success('Email deleted successfully')
      refetch()
    } catch (error) {
      message.error('Failed to delete email')
    }
  }

  const handleToggleRead = async (
    emailId: string,
    currentReadStatus: boolean,
  ) => {
    try {
      await updateEmail({
        where: { id: emailId },
        data: { isRead: !currentReadStatus },
      })
      refetch()
    } catch (error) {
      message.error('Failed to update email status')
    }
  }

  const handleViewEmail = (emailId: string) => {
    navigate(`/email/${emailId}`)
  }

  // Table columns
  const columns = [
    {
      title: 'Status',
      key: 'status',
      width: 70,
      render: (record: any) => (
        <i
          className={`las ${
            record.isRead ? 'la-envelope-open' : 'la-envelope'
          }`}
          style={{ fontSize: '20px', cursor: 'pointer' }}
          onClick={() => handleToggleRead(record.id, record.isRead)}
        />
      ),
    },
    {
      title: 'From',
      dataIndex: ['sender', 'email'],
      key: 'sender',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      render: (text: string, record: any) => (
        <Text
          style={{
            cursor: 'pointer',
            fontWeight: record.isRead ? 'normal' : 'bold',
          }}
          onClick={() => handleViewEmail(record.id)}
        >
          {text}
        </Text>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'date',
      render: (date: string) => dayjs(date).format('MMM D, YYYY HH:mm'),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 100,
      render: (record: any) => (
        <Button
          type="text"
          danger
          icon={<i className="las la-trash-alt" />}
          onClick={() => handleDelete(record.id)}
        />
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <Title level={2}>
            <i className="las la-inbox" style={{ marginRight: '8px' }} />
            Email Inbox
          </Title>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Switch
              checkedChildren={<i className="las la-moon" />}
              unCheckedChildren={<i className="las la-sun" />}
              checked={isDarkMode}
              onChange={checked => setIsDarkMode(checked)}
            />
            <Button
              type="primary"
              icon={<i className="las la-pen" />}
              onClick={handleCompose}
            >
              Compose
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={emails}
          loading={isLoading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          style={{
            background: isDarkMode ? '#141414' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
          }}
        />
      </div>
    </PageLayout>
  )
}
