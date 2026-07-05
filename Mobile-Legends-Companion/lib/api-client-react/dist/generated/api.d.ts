import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ChatRequest, ChatResponse, HealthStatus, StoreSolutionRequest, StoreSolutionResponse } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getSendChatMessageUrl: () => string;
/**
 * @summary Send a message to the AI chatbot
 */
export declare const sendChatMessage: (chatRequest: ChatRequest, options?: RequestInit) => Promise<ChatResponse>;
export declare const getSendChatMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendChatMessage>>, TError, {
        data: BodyType<ChatRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendChatMessage>>, TError, {
    data: BodyType<ChatRequest>;
}, TContext>;
export type SendChatMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendChatMessage>>>;
export type SendChatMessageMutationBody = BodyType<ChatRequest>;
export type SendChatMessageMutationError = ErrorType<unknown>;
/**
* @summary Send a message to the AI chatbot
*/
export declare const useSendChatMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendChatMessage>>, TError, {
        data: BodyType<ChatRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendChatMessage>>, TError, {
    data: BodyType<ChatRequest>;
}, TContext>;
export declare const getStoreChatSolutionUrl: () => string;
/**
 * @summary Store a helpful solution for future reference
 */
export declare const storeChatSolution: (storeSolutionRequest: StoreSolutionRequest, options?: RequestInit) => Promise<StoreSolutionResponse>;
export declare const getStoreChatSolutionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof storeChatSolution>>, TError, {
        data: BodyType<StoreSolutionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof storeChatSolution>>, TError, {
    data: BodyType<StoreSolutionRequest>;
}, TContext>;
export type StoreChatSolutionMutationResult = NonNullable<Awaited<ReturnType<typeof storeChatSolution>>>;
export type StoreChatSolutionMutationBody = BodyType<StoreSolutionRequest>;
export type StoreChatSolutionMutationError = ErrorType<unknown>;
/**
* @summary Store a helpful solution for future reference
*/
export declare const useStoreChatSolution: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof storeChatSolution>>, TError, {
        data: BodyType<StoreSolutionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof storeChatSolution>>, TError, {
    data: BodyType<StoreSolutionRequest>;
}, TContext>;
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map