import userService from "../services/userServices";
let handleLogin = async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;


    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Không được để trống!'
        })
    }
    let userData = await userService.handleUserLogin(email, password);
    // check email có tồn tại hay không
    // so sánh mật khẩu
    // trả lại thông tin user
    //access_token:jwt
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}

    })

}

module.exports = {
    handleLogin: handleLogin,

}