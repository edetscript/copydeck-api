"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = __importDefault(require("./ApiError"));
function errorHandler(err, req, res, next) {
    console.error(err);
    if (err instanceof ApiError_1.default) {
        res.status(err.code).json({ error: err.message });
        return;
    }
    res.status(500).json({ error: 'something went wrong' });
}
exports.default = errorHandler;
//# sourceMappingURL=handler.js.map