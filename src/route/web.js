import express from 'express';
import homeController from '../controllers/homeController';
let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/VT', (req, res) => {
        return res.send('Xin Chào VT1')
    });

    return app.use("/", router);
}



module.exports = initWebRouter;