import { Typography, Table, Button, Modal, Input, message } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SentPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null)
  const [forwardModalVisible, setForwardModalVisible] = useState(false)
  const [forwardEmail, setForwardEmail] = useState('')

  // Fetch sent emails
  const {
    data: sentEmails,
    isLoading,
    refetch,
  } = Api.emailData.findMany.useQuery({
    where: {
      senderId: user?.id,
      isDraft: false,
    },
    include: {
      recipients: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  // Delete mutation
  const { mutateAsync: deleteEmail } = Api.emailData.delete.useMutation()

  // Forward mutation
  const { mutateAsync: createEmail } = Api.emailData.create.useMutation()

  const handleDelete = async (emailId: string) => {
    try {
      await deleteEmail({
        where: { id: emailId },
      })
      message.success('Email deleted successfully')
      refetch()
    } catch (error) {
      message.error('Failed to delete email')
    }
  }

  const handleForward = async () => {
    if (!selectedEmail || !forwardEmail) return

    const emailToForward = sentEmails?.find(email => email.id === selectedEmail)
    if (!emailToForward) return

    try {
      await createEmail({
        data: {
          subject: `Fwd: ${emailToForward.subject}`,
          content: emailToForward.content,
          isDraft: false,
          isRead: false,
          senderId: user?.id,
          recipients: {
            create: [
              {
                type: 'TO',
                email: forwardEmail,
              },
            ],
          },
        },
      })
      message.success('Email forwarded successfully')
      setForwardModalVisible(false)
      setForwardEmail('')
      setSelectedEmail(null)
    } catch (error) {
      message.error('Failed to forward email')
    }
  }

  const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      render: (text: string, record: any) => (
        <Text
          onClick={() => navigate(`/email/${record.id}`)}
          style={{ cursor: 'pointer' }}
        >
          {text || '(No subject)'}
        </Text>
      ),
    },
    {
      title: 'Recipients',
      dataIndex: 'recipients',
      key: 'recipients',
      render: (recipients: any[]) => (
        <Text>{recipients?.map(r => r.email).join(', ')}</Text>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => (
        <Text>{dayjs(date).format('MMM D, YYYY h:mm A')}</Text>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            type="text"
            onClick={() => {
              setSelectedEmail(record.id)
              setForwardModalVisible(true)
            }}
          >
            <i className="las la-share"></i>
          </Button>
          <Button type="text" danger onClick={() => handleDelete(record.id)}>
            <i className="las la-trash-alt"></i>
          </Button>
        </div>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Title level={2}>
            <i
              className="las la-paper-plane"
              style={{ marginRight: '8px' }}
            ></i>
            Sent Emails
          </Title>
          <Text type="secondary">View and manage all emails you've sent</Text>
        </div>

        <Table
          columns={columns}
          dataSource={sentEmails}
          loading={isLoading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />

        <Modal
          title="Forward Email"
          open={forwardModalVisible}
          onOk={handleForward}
          onCancel={() => {
            setForwardModalVisible(false)
            setForwardEmail('')
            setSelectedEmail(null)
          }}
          okText="Forward"
        >
          <Input
            placeholder="Enter recipient email"
            value={forwardEmail}
            onChange={e => setForwardEmail(e.target.value)}
            prefix={<i className="las la-envelope"></i>}
          />
        </Modal>
      </div>
    </PageLayout>
  )
}
