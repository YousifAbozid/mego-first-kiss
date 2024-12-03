import { Typography, Table, Button, Space, Modal, message } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function DraftsPage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch draft emails
  const {
    data: drafts,
    isLoading,
    refetch,
  } = Api.emailData.findMany.useQuery({
    where: {
      isDraft: true,
      senderId: user?.id,
    },
    include: {
      recipients: true,
      attachments: true,
    },
  })

  // Delete draft mutation
  const { mutateAsync: deleteDraft } = Api.emailData.delete.useMutation()

  // Send draft mutation
  const { mutateAsync: updateDraft } = Api.emailData.update.useMutation()

  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: 'Delete Draft',
      content: 'Are you sure you want to delete this draft?',
      icon: <i className="las la-trash-alt" />,
      okText: 'Yes',
      cancelText: 'No',
      onOk: async () => {
        try {
          await deleteDraft({ where: { id } })
          message.success('Draft deleted successfully')
          refetch()
        } catch (error) {
          message.error('Failed to delete draft')
        }
      },
    })
  }

  const handleSend = async (id: string) => {
    Modal.confirm({
      title: 'Send Email',
      content: 'Are you sure you want to send this email?',
      icon: <i className="las la-paper-plane" />,
      okText: 'Yes',
      cancelText: 'No',
      onOk: async () => {
        try {
          await updateDraft({
            where: { id },
            data: { isDraft: false, status: 'SENT' },
          })
          message.success('Email sent successfully')
          refetch()
        } catch (error) {
          message.error('Failed to send email')
        }
      },
    })
  }

  const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      render: (text: string) => text || '(No subject)',
    },
    {
      title: 'Recipients',
      dataIndex: 'recipients',
      key: 'recipients',
      render: (recipients: any[]) =>
        recipients
          ?.map(r => (r.type === 'TO' ? r.user?.email : null))
          .filter(Boolean)
          .join(', ') || 'No recipients',
    },
    {
      title: 'Attachments',
      dataIndex: 'attachments',
      key: 'attachments',
      render: (attachments: any[]) => attachments?.length || 0,
    },
    {
      title: 'Last Modified',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (date: string) => dayjs(date).format('MMM D, YYYY HH:mm'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            icon={<i className="las la-edit" />}
            onClick={() => navigate(`/compose?draft=${record.id}`)}
          >
            Edit
          </Button>
          <Button
            icon={<i className="las la-paper-plane" />}
            onClick={() => handleSend(record.id)}
          >
            Send
          </Button>
          <Button
            danger
            icon={<i className="las la-trash-alt" />}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>
            <i className="las la-envelope" style={{ marginRight: 8 }} />
            Draft Emails
          </Title>
          <Text type="secondary">
            Manage your saved email drafts. You can continue editing, send, or
            delete them.
          </Text>
        </div>

        <Table
          columns={columns}
          dataSource={drafts}
          loading={isLoading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          locale={{ emptyText: 'No draft emails found' }}
        />
      </div>
    </PageLayout>
  )
}
