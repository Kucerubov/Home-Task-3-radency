import express, { Router } from "express";
import NoteService from '../services/noteService.ts';
import AddNoteService from "../services/AddNoteService";
import DeleteNoteService from "../services/DeleteNoteService";
import EditNoteService from "../services/EditNoteService";
const router = express.Router();

router.post('/notes', AddNoteService);
router.delete('/notes/:id', DeleteNoteService);
router.patch('/notes/:id', EditNoteService);
router.get('/notes/stats', NoteService.getStatsNode);
router.get('/notes/:id',NoteService.getNoteById);
router.get('/notes', NoteService.getAllNotes);


export default router;