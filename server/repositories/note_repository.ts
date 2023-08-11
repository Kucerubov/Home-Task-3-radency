import {NewNoteType, NoteState} from "../helpers/type";
import Note from "../models/models";

const uuid = require('uuid');
class Note_repository {

    async addNote(newNote: NewNoteType) {
        try {
            return await Note.create({
                id: uuid.v4(),
                ...newNote
            });
        } catch (error) {
            throw error;
        }
    }

    async deleteNote(id: string) {
        try {
            const noteToDelete = await Note.findByPk(id);
            if (!noteToDelete) {
                return null;
            }

            await noteToDelete.destroy();
            return true;
        } catch (error) {
            throw error;
        }
    }

    async editNote(id: string, data: NoteState) {
        try {
            const updatedNote = await Note.findByPk(id);
            if (!updatedNote) {
                return null;
            }

            await updatedNote.update(data);
            return updatedNote;
        } catch (error) {
            throw error;
        }
    }

    async getNoteById(id: string) {
        try {
         return await Note.findByPk(id);
        } catch (error) {
            throw error;
        }
    }

    async getStats(){
        const categoryData: { [category: string]: { active: number; archived: number } } = {};
        const data: NoteState[] = await Note.findAll();

        data.forEach(note => {
            const category = note.category;
            if (!categoryData[category]) {
                categoryData[category] = { active: 0, archived: 0 };
            }

            if (!note.archived) {
                categoryData[category].active++;
            } else {
                categoryData[category].archived++;
            }
        });

        return Object.keys(categoryData).map(category => ({
            category,
            activeCount: categoryData[category].active,
            archivedCount: categoryData[category].archived
        }));
    }


}
export default new Note_repository();