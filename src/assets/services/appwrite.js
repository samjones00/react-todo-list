import { Client, Account, Databases } from "appwrite";
console.log(import.meta.env.VITE_APPWRITE_ENDPOINT);
const config = {
    endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    db: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    col: {
        notes: import.meta.env.VITE_APPWRITE_COLLECTION_ID
    }
};

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

const database = new Databases(client);

export { database, config, client };