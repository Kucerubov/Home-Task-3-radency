
import note_repository from "../repositories/note_repository";
import {handleError, handleSuccess} from "../helpers/handle";
import {isNoteDataValid} from "../helpers/validator";

export default async function AddNoteService(req: any, res: any) {
    try {
        const isValid = isNoteDataValid(req.body);
        if (!isValid) {
            return res.status(400).send({ error: 'Invalid data types' });
        }

        const data = await note_repository.addNote(req.body);
        await handleSuccess(res, 'Note added successfully', data);
    } catch (error) {
        await handleError(res, error);
    }
}