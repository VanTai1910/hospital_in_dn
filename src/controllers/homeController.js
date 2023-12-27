import db from "../models/index";
import CRUDService from "../services/CRUDSerives"
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(e);
    }

}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message =await CRUDService.creatNewUser(req.body);
    console.log(message)
    return res.send('post crud from server');
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}