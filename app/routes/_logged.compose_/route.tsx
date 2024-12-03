import {
  Button,
  Form,
  Input,
  Upload,
  Typography,
  Space,
  Card,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ComposeEmailPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [attachments, setAttachments] = useState<
    { fileName: string; fileUrl: string; fileSize: string; mimeType: string }[]
  >([])
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: createEmail } = Api.emailData.create.useMutation()

  const handleSubmit = async (values: any) => {
    try {
      const emailData = {
        subject: values.subject,
        content: values.content,
        isDraft: false,
        isRead: true,
        status: 'SENT',
        senderId: user?.id,
        attachments: {
          create: attachments,
        },
        recipients: {
          create: [
            ...values.to
              .split(',')
              .map((email: string) => ({ type: 'TO', email: email.trim() })),
            ...(values.cc
              ? values.cc
                  .split(',')
                  .map((email: string) => ({ type: 'CC', email: email.trim() }))
              : []),
            ...(values.bcc
              ? values.bcc
                  .split(',')
                  .map((email: string) => ({
                    type: 'BCC',
                    email: email.trim(),
                  }))
              : []),
          ],
        },
      }

      await createEmail({ data: emailData })
      message.success('Email sent successfully!')
      navigate('/sent')
    } catch (error) {
      message.error('Failed to send email')
    }
  }

  const handleSaveDraft = async () => {
    try {
      const values = await form.validateFields()
      const emailData = {
        subject: values.subject,
        content: values.content,
        isDraft: true,
        isRead: true,
        status: 'DRAFT',
        senderId: user?.id,
        attachments: {
          create: attachments,
        },
        recipients: {
          create: [
            ...values.to
              .split(',')
              .map((email: string) => ({ type: 'TO', email: email.trim() })),
            ...(values.cc
              ? values.cc
                  .split(',')
                  .map((email: string) => ({ type: 'CC', email: email.trim() }))
              : []),
            ...(values.bcc
              ? values.bcc
                  .split(',')
                  .map((email: string) => ({
                    type: 'BCC',
                    email: email.trim(),
                  }))
              : []),
          ],
        },
      }

      await createEmail({ data: emailData })
      message.success('Draft saved successfully!')
      navigate('/drafts')
    } catch (error) {
      message.error('Failed to save draft')
    }
  }

  const handleFileUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      setAttachments([
        ...attachments,
        {
          fileName: file.name,
          fileUrl: url,
          fileSize: (file.size / 1024).toFixed(2) + ' KB',
          mimeType: file.type,
        },
      ])
      return false // Prevent default upload behavior
    } catch (error) {
      message.error('Failed to upload file')
      return false
    }
  }

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={4}>
              <i className="las la-envelope"></i> Compose New Email
            </Title>
            <Text type="secondary">
              Create and send emails to multiple recipients
            </Text>
          </div>

          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="to"
              label="To"
              rules={[{ required: true, message: 'Please enter recipients' }]}
            >
              <Input placeholder="Enter email addresses (comma-separated)" />
            </Form.Item>

            <Form.Item name="cc" label="CC">
              <Input placeholder="Enter CC email addresses (comma-separated)" />
            </Form.Item>

            <Form.Item name="bcc" label="BCC">
              <Input placeholder="Enter BCC email addresses (comma-separated)" />
            </Form.Item>

            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: 'Please enter a subject' }]}
            >
              <Input placeholder="Enter email subject" />
            </Form.Item>

            <Form.Item
              name="content"
              label="Content"
              rules={[
                { required: true, message: 'Please enter email content' },
              ]}
            >
              <TextArea
                rows={10}
                placeholder="Write your email content here..."
              />
            </Form.Item>

            <Form.Item label="Attachments">
              <Upload
                beforeUpload={handleFileUpload}
                fileList={attachments.map((att, index) => ({
                  uid: index.toString(),
                  name: att.fileName,
                  status: 'done',
                  url: att.fileUrl,
                }))}
              >
                <Button icon={<i className="las la-paperclip"></i>}>
                  Add Attachment
                </Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<i className="las la-paper-plane"></i>}
                >
                  Send Email
                </Button>
                <Button
                  onClick={handleSaveDraft}
                  icon={<i className="las la-save"></i>}
                >
                  Save as Draft
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </PageLayout>
  )
}
