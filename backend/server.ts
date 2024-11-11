import express from 'express';
import bodyParser from 'body-parser';
import itemRoutes from './routes/itemRoutes';
//import { createItem, getItems, updateItem, deleteItem } from './controllers/itemController';
//import db from './database/db';
//import { Database } from 'sqlite3';
const cors =require('cors');

const app = express();
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());
app.use('/api', itemRoutes);

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./database.db', (err) => {
//   if (err) {
//     console.error('Could not connect to database', err);
//   } else {
//     console.log('Connected to SQLite database');
//   }
// });

// const db = new Database('./backend/database/db.sqlite', (err) => {
//   if (err) {
//     console.error('Error opening database:', err.message);
//   } else {
//     db.run(`
//       CREATE TABLE IF NOT EXISTS items (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT,
//         description TEXT
//       )
//     `);
//     console.log('Connected to SQLite database.');
//   }
// });

// export default db;

//app.post('/api/items', createItem);

// app.post('/api/items', async (req, res) => {
//     try {
//       const newItem = req.body;  // Retrieve data from frontend request
//       // Insert item into SQLite database (assuming you have db setup code)
//       await db.run('INSERT INTO items (name, description) VALUES (?, ?)', [newItem.name, newItem.description]);
//       res.status(201).json(newItem);  // Send back the created item
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to create item' });
//     }
//   });

//   app.post('/api/items', async (Request, Response) => {
//     try {
//         //alert(Request);
//       const newItem = Request.body;  // Retrieve data from frontend request
//       // Insert item into SQLite database (assuming you have db setup code)
//       await db.run('INSERT INTO items (name, description) VALUES (?, ?)', [newItem.name, newItem.description]);
//       Response.status(201).json(newItem);  // Send back the created item
//     } catch (error) {
//         Response.status(500).json({ error: 'Failed to create item' });
//     }
//   });

//   export const createItem = (req: Request, res: Response) => {
//     const { name, description } = req.body;
//     db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], function (err) {
//       if (err) return res.status(500).json({ error: err.message });
//       res.status(201).json({ id: this.lastID, name, description });
//     });
//   };


app.listen(3001, () => console.log('Server running on http://localhost:3001'));