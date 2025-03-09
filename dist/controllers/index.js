"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
class IndexController {
    getIndex(req, res) {
        res.render('pages/index', { title: 'Home' });
    }
    getLogin(req, res) {
        res.render('pages/login', { title: 'Login' });
    }
    getSetup(req, res) {
        res.render('pages/setup', { title: 'Setup' });
    }
}
exports.IndexController = IndexController;
//# sourceMappingURL=index.js.map