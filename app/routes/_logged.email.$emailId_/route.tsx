import {
  Button,
  Typography,
  Space,
  Card,
  Input,
  Modal,
  Upload,
  message,
} from 'antd'
import { useState } from 'react'
import { Prisma } from '@prisma/client'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
type EmailWithRelations = Prisma.EmailDataGetPayload<{
  include: {
    sender: true
    recipients: { include: { user: true } }
    attachments: true
  }
}>
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EmailViewPage() {
  const { emailId } = useParams()
  const navigate = useNavigate()
  const [replyModalOpen, setReplyModalOpen] = useState(false)
  const [forwardModalOpen, setForwardModalOpen] = useState(false)
  const [replyContent, setReplyContent] = useState('')
  const [forwardEmails, setForwardEmails] = useState('')

  const { data: email, isLoading } = Api.emailData.findFirst.useQuery({
    where: { id: emailId },
    include: {
      sender: true,
      recipients: { include: { user: true } },
      attachments: true,
    },
  })

  const { mutateAsync: createEmail } = Api.emailData.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const handleReply = async () => {
    if (!email) return

    await createEmail({
      data: {
        subject: `Re: ${email.subject}`,
        content: replyContent,
        isDraft: false,
        isRead: false,
        senderId: email.sender?.id,
        recipients: {
          create: [{ type: 'TO', userId: email.sender?.id }],
        },
      },
    })

    message.success('Reply sent successfully')
    setReplyModalOpen(false)
    setReplyContent('')
  }

  const handleForward = async () => {
    if (!email) return
    const emailList = forwardEmails.split(',').map(e => e.trim())

    await createEmail({
      data: {
        subject: `Fwd: ${email.subject}`,
        content: `---------- Forwarded message ----------\nFrom: ${
          email.sender?.email
        }\nDate: ${dayjs(email.createdAt).format(
          'MMM D, YYYY h:mm A',
        )}\nSubject: ${email.subject}\n\n${email.content}`,
        isDraft: false,
        isRead: false,
        attachments: {
          create: email.attachments?.map(att => ({
            fileName: att.fileName,
            fileUrl: att.fileUrl,
            fileSize: att.fileSize,
            mimeType: att.mimeType,
          })),
        },
        recipients: {
          create: emailList.map(email => ({ type: 'TO', email })),
        },
      },
    })

    message.success('Email forwarded successfully')
    setForwardModalOpen(false)
    setForwardEmails('')
  }

  const downloadAttachment = (url?: string, fileName?: string) => {
    if (!url || !fileName) return
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (isLoading) return <PageLayout layout="full-width">Loading...</PageLayout>
  if (!email)
    return <PageLayout layout="full-width">Email not found</PageLayout>

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Button
              icon={<i className="las la-arrow-left" />}
              onClick={() => navigate('/home')}
            >
              Back
            </Button>
          </div>

          <Card>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Title level={4}>{email.subject}</Title>

              <Space>
                <i className="las la-user" />
                <Text strong>From:</Text>
                <Text>{email.sender?.email}</Text>
              </Space>

              <Space>
                <i className="las la-clock" />
                <Text>
                  {dayjs(email.createdAt).format('MMM D, YYYY h:mm A')}
                </Text>
              </Space>

              <Paragraph>{email.content}</Paragraph>

              {email.attachments && email.attachments.length > 0 && (
                <div>
                  <Text strong>Attachments:</Text>
                  <Space direction="vertical" style={{ marginTop: 8 }}>
                    {email.attachments.map(att => (
                      <Button
                        key={att.id}
                        icon={<i className="las la-paperclip" />}
                        onClick={() =>
                          downloadAttachment(att.fileUrl, att.fileName)
                        }
                      >
                        {att.fileName}
                      </Button>
                    ))}
                  </Space>
                </div>
              )}

              <Space>
                <Button
                  type="primary"
                  icon={<i className="las la-reply" />}
                  onClick={() => setReplyModalOpen(true)}
                >
                  Reply
                </Button>
                <Button
                  icon={<i className="las la-share" />}
                  onClick={() => setForwardModalOpen(true)}
                >
                  Forward
                </Button>
              </Space>
            </Space>
          </Card>
        </Space>

        <Modal
          title="Reply"
          open={replyModalOpen}
          onOk={handleReply}
          onCancel={() => setReplyModalOpen(false)}
        >
          <TextArea
            rows={4}
            value={replyContent}
            onChange={e => setReplyContent(e.target.value)}
            placeholder="Type your reply..."
          />
        </Modal>

        <Modal
          title="Forward"
          open={forwardModalOpen}
          onOk={handleForward}
          onCancel={() => setForwardModalOpen(false)}
        >
          <Input
            placeholder="Enter email addresses (comma-separated)"
            value={forwardEmails}
            onChange={e => setForwardEmails(e.target.value)}
          />
        </Modal>
      </div>
    </PageLayout>
  )
}
