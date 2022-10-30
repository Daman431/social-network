class ExecutionResponse {
    public data: any;
    public status: number = 500;
    constructor(data: any, status: number) {
        this.data = data;
        this.status = status;
    }
}