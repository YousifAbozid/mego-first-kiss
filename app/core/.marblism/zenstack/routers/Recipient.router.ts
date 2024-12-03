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

        createMany: procedure.input($Schema.RecipientInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipient.createMany(input as any))),

        create: procedure.input($Schema.RecipientInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipient.create(input as any))),

        deleteMany: procedure.input($Schema.RecipientInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipient.deleteMany(input as any))),

        delete: procedure.input($Schema.RecipientInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipient.delete(input as any))),

        findFirst: procedure.input($Schema.RecipientInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).recipient.findFirst(input as any))),

        findMany: procedure.input($Schema.RecipientInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).recipient.findMany(input as any))),

        findUnique: procedure.input($Schema.RecipientInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).recipient.findUnique(input as any))),

        updateMany: procedure.input($Schema.RecipientInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipient.updateMany(input as any))),

        update: procedure.input($Schema.RecipientInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipient.update(input as any))),

        count: procedure.input($Schema.RecipientInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).recipient.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RecipientCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecipientCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecipientCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecipientCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RecipientCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecipientCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RecipientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RecipientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecipientCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecipientCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecipientGetPayload<T>, Context>) => Promise<Prisma.RecipientGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RecipientDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecipientDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecipientDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecipientDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RecipientDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecipientDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RecipientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RecipientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecipientDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecipientDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecipientGetPayload<T>, Context>) => Promise<Prisma.RecipientGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RecipientFindFirstArgs, TData = Prisma.RecipientGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.RecipientFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RecipientGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecipientFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.RecipientFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecipientGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RecipientGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RecipientFindManyArgs, TData = Array<Prisma.RecipientGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.RecipientFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RecipientGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecipientFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.RecipientFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RecipientGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RecipientGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RecipientFindUniqueArgs, TData = Prisma.RecipientGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RecipientFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RecipientGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecipientFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipientFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecipientGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RecipientGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RecipientUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecipientUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecipientUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecipientUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RecipientUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecipientUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RecipientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RecipientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecipientUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecipientUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecipientGetPayload<T>, Context>) => Promise<Prisma.RecipientGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.RecipientCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.RecipientCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.RecipientCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RecipientCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.RecipientCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.RecipientCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RecipientCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.RecipientCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
