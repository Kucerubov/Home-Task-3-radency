import {Request, Response} from "express";
import {isIdValid} from "../helpers/validator";
import note_repository from "../repositories/note_repository";
import {handleError, handleSuccess} from "../helpers/handle";

export default async function DeleteNoteService(req: Request, res: Response) {
    try {
        const {id} = req.params;
        if (!isIdValid(id)) {
            return res.status(400).send({ error: 'Invalid id parameter', data: null });
        }

        const data = await note_repository.deleteNote(id);

        if (!data) {
            return res.status(404).send({ error: 'Note not found'});
        }
        await handleSuccess(res, 'Note added successfully', data);
    } catch (error) {
        await handleError(res, error);
    }
}