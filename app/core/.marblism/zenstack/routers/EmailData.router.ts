/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.EmailDataInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailData.createMany(input as any))),

        create: procedure.input($Schema.EmailDataInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailData.create(input as any))),

        deleteMany: procedure.input($Schema.EmailDataInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailData.deleteMany(input as any))),

        delete: procedure.input($Schema.EmailDataInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailData.delete(input as any))),

        findFirst: procedure.input($Schema.EmailDataInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).emailData.findFirst(input as any))),

        findMany: procedure.input($Schema.EmailDataInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).emailData.findMany(input as any))),

        findUnique: procedure.input($Schema.EmailDataInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).emailData.findUnique(input as any))),

        updateMany: procedure.input($Schema.EmailDataInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailData.updateMany(input as any))),

        update: procedure.input($Schema.EmailDataInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailData.update(input as any))),

        count: procedure.input($Schema.EmailDataInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).emailData.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EmailDataCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailDataCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailDataCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailDataCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EmailDataCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailDataCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmailDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmailDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailDataCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailDataCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmailDataGetPayload<T>, Context>) => Promise<Prisma.EmailDataGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EmailDataDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailDataDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailDataDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailDataDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EmailDataDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailDataDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmailDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmailDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailDataDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailDataDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmailDataGetPayload<T>, Context>) => Promise<Prisma.EmailDataGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EmailDataFindFirstArgs, TData = Prisma.EmailDataGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EmailDataFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmailDataGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmailDataFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EmailDataFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmailDataGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmailDataGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EmailDataFindManyArgs, TData = Array<Prisma.EmailDataGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EmailDataFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EmailDataGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmailDataFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EmailDataFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EmailDataGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EmailDataGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EmailDataFindUniqueArgs, TData = Prisma.EmailDataGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmailDataFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmailDataGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmailDataFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmailDataFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmailDataGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmailDataGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EmailDataUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailDataUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailDataUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailDataUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EmailDataUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailDataUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmailDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmailDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailDataUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailDataUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmailDataGetPayload<T>, Context>) => Promise<Prisma.EmailDataGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EmailDataCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EmailDataCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EmailDataCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EmailDataCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EmailDataCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EmailDataCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EmailDataCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EmailDataCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
