"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ItemForm = ({ onSubmit }) => {
    const [name, setName] = (0, react_1.useState)('');
    const [description, setDescription] = (0, react_1.useState)('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, description);
        setName('');
        setDescription('');
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Name", required: true }), (0, jsx_runtime_1.jsx)("input", { value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Description", required: true }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Add Item" })] }));
};
exports.default = ItemForm;
