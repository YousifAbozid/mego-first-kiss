import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0066933c-b15e-415c-b5c7-caf79312c5e1', '1Jesse_Wintheiser21@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f6c32d6f-ec20-46d5-aeb3-4cfdf7bf8bab', '9Oran.Corkery15@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=11', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a22efe35-47b4-481b-8578-e835503f2d84', '25Margarita37@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=27', 'stu901vwx234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a5b7ab0f-803c-4562-b4d6-f4f06c7efe5f', '33Joannie_Ritchie@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=35', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c8baf97f-892b-4f06-b9b9-5c77ffffc151', '41Faustino56@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f43872a0-3cfe-4805-a996-4acd81ea0777', '49Nya97@yahoo.com', 'Charlie Miller', 'https://i.imgur.com/YfJQV5z.png?id=51', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('ffcc148b-0898-4cde-b9df-a4a494558344', '57Nayeli_Armstrong89@gmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=59', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('bdb86311-097e-4e28-87e3-bd7318afb0e7', '65Fredrick_Lynch@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=67', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('466d820e-3b69-4650-bc54-b30938ca86b9', '73Allen47@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=75', 'stu901vwx234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "EmailData" ("id", "subject", "content", "status", "isDraft", "isRead", "senderId") VALUES ('91ae2fa2-f3fa-4c13-84ec-4144b1b2d28a', 'Invitation to Join', 'Thank you for your purchase Your order has been confirmed.', 'sent', false, false, '0066933c-b15e-415c-b5c7-caf79312c5e1');
INSERT INTO "EmailData" ("id", "subject", "content", "status", "isDraft", "isRead", "senderId") VALUES ('712c76f2-477a-40a4-aaac-0617075af989', 'Password Reset Request', 'Thank you for your purchase Your order has been confirmed.', 'pending', false, false, 'ffcc148b-0898-4cde-b9df-a4a494558344');
INSERT INTO "EmailData" ("id", "subject", "content", "status", "isDraft", "isRead", "senderId") VALUES ('4be1f802-1d9e-4d3b-a9ac-88ca4cccd00a', 'Weekly Newsletter', 'Dont forget about the meeting scheduled for tomorrow at 10 AM.', 'scheduled', false, true, '466d820e-3b69-4650-bc54-b30938ca86b9');
INSERT INTO "EmailData" ("id", "subject", "content", "status", "isDraft", "isRead", "senderId") VALUES ('553fbc41-652c-47ae-9d89-8f19af089d67', 'Password Reset Request', 'You have been invited to join our exclusive event. RSVP now', 'sent', true, false, '0066933c-b15e-415c-b5c7-caf79312c5e1');
INSERT INTO "EmailData" ("id", "subject", "content", "status", "isDraft", "isRead", "senderId") VALUES ('93878962-1260-4328-950e-b7b1a52cf5b2', 'Invitation to Join', 'You have been invited to join our exclusive event. RSVP now', 'scheduled', true, false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EmailData" ("id", "subject", "content", "status", "isDraft", "isRead", "senderId") VALUES ('fcd2cc37-42de-4c93-b6a9-6b0802548e9e', 'Weekly Newsletter', 'We received a request to reset your password. Click the link below to proceed.', 'draft', true, false, 'c8baf97f-892b-4f06-b9b9-5c77ffffc151');
INSERT INTO "EmailData" ("id", "subject", "content", "status", "isDraft", "isRead", "senderId") VALUES ('9f84dc20-df41-4baf-ac37-db0c71e9b1ca', 'Invitation to Join', 'Dont forget about the meeting scheduled for tomorrow at 10 AM.', 'scheduled', true, false, 'bdb86311-097e-4e28-87e3-bd7318afb0e7');
INSERT INTO "EmailData" ("id", "subject", "content", "status", "isDraft", "isRead", "senderId") VALUES ('48c2f350-a6b3-4666-aa16-8d7730d33790', 'Weekly Newsletter', 'We received a request to reset your password. Click the link below to proceed.', 'sent', false, false, 'bdb86311-097e-4e28-87e3-bd7318afb0e7');
INSERT INTO "EmailData" ("id", "subject", "content", "status", "isDraft", "isRead", "senderId") VALUES ('312ce38a-3fc7-4e14-8600-e15b5141862a', 'Your Order Confirmation', 'Check out the latest updates and news in our weekly newsletter.', 'draft', true, true, 'bdb86311-097e-4e28-87e3-bd7318afb0e7');
INSERT INTO "EmailData" ("id", "subject", "content", "status", "isDraft", "isRead", "senderId") VALUES ('907306a4-6063-4bad-8bc8-e8e99f67716f', 'Password Reset Request', 'Thank you for your purchase Your order has been confirmed.', 'failed', true, true, 'a22efe35-47b4-481b-8578-e835503f2d84');

INSERT INTO "Recipient" ("id", "type", "emailId", "userId") VALUES ('95a220a3-1ec6-4d4d-9f88-3f8087bac049', 'Other', '9f84dc20-df41-4baf-ac37-db0c71e9b1ca', 'c8baf97f-892b-4f06-b9b9-5c77ffffc151');
INSERT INTO "Recipient" ("id", "type", "emailId", "userId") VALUES ('16b6154a-eff9-4e89-838d-fc5ba9d5deef', 'Family', '553fbc41-652c-47ae-9d89-8f19af089d67', 'f6c32d6f-ec20-46d5-aeb3-4cfdf7bf8bab');
INSERT INTO "Recipient" ("id", "type", "emailId", "userId") VALUES ('cb170457-d0ac-4ef2-bcb7-b0fd3a17cdbf', 'Work', '9f84dc20-df41-4baf-ac37-db0c71e9b1ca', '0066933c-b15e-415c-b5c7-caf79312c5e1');
INSERT INTO "Recipient" ("id", "type", "emailId", "userId") VALUES ('fec6faaa-f140-4bf4-a43e-ade3b98361bc', 'Work', '48c2f350-a6b3-4666-aa16-8d7730d33790', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Recipient" ("id", "type", "emailId", "userId") VALUES ('88538dbd-0f18-42c8-a49a-a351927bbe18', 'Work', '91ae2fa2-f3fa-4c13-84ec-4144b1b2d28a', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Recipient" ("id", "type", "emailId", "userId") VALUES ('9cc2f1f9-6600-41e3-8a1e-9fd101879ad5', 'Friend', '91ae2fa2-f3fa-4c13-84ec-4144b1b2d28a', 'a22efe35-47b4-481b-8578-e835503f2d84');
INSERT INTO "Recipient" ("id", "type", "emailId", "userId") VALUES ('0a40ec40-f346-43f9-9f39-5b9d402b87fe', 'Other', '712c76f2-477a-40a4-aaac-0617075af989', 'a22efe35-47b4-481b-8578-e835503f2d84');
INSERT INTO "Recipient" ("id", "type", "emailId", "userId") VALUES ('69c8f7f9-073f-43dc-b8bc-b362a6fbfe65', 'Work', '9f84dc20-df41-4baf-ac37-db0c71e9b1ca', 'ffcc148b-0898-4cde-b9df-a4a494558344');
INSERT INTO "Recipient" ("id", "type", "emailId", "userId") VALUES ('31c376aa-459b-4236-bbf6-eb9bccd98f4a', 'Work', '712c76f2-477a-40a4-aaac-0617075af989', '466d820e-3b69-4650-bc54-b30938ca86b9');
INSERT INTO "Recipient" ("id", "type", "emailId", "userId") VALUES ('b6728fe4-2871-47b7-9817-950736bf4c85', 'Family', '93878962-1260-4328-950e-b7b1a52cf5b2', 'c8baf97f-892b-4f06-b9b9-5c77ffffc151');

INSERT INTO "Attachment" ("id", "fileName", "fileUrl", "fileSize", "mimeType", "emailId") VALUES ('35b4a468-5ec4-4474-9b6a-0fc202c9320d', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=161', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=162', '2025-06-03T23:05:17.557Z', 'applicationvnd.mspowerpoint', '48c2f350-a6b3-4666-aa16-8d7730d33790');
INSERT INTO "Attachment" ("id", "fileName", "fileUrl", "fileSize", "mimeType", "emailId") VALUES ('01dc6311-4945-4a18-bda6-a521828ba9f0', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=166', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=167', '2024-01-12T21:46:32.460Z', 'applicationvnd.mspowerpoint', '48c2f350-a6b3-4666-aa16-8d7730d33790');
INSERT INTO "Attachment" ("id", "fileName", "fileUrl", "fileSize", "mimeType", "emailId") VALUES ('e13cf975-a206-4d0b-ad39-e83e65aa1081', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=171', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=172', '2024-03-03T22:14:27.456Z', 'applicationvnd.openxmlformatsofficedocument.spreadsheetml.sheet', '553fbc41-652c-47ae-9d89-8f19af089d67');
INSERT INTO "Attachment" ("id", "fileName", "fileUrl", "fileSize", "mimeType", "emailId") VALUES ('86b1810f-8e84-4efc-9649-77e890306e9e', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=176', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=177', '2025-09-03T18:25:51.898Z', 'textplain', 'fcd2cc37-42de-4c93-b6a9-6b0802548e9e');
INSERT INTO "Attachment" ("id", "fileName", "fileUrl", "fileSize", "mimeType", "emailId") VALUES ('0d3c0ad1-5687-4908-b9d3-45345aa9b599', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=181', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=182', '2024-12-07T05:02:08.146Z', 'applicationvnd.openxmlformatsofficedocument.spreadsheetml.sheet', '91ae2fa2-f3fa-4c13-84ec-4144b1b2d28a');
INSERT INTO "Attachment" ("id", "fileName", "fileUrl", "fileSize", "mimeType", "emailId") VALUES ('78713409-27df-460e-9c28-bcc82141f85d', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=186', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=187', '2025-08-29T06:53:54.276Z', 'applicationvnd.mspowerpoint', '4be1f802-1d9e-4d3b-a9ac-88ca4cccd00a');
INSERT INTO "Attachment" ("id", "fileName", "fileUrl", "fileSize", "mimeType", "emailId") VALUES ('c58279c4-67f7-4105-bbbf-e81c899883ee', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=191', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=192', '2024-09-22T05:51:27.884Z', 'imagejpeg', 'fcd2cc37-42de-4c93-b6a9-6b0802548e9e');
INSERT INTO "Attachment" ("id", "fileName", "fileUrl", "fileSize", "mimeType", "emailId") VALUES ('b51f96a1-74cb-4931-967f-81baf6bf5d10', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=196', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=197', '2025-10-04T00:07:11.741Z', 'imagejpeg', '907306a4-6063-4bad-8bc8-e8e99f67716f');
INSERT INTO "Attachment" ("id", "fileName", "fileUrl", "fileSize", "mimeType", "emailId") VALUES ('a3a5e605-8274-4ee8-ab8b-4349e3b3804b', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=201', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=202', '2025-03-26T01:28:10.275Z', 'applicationpdf', '312ce38a-3fc7-4e14-8600-e15b5141862a');
INSERT INTO "Attachment" ("id", "fileName", "fileUrl", "fileSize", "mimeType", "emailId") VALUES ('c7315d6c-b7fe-4af0-ab18-7f8eee67ea40', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=206', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=207', '2024-10-21T04:30:26.186Z', 'applicationpdf', '4be1f802-1d9e-4d3b-a9ac-88ca4cccd00a');

INSERT INTO "Folder" ("id", "name", "userId", "emailId") VALUES ('7ce936d8-23c2-4b77-a549-cdd7252205cc', 'Trash', 'c8baf97f-892b-4f06-b9b9-5c77ffffc151', '4be1f802-1d9e-4d3b-a9ac-88ca4cccd00a');
INSERT INTO "Folder" ("id", "name", "userId", "emailId") VALUES ('289b15a7-6a8c-403d-9a27-f9bd1be44c29', 'Spam', '466d820e-3b69-4650-bc54-b30938ca86b9', '91ae2fa2-f3fa-4c13-84ec-4144b1b2d28a');
INSERT INTO "Folder" ("id", "name", "userId", "emailId") VALUES ('88ba4d2a-06d2-4f12-8bb2-d2a24e4dcafe', 'Sent', '0066933c-b15e-415c-b5c7-caf79312c5e1', '9f84dc20-df41-4baf-ac37-db0c71e9b1ca');
INSERT INTO "Folder" ("id", "name", "userId", "emailId") VALUES ('ec78ad2f-7fa9-455d-92eb-16fefb5bedca', 'Sent', 'c8baf97f-892b-4f06-b9b9-5c77ffffc151', '312ce38a-3fc7-4e14-8600-e15b5141862a');
INSERT INTO "Folder" ("id", "name", "userId", "emailId") VALUES ('3f5b2cac-3828-474b-8275-cfdc57eca858', 'Spam', 'a22efe35-47b4-481b-8578-e835503f2d84', '712c76f2-477a-40a4-aaac-0617075af989');
INSERT INTO "Folder" ("id", "name", "userId", "emailId") VALUES ('6a1c5781-7b5d-4b62-aad4-1efb787b9c46', 'Spam', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '312ce38a-3fc7-4e14-8600-e15b5141862a');
INSERT INTO "Folder" ("id", "name", "userId", "emailId") VALUES ('b039a72f-cdea-43bc-9b5a-fc4e86743b2c', 'Trash', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '907306a4-6063-4bad-8bc8-e8e99f67716f');
INSERT INTO "Folder" ("id", "name", "userId", "emailId") VALUES ('f7a092ea-2189-47df-a395-f75e22c2e368', 'Sent', 'c8baf97f-892b-4f06-b9b9-5c77ffffc151', '91ae2fa2-f3fa-4c13-84ec-4144b1b2d28a');
INSERT INTO "Folder" ("id", "name", "userId", "emailId") VALUES ('1e9b967a-9df0-4e5f-bf21-969f5a6d0164', 'Drafts', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '712c76f2-477a-40a4-aaac-0617075af989');
INSERT INTO "Folder" ("id", "name", "userId", "emailId") VALUES ('05032aad-c778-452d-bfd5-60adb91ca47f', 'Trash', 'f43872a0-3cfe-4805-a996-4acd81ea0777', '312ce38a-3fc7-4e14-8600-e15b5141862a');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
