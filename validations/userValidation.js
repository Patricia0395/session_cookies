const { check } = require("express-validator");


module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre de usuario es requerido'),

    check('color')
    .notEmpty().withMessage('Debe indicar un color'),

    check('edad')
    .notEmpty().withMessage('Debe indicar la edad')
    .isInt().withMessage('Debe ingresar un número válido'),

    check('email')
    .notEmpty().withMessage('Debe ingresar un email').bail()
    .isEmail().withMessage('Email invalido')
]