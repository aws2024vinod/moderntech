"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemController_1 = require("../controllers/itemController");
const router = express_1.default.Router();
router.post('/items', itemController_1.createItem);
router.get('/items', itemController_1.getItems);
router.put('/items/:id', itemController_1.updateItem);
router.delete('/items/:id', itemController_1.deleteItem);
exports.default = router;
