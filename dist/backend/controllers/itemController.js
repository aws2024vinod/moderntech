"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItems = exports.createItem = void 0;
const db_1 = __importDefault(require("../database/db"));
// Create item
const createItem = (req, res) => {
    const { name, description } = req.body;
    db_1.default.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], function (err) {
        if (err)
            return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID, name, description });
    });
};
exports.createItem = createItem;
// Read items
const getItems = (req, res) => {
    db_1.default.all('SELECT * FROM items', [], (err, rows) => {
        if (err)
            return res.status(500).json({ error: err.message });
        res.status(200).json(rows);
    });
};
exports.getItems = getItems;
// Update item
const updateItem = (req, res) => {
    const { id, name, description } = req.body;
    db_1.default.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], function (err) {
        if (err)
            return res.status(500).json({ error: err.message });
        res.status(200).json({ id, name, description });
    });
};
exports.updateItem = updateItem;
// Delete item
const deleteItem = (req, res) => {
    const { id } = req.params;
    db_1.default.run('DELETE FROM items WHERE id = ?', id, function (err) {
        if (err)
            return res.status(500).json({ error: err.message });
        res.status(200).json({ id });
    });
};
exports.deleteItem = deleteItem;
