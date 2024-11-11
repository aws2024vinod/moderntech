"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = require("sqlite3");
const db = new sqlite3_1.Database('./backend/database/db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    }
    else {
        db.run(`
      CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT
      )
    `);
        console.log('Connected to SQLite database.');
    }
});
exports.default = db;
