
import { BaseQueryFn } from '@reduxjs/toolkit/query'

import type { AxiosRequestConfig, AxiosError } from 'axios'
import { axiosInstance } from './axios/axios.intercepter'
import { message } from 'antd'

export const axiosBaseQuery =({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): BaseQueryFn<
        {
            url: string
            method: AxiosRequestConfig['method']
            data?: AxiosRequestConfig['data']
            params?: AxiosRequestConfig['params']
            headers?: AxiosRequestConfig['headers']
        },
        unknown,
        unknown
    > =>
        async ({ url, method, data, params, headers }) => {
            try {
                const result = await axiosInstance({
                    url: baseUrl + url,
                    method,
                    data,
                    params,
                    headers,
                })
                // console.log({ result }, 'axiosqueryy')
                if (result?.data?.success===true) {
                    return {
                        data: result?.data,
                        // error:result
                        // message:result?.message
                        // message:result?.data?.message
                        
                    }
                } else {
                    return {
                        error: result,
                        // error:result
                        // message:result?.message
                        // message:result?.data?.message
                        
                    }
                }
                
            } catch (axiosError) {
                const err = axiosError as AxiosError

                return {
                    error: {
                        status: err?.status,
                        message: err.message || err.message,
                    },
                }
            }
        }
