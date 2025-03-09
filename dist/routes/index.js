"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
const indexController = new controllers_1.IndexController();
function setRoutes(app) {
    app.get('/', indexController.getIndex.bind(indexController));
    app.get('/login', indexController.getLogin.bind(indexController));
    app.get('/setup', indexController.getSetup.bind(indexController));
}
exports.setRoutes = setRoutes;
//# sourceMappingURL=index.js.map