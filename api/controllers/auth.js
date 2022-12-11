const db = require('../db')
const bcrypt = require('bcryptjs')

const register = (req,res)=>{
    //Check existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q,[req.body.email, req.body.username], (err,data)=>{
        if(err) return res.json(err)
        if(data.lenght) return res.status(409).json("User alredy exist!")

        //HASH TO PASSWORD
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.passoword, salt)
    })
}

const login = (req,res)=>{

}

const logout = (req,res)=>{

}

module.exports = {
    register,
    login,
    logout,
}