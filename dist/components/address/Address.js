"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// export address component that accepts Address prop
// Path: src/components/address/Address.tsx
function Address(address) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "Address", children: [(0, jsx_runtime_1.jsx)("h4", { className: "text-xl font-semibold mb-2", children: "Address" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700", children: address.line1 }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700", children: address.city }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700", children: address.region }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700", children: address.postalCode }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700", children: "US" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("button", { className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4", children: "Get Directions" }), (0, jsx_runtime_1.jsx)("button", { className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4", children: "Call" })] })] }));
}
exports.Address = Address;
