import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition
} from '@reduxjs/toolkit/query';
import { UserData } from './IUserInfo';
import { SerializedError } from '@reduxjs/toolkit';

export type LazyGetTriggerType = LazyQueryTrigger<
  QueryDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    'User', UserData, 'api'>
>

export interface IUserSearch {
  sendTrigger: LazyGetTriggerType;
  isLoading: boolean
  isError: boolean
  isFetching: boolean
}
