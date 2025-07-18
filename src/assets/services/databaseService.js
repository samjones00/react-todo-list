import { database } from './appWrite.js';

const databaseService = {

    async listDocuments(dbId, colId) {
        try {
            const response = await database.listDocuments(dbId, colId);
            return response.documents || [];
        }
        catch (error) {
            console.error('error fetching documents:', error.message);
            return { error: error.message };
        }
    },
    async createDocument(dbId, colId, data, id = null) {
        try {
            return await database.createDocument(dbId, colId, id || undefined, data);
        }
        catch (error) {
            console.error('error creating document:', error.message);
            return { error: error.message };
        }
    },
    async deleteDocument(dbId, colId, id) {
        try {
            return await database.deleteDocument(dbId, colId, id);
        }
        catch (error) {
            console.error('error deleting document:', error.message);
            return { error: error.message };
        }
    },
    async updateDocument(dbId, colId, id, data) {
        try {
            return await database.updateDocument(dbId, colId, id, data);
        }
        catch (error) {
            console.error('error updating document:', error.message);
            return { error: error.message };
        }
    }
};

export default databaseService