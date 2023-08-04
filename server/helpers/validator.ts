import {NewNoteType} from "./type";

export const isNoteDataValid = (noteData: NewNoteType): boolean => {
    const expectedKeys: (keyof NewNoteType)[] = ['name', 'created', 'category', 'content', 'dates', 'archived'];

    for (const key of expectedKeys) {
        if (!noteData.hasOwnProperty(key)) {
            return false;
        }

        if (key === 'archived') {
            if (typeof noteData[key] !== 'boolean') {
                return false;
            }
        } else if (typeof noteData[key] !== 'string' && noteData[key] !== null) {
            return false;
        }
    }

    return true;
};

export const isIdValid = (id: string): boolean => {
    return id.length === 36;
};