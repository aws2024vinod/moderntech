"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./ItemGrid.css");
const ItemGrid = ({ items, onDelete }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "grid-container", children: items.map((item) => ((0, jsx_runtime_1.jsxs)("div", { className: "grid-item", children: [(0, jsx_runtime_1.jsx)("h3", { children: item.name }), (0, jsx_runtime_1.jsx)("p", { children: item.description }), (0, jsx_runtime_1.jsx)("button", { onClick: () => onDelete(item.id), children: "Delete" })] }, item.id))) }));
};
exports.default = ItemGrid;
