const jwt = require('jsonwebtoken')
const ModelAdmin = require('../database/models/ModelAdmin.js')
const { promisify } = require('util')

exports.adminLogin = async (req, res) => {
    try {
        const emailLog = req.body.emailLog
        const passwordLog = req.body.passwordLog
        if (!emailLog && !passwordLog) {
            res.json({
                alertMessage: "Ingrese un email y una contraseña",
            })
        } else if (!emailLog) {
            res.json({
                alertMessage: "Ingrese un email",
                input: "emailLog"
            })
        } else if (!passwordLog) {
            res.json({
                alertMessage: "Ingrese una contraseña",
                input: "passwordLog"
            })
        } else {
            const admin = await ModelAdmin.findOne({
                where: { email: emailLog }
            })
            if (admin.length == 0) {
                res.json({
                    alertMessage: "Email incorrecto",
                    input: "emailLog"
                })
            } else if (passwordLog !== admin.password) {
                console.log(admin)
                console.log(admin)
                console.log(admin.password)
                console.log(passwordLog)
                res.json({
                    alertMessage: "Contraseña incorrecta",
                    input: "passwordLog"
                })
            } else {
                const loggedAdmin = await ModelAdmin.findOne({
                    where: { email: emailLog },
                    attributes: {exclude: ['password']}
                })
                const id = admin.id
                const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
                    expiresIn: 24 * 60 * 60 * 1000
                })
                console.log("TOKEN: " + token + " para el USUARIO : " + admin.user)
                const cookiesOptions = {
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //La cookie expira en 24 horas
                    httpOnly: true
                }
                res.cookie('jwt', token, cookiesOptions) // cookieOptions me tira que expires es invalido, revisar más adelante (Solucionado colocando "JWT_COOKIE_EXPIRES =" en el .env)
                res.json({
                    alertMessage: "¡LOGIN CORRECTO!",
                    si: 'si',
                    admin: loggedAdmin
                });
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.isAuthenticated = async (req, res, next) => {
    console.log(`el req de cookie jwt: ${req.cookies.jwt}`)
    if (req.cookies.jwt) {
        try {
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET)
            const admin = await ModelAdmin.findAll({
                where: { id: decoded.id }
            })
            if (!admin) { return next() }
            req.admin = admin[0]
            return next()
        } catch (error) {
            console.log(error)
            return next()
        }
    } else {
        res.json({ logged: 'Not logged' })
    }
}

exports.logout = (req, res) => {
    res.clearCookie('jwt').send('cookie limpiada')

}