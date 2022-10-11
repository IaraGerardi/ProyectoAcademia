const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');


/* TENER EN CUENTA DESCOMENTAR LOS NOT NULL
DE PROGRAMA Y WHY. SE SACARON PARA QUE 
LAS SEEDS QUE TENEMOS FUNCIONEN YA QUE 
 NO TIENEN ESOS ATRIBUTOS */


class ModelOriented extends Model { }

ModelOriented.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false, //No permite que el campo sea "null"
        validate: {  //Validaciones de la base de datos
            notNull: {
                msg: 'Debe ingresar el nombre' //mensaje al ser nulo
            },
            isAlpha: { //isAlpha solo deja usar letras
                args: true,
                msg: 'El campo nombre solo debe contener letras'
            },
            len: { //len establece el minimo y maximo de caracteres
                args: [2, 500],
                msg: 'Comprueba el nombre que desea ingresar'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese contraseña'
            },
            len: { //len establece el minimo y maximo de caracteres
                args: [4, 500],
                msg: 'Debe haber un minimo de 8 caracteres'
            }
        }
    },

    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {  //Validaciones de la base de datos
            notNull: {
                msg: 'El campo apellido está vacio'
            },
            len: { //len establece el minimo y maximo de caracteres
                args: [2, 100],
                msg: 'El apellido debe contener minimo 2 caracteres'
            }
        }
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { //Esto es para darle un mensaje personalizado. Al final declaramos las columnas unicas
            name: 'email',
            msg: 'El email ya está siendo utilizado'
        },
        validate: {
            notNull: {
                msg: 'El campo email está vacio'
            },
            isEmail: {
                args: true,
                msg: 'Debe ser un email válido'
            }
        }
    },

    phone: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {  //Validaciones de la base de datos
            notNull: {
                msg: 'El campo telefono está vacio'
            },
            len: { //len establece el minimo y maximo de caracteres
                args: [8, 50],
                msg: 'Faltan numeros en el telefono'
            }
        }
    },
    program: {
        type: DataTypes.STRING,
        /* allowNull: false,
        validate: {
            notNull: {
                msg: 'Indique el programa'
            },
        } */

    },
    photoProfile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese una foto de perfil'
            },
        }
    },
    dni: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: { //Esto es para darle un mensaje personalizado. Al final declaramos las columnas unicas
            name: 'dni',
            msg: 'El DNI ya está siendo utilizado'
        },
        validate: {
            notNull: {
                msg: 'Ingrese D.N.I.'
            },
            isInt: {
                args: true,
                msg: 'Ingrese "numero" de DNI'
            },
        }
    },
    age: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese edad del orientado'
            },
        }
    },
    school: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese nombre de la escuela'
            },
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese direccion del orientado'
            },
        }
    },
    why: {//Porque se acerca a la institucion
        type: DataTypes.STRING,
        /* allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese motivo por el cual se acercó el orientado'
            },
        } */
    },
}, {
    sequelize,
    freezeTableName: true,
    modelName: "Oriented",
    indexes: [ //declaramos cuales columnas van a ser unicas y le damos el argumento true.
        {
            unique: true,
            fields: ['email', 'dni']
        }
    ]
    //timestamps: false
});

module.exports = ModelOriented;