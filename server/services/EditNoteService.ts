
import {isIdValid, isNoteDataValid} from "../helpers/validator";
import note_repository from "../repositories/note_repository";
import {handleError, handleSuccess} from "../helpers/handle";

export default async function EditNoteService(req: any, res: any) {
    try {
        const {id} = req.params;
        const isValid = isNoteDataValid(req.body);
        if (!isValid) {
            return res.status(400).send({ error: 'Invalid data types' });
        }
        if (!isIdValid(id)) {
            return res.status(400).send({ error: 'Invalid id parameter', data: null });
        }

        const data = await note_repository.editNote(id, req.body)

        await handleSuccess(res, 'Note added successfully', data);
    }catch (error) {
        await handleError(res, error);
    }
}