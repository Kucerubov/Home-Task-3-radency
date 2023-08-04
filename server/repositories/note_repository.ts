import {testData} from "../store.ts";
import {NewNoteType, NoteState} from "../helpers/type";

const uuid = require('uuid');
class Note_repository {

    async addNote(newNote: NewNoteType) {
        testData.push({id: uuid.v4(), ...newNote });
        return testData;
    }

    async deleteNote(id: string) {
        const indexToDelete = testData.findIndex(note => note.id === id);
        if (indexToDelete !== -1) {
            testData.splice(indexToDelete, 1);
        }
        return testData;
    }

    async editNote(id: string, data: NoteState) {
        testData.forEach((note, index) => {
            if (note.id === id) {
                testData[index] = {
                    ...note,
                    ...data
                };
            }
        });
        return testData;
    }

    async getNoteById(id: string) {
        return testData.filter(item => item.id === id)
    }

    async getStats(){
        const categoryData: { [category: string]: { active: number; archived: number } } = {};

        testData.forEach(note => {
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