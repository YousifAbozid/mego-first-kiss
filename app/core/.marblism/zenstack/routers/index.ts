/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createEmailDataRouter from "./EmailData.router";
import createRecipientRouter from "./Recipient.router";
import createAttachmentRouter from "./Attachment.router";
import createFolderRouter from "./Folder.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as EmailDataClientType } from "./EmailData.router";
import { ClientType as RecipientClientType } from "./Recipient.router";
import { ClientType as AttachmentClientType } from "./Attachment.router";
import { ClientType as FolderClientType } from "./Folder.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        emailData: createEmailDataRouter(router, procedure),
        recipient: createRecipientRouter(router, procedure),
        attachment: createAttachmentRouter(router, procedure),
        folder: createFolderRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    emailData: EmailDataClientType<AppRouter>;
    recipient: RecipientClientType<AppRouter>;
    attachment: AttachmentClientType<AppRouter>;
    folder: FolderClientType<AppRouter>;
}
