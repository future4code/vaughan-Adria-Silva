import { BaseDatabase } from "./BaseDatabase"

export class TablesCreator extends BaseDatabase {
    public async createTables(): Promise<void> {
        try {
        BaseDatabase.connection
            .raw(`
            CREATE TABLE IF NOT EXISTS labook_users(
               id VARCHAR(255) PRIMARY KEY,
               name VARCHAR(255) NOT NULL,
               email VARCHAR(255) UNIQUE NOT NULL,
               password VARCHAR(255) NOT NULL
            );
            
            CREATE TABLE IF NOT EXISTS labook_posts(
               id VARCHAR(255) PRIMARY KEY,
               photo VARCHAR(255) NOT NULL,
               description VARCHAR(255) NOT NULL,
               type ENUM("normal","event") DEFAULT "normal",
               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
               author_id VARCHAR(255),
               FOREIGN KEY (author_id) REFERENCES labook_users (id)
            )
        `);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        };
    };
};
