import {ErrorResponse, SuccessResponse} from "./type";

export async function handleSuccess<T>(res, message: string, data: T) {
    const successResponse: SuccessResponse<T> = {
        message,
        data
    };
    res.status(200).send(successResponse);
}

export async function handleError(res, error: any) {
    console.error(error);
    const errorResponse: ErrorResponse = {
        error: 'Internal server error'
    };
    res.status(500).send(errorResponse);
}