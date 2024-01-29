import db from "../models/index";
const bcrypt = require('bcrypt');


let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExits = await checkUserEmail(email);
            if (isExits) {


                let user = await db.User.findOne({
                    attributes: ["email", "roleId", "password"],
                    where: { email: email },
                    raw: true

                });
                if (user) {
                    //compare password
                    let check = await bcrypt.compareSync(password, user.password);  //false

                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = "ok";
                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'Sai mật khẩu';
                    }
                }
                else {
                    userData.errCode = 2;
                    userData.errMessage = 'không tìm thấy người dùng!'

                }

            } else {
                userData.errCode = 1;
                userData.errMessage = 'Email của bạn không tồn tại trong hệ thống!'

            }
            resolve(userData)
        } catch (e) {
            reject(e)

        }
    })
}

//check email người dùng
let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email }
            })
            if (user) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            reject(e);

        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
}