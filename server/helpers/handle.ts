import {Response} from "express";
import {ErrorResponse, SuccessResponse} from "./type";

export async function handleSuccess<T>(res: Response, message: string, data: T) {
    const successResponse: SuccessResponse<T> = {
        message,
        data
    };
    res.status(200).send(successResponse);
}

export async function handleError(res: Response, error: any) {
    console.error(error);
    const errorResponse: ErrorResponse = {
        error: 'Internal server error'
    };
    res.status(500).send(errorResponse);
}