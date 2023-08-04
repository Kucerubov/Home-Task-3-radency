import {NewNoteType} from "./type";

export const noteSchema = (noteData: NewNoteType) => {
    for (const key in noteData) {
        if (key === 'archived') {
            if (typeof noteData[key] !== 'boolean') {
                return false;
            }
        } else if (typeof noteData[key as keyof NewNoteType] !== 'string') {
            return false;
        }
    }
    return true;
};

export const isIdValid = (id: string): boolean => {
    return id.length === 36;
};