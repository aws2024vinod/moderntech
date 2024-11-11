// import { Request, Response } from 'express';
// import db from '../database/db';

// // Create item
// export const createItem = (req: Request, res: Response) => {
//   const { name, description } = req.body;
//   db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], function (err) {
//     if (err) return res.status(500).json({ error: err.message });
//     res.status(201).json({ id: this.lastID, name, description });
//   });
// };

// // Read items
// export const getItems = (req: Request, res: Response) => {
//   db.all('SELECT * FROM items', [], (err, rows) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.status(200).json(rows);
//   });
// };

// // Update item
// export const updateItem = (req: Request, res: Response) => {
//   const { id, name, description } = req.body;
//   db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], function (err) {
//     if (err) return res.status(500).json({ error: err.message });
//     res.status(200).json({ id, name, description });
//   });
// };

// // Delete item
// export const deleteItem = (req: Request, res: Response) => {
//   const { id } = req.params;
//   db.run('DELETE FROM items WHERE id = ?', id, function (err) {
//     if (err) return res.status(500).json({ error: err.message });
//     res.status(200).json({ id });
//   });
// };