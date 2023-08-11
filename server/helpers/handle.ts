import {ErrorResponse, SuccessResponse} from "./type";


export async function handleSuccess<T>(res: any, message: string, data: T) {
    const successResponse: SuccessResponse<T> = {
        message,
        data
    };
    console.log(data);
    res.status(200).json(successResponse);
}

export async function handleError(res: any, error: any) {
    console.error(error);
    const errorResponse: ErrorResponse = {
        error: 'Internal server error'
    };
    res.status(500).send(errorResponse);
}