"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const itemRoutes_1 = __importDefault(require("./routes/itemRoutes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/api', itemRoutes_1.default);
app.listen(3001, () => console.log('Server running on http://localhost:3001'));
