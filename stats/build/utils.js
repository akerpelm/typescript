"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const parts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(parts[2], parts[1] - 1, parts[0]);
};
exports.dateStringToDate = dateStringToDate;
