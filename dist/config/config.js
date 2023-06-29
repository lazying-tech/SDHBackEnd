"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlConfig = void 0;
exports.sqlConfig = {
    user: "sa",
    password: "Maivu@2022",
    server: "113.161.86.105",
    port: 9876,
    database: "sdhDB",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        useUTC: true,
    },
};
//# sourceMappingURL=config.js.map