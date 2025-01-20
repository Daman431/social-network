import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
export const GET = <T = any>(url: string, config?: AxiosRequestConfig) => {
    return axios.get<T>(url, config);
}
export const POST = <ReqT = any, ResT = any>(url: string, body: ReqT, config?: AxiosRequestConfig) => {
    return axios.post<ResT>(url, body, config);
}
export const PUT = <ReqT = any, ResT = any>(url: string, body: ReqT, config?: AxiosRequestConfig) => {
    return axios.put<ResT>(url, body, config);
}
export const DELETE = <ResT = any>(url: string, config?: AxiosRequestConfig) => {
    return axios.delete<ResT>(url, config);
}