"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItems = exports.createItem = void 0;
const createItem = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    });
    return response.json();
});
exports.createItem = createItem;
const getItems = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('/api/items');
    return response.json();
});
exports.getItems = getItems;
const updateItem = (id, item) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`/api/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    });
    return response.json();
});
exports.updateItem = updateItem;
const deleteItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`/api/items/${id}`, {
        method: 'DELETE',
    });
    return response.json();
});
exports.deleteItem = deleteItem;
