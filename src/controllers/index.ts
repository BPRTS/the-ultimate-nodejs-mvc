export class IndexController {
    public getIndex(req: any, res: any): void {
        res.render('pages/index', { title: 'Home' });
    }
    public getLogin(req: any, res: any): void {
        res.render('pages/login', { title: 'Login' });
    }
    public getSetup(req: any, res: any): void {
        res.render('pages/setup', { title: 'Setup' });
    }
}