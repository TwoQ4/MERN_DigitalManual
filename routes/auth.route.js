const {Router} = require('express');
const router = Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwtToken = require('jsonwebtoken');

const User = require('../models/User');
const Role = require('../models/Role');

router.post('/registration',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Некорректный пароль').isLength({min: 6})
    ],
    async (req, res) =>{
        try {

            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при регистрации"
                });
            }

            const {email, password} = req.body;

            const isEmailUsed = await User.findOne({ email });
            if(isEmailUsed){
                return res.status(300).json({message: 'Данная почта уже используется другим пользователем.'});
            }

            const hashedPassword = await bcrypt.hash(password, 12)

            const user = new User({
                email, password: hashedPassword
            });

            await user.save();

            res.status(201).json({message: 'Пользователь создан.'})

        } catch (error) {
            console.log(error);
        }
    });

    router.post('/login',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Некорректный пароль').exists()
    ],
    async (req, res) =>{
        try {

            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при регистрации"
                });
            }

            const {email, password} = req.body;

            const user = await User.findOne({email});
            if(!user){
                return res.status(400).json({
                    message: "Неверный логин или пароль"
                })
            }

            const isMatch = bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({
                    message: "Неверный логин или пароль"
                })
            }

            const jwtSecret = "lorem ipsum";
            const token = jwtToken.sign(
                {userId: user.id},
                jwtSecret,
                {expiresIn: '2h'}
            );

            res.json({token, userId: user.id})

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;