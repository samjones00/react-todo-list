import databaseService from "./databaseService";
import { ID } from 'appwrite'

const dbId = import.meta.env.VITE_APPWRITE_DATABASE_ID
const colId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const taskService = {
    getTasks: async () => {
        return await databaseService.listDocuments(dbId, colId);
    },
    createTask: async (title) => {
        return await databaseService.createDocument(dbId, colId, {
            title: title,
            isComplete: false
        }, ID.unique());
    },
    deleteTask: async (id) => {
        try {
            return await databaseService.deleteDocument(dbId, colId, id);
        } catch (error) {
            console.error('error deleting task:', error.message);
            return { error: error.message };
        }
    },
    updateTask: async (id, task) => {
        try {
            await databaseService.updateDocument(dbId, colId, id, {
                title: task.title,
                isComplete: task.isComplete
            });
        }
        catch (error) {
            console.error('error updating task:', error.message);
            return {
                error: error.message
            }
        }
    }
}

export default taskService;