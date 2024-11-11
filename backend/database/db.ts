// const sqlite3 = require('sqlite3');
// const dbName='myDatabase.db';

// let db = new sqlite3.Database(dbName,(err: { message: any; })=> {
// if(err) {
//   console.log(err.message);
// }
// else
// {
//   console.log("Connected to Database");
//   db.run(`
//         CREATE TABLE IF NOT EXISTS items (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//           name TEXT,
//          description TEXT
//         )
//        `);
//        if(err)
//        {
//         console.log("Table created");
//        }
//        else
//        {
//         console.log("Table Not created");
//        }
// }

// }

// )
// module.exports=db;


// import { Database } from 'sqlite3';

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