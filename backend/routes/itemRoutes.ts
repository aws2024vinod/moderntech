// import express from 'express';
// import { createItem, getItems, updateItem, deleteItem } from '../controllers/itemController';

// const router = express.Router();

// router.post('/items', createItem);
// router.get('/items', getItems);
// router.put('/items/:id', updateItem);
// router.delete('/items/:id', deleteItem);

// export default router;
import { Database } from 'sqlite3';

// backend/routes/itemRoutes.ts
import { Router } from 'express';
import sqlite3 from 'sqlite3';

const router = Router();


 const db = new sqlite3.Database('./mydb.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    db.run(`
      CREATE TABLE IF NOT EXISTS PS_PT_EPC_SRC_CUR (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        PTENDPTPMTCATID TEXT,
        CURRENCY_CD TEXT,
        PTACCTGLEGALENTITY TEXT,
        PT_VI_BIN TEXT,
        PT_VI_CIB TEXT,
        PT_MC_BIN TEXT,
        PT_MC_ICA TEXT
      )
    `);
    console.log('Connected to SQLite database.');
  }
});

// Set up the SQLite database connection (or import from a central db file if needed)
// const db1 = new sqlite3.Database('./database.db', (err) => {
//   if (err) {
//     console.error('Could not connect to database', err);
//   } else {
//     console.log('Connected to SQLite database');
//   }
// });

// POST route to insert a new item
router.post('/items', (req, res) => {
  const { EPCID,Curency_Code, ALE,VI_BIN,VI_CIB,MC_BIN,MC_ICA } = req.body;
  const query = `INSERT INTO PS_PT_EPC_SRC_CUR (PTENDPTPMTCATID,CURRENCY_CD, PTACCTGLEGALENTITY,PT_VI_BIN,PT_VI_CIB,PT_MC_BIN,PT_MC_ICA) VALUES (?,?,?,?,?,?,?)`;

  db.run(query, [EPCID,Curency_Code, ALE,VI_BIN,VI_CIB,MC_BIN,MC_ICA], function (err) {
    if (err) {
      console.error('Error inserting item:', err.message);
      res.status(500).json({ error: 'Failed to create item' });
    } else {
      res.status(201).json({ id: this.lastID, EPCID, Curency_Code, ALE,VI_BIN,VI_CIB,MC_BIN,MC_ICA });
    }
  });
});

// DELETE route to delete an item by ID
router.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const query = `DELETE FROM PS_PT_EPC_SRC_CUR WHERE id = ?`;

  db.run(query, itemId, function (err) {
    if (err) {
      console.error('Error deleting item:', err.message);
      res.status(500).json({ error: 'Failed to delete item' });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.status(200).json({ message: 'Item deleted successfully' });
    }
  });
});

// (Optional) GET route to retrieve all items
router.get('/items', (req, res) => {
  const query = `SELECT * FROM PS_PT_EPC_SRC_CUR`;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error retrieving items:', err.message);
      res.status(500).json({ error: 'Failed to retrieve items' });
    } else {
      res.json(rows);
    }
  });
});

// (Optional) PUT route to update an item
router.put('/items/:id', (req, res) => {
  const { Curency_Code, ALE,VI_BIN,VI_ICA,MC_BIN,MC_ICA } = req.body;
  const itemId = req.params.id;
  const query = `UPDATE PS_PT_EPC_SRC_CUR SET Curency_Code = ?, ALE = ? ,VI_BIN= ?, VI_ICA= ?, MC_BIN= ?, MC_ICA= ? WHERE id = ?`;

  db.run(query, [Curency_Code, ALE,VI_BIN,VI_ICA,MC_BIN,MC_ICA, itemId], function (err) {
    if (err) {
      console.error('Error updating item:', err.message);
      res.status(500).json({ error: 'Failed to update item' });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.status(200).json({ message: 'Item updated successfully' });
    }
  });
});

export default router;

