export interface NoteState {
    id: string,
    name: string,
    created: string,
    category: string,
    content: string,
    dates: null | string,
    archived: boolean
}

export interface NewNoteType {
    name: string,
    created: string,
    category: string,
    content: string,
    dates: null | string,
    archived: boolean
}

export interface SuccessResponse<T> {
    message: string;
    data: T;
}

export interface ErrorResponse {
    error: string;
}