export interface Response<T = any> {
    data: T
    isSuccessful: boolean
    message: string
    status: number
}