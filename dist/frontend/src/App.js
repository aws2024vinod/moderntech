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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ItemGrid_1 = __importDefault(require("./components/ItemGrid"));
const ItemForm_1 = __importDefault(require("./components/ItemForm"));
const itemService_1 = require("./services/itemService");
const App = () => {
    const [items, setItems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        loadItems();
    }, []);
    const loadItems = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, itemService_1.getItems)();
        setItems(data);
    });
    const handleAddItem = (name, description) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, itemService_1.createItem)({ name, description });
        loadItems();
    });
    const handleDeleteItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, itemService_1.deleteItem)(id);
        loadItems();
    });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Item Grid" }), (0, jsx_runtime_1.jsx)(ItemForm_1.default, { onSubmit: handleAddItem }), (0, jsx_runtime_1.jsx)(ItemGrid_1.default, { items: items, onDelete: handleDeleteItem })] }));
};
exports.default = App;
