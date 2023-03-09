import mongoose from "mongoose";
import user from "../model/user";
import md5 from 'md5';
import jwt from "jsonwebtoken";

const authController = {
    login: async (req, res) => {
        try {
            let { email, password } = req.body;
            let check = await user.findOne({ email: email, password: md5(password) });

            if (check !== null) {
                res.json({
                    status: 200,
                    message: 'Login Berhasil',
                    token: jwt.sign({ email: email }, process.env.JWT_TOKEN)
                });
            } else {
                res.status(401).json({
                    status: 401,
                    message: 'Login Gagal!'
                })
            }
        } catch (err) {
            res.status(500).json({
                message: err + ''
            })
        }
    },

    register: async (req, res) => {
        try {
            let { email, password, name } = req.body;
            let create = await user.create({
                name: name,
                email: email,
                password: md5(password)
            })

            if (create.name) {
                res.json({
                    status: 200,
                    message: 'User berhasil didaftarkan!'
                })
            } else {
                res.status(401).json({
                    status: 401,
                    message: 'User gagal didaftarkan!'
                })
            }
        } catch (err) {
            res.status(500).json({
                message: err + '',
            })
        }
    },

    me: async (req, res) => {
        try {
            // let { token } = req.body;
            // let getToken = token.split(" ");

            if (!req.cookies['token-menn']) {
                res.status(401).json({
                    message: 'Token not found'
                })
            } else {
                let check = jwt.verify(req.cookies['token-menn'], process.env.JWT_TOKEN)
                res.json({
                    status: 200,
                    message: check
                })
            }
        } catch (err) {
            res.status(500).json({
                message: err + '',
            })
        }
    }
}

export default authController;