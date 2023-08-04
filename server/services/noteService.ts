import {testData} from "../store";
import { Request, Response } from 'express';
import note_repository from "../repositories/note_repository";
import {isIdValid} from "../helpers/validator";
import {handleError, handleSuccess} from "../helpers/handle";

class NoteService {

    async getNoteById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!isIdValid(id)) {
                return res.status(400).send({ error: 'Invalid id parameter', data: null });
            }

            const data = await note_repository.getNoteById(id);
            await handleSuccess(res, 'Note retrieved successfully', data);
        } catch (error) {
            await handleError(res, error);
        }
    }

    async getAllNotes(req: Request, res: Response) {
        try {
            await handleSuccess(res, 'Notes retrieved successfully', testData);
        } catch (error) {
            await handleError(res, error);
        }
    }

    async getStatsNode(req: Request, res: Response) {
        try {
            const data = await note_repository.getStats();
            await handleSuccess(res, 'Stats retrieved successfully', data);
        } catch (error) {
            await handleError(res, error);
        }
    }

}

export default new NoteService()