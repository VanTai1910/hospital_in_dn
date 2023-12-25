import db from "../models/index";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs' ,{
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(e);
    }

}

// Object:{
//     key: '',
//     value;
// }
module.exports = {
    getHomePage: getHomePage,
}