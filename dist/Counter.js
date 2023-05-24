"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
function Counter() {
    const [count, setCount] = React.useState(0);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["You clicked ", count, " times"] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setCount(count + 1), children: "Click me" })] }));
}
exports.Counter = Counter;
