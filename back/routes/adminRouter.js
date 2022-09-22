const express = require ("express");
const routerAdmin = express.Router();
const { getAllOrientados, createOrientado, orientadoById, getAllOrientadores, orientadorToOrientado, orientadoAndOrientador } = require ("../controllers/orientadoController.js");
const { getAllNovedades } = require("../controllers/novedadesController.js");
const { isAuthenticated } = require("../controllers/loginAdminController.js"); //Autenticacion para que solo puedan ingresar usuarios logueados (admins)
const { getAllAdminsProfiles, getAdminProfile } = require("../controllers/profileAdminController.js");
const photoProfileCheck = require("../middleware/orientadoImages.js");

//Rutas de la vista privada del Admin
routerAdmin.get('/admin/orientados', getAllOrientados);
routerAdmin.get('/admin/novedades', getAllNovedades);

//Rutas para obtener profiles de admins
routerAdmin.get('/admin/profile', getAllAdminsProfiles);
routerAdmin.get('/admin/profile/:id', getAdminProfile);

//Ruta para crear Orientados

routerAdmin.post('/admin/create', photoProfileCheck, createOrientado);
/* routerAdmin.post('/upload', photoProfileCheck); */

//Ruta para mostrar al Orientado que esta en la ID
routerAdmin.get('/admin/orientados/:id', orientadoById)

//Ruta para mostrar a todos los orientadores
routerAdmin.get('/admin/orientadores', getAllOrientadores)

//Ruta para mostrar Orientado que esta en la ID y su Orientador
routerAdmin.get('/admin/orientados/:id/orientador', orientadoAndOrientador)

//Ruta para asignar o modificar Orientador a Orientado
routerAdmin.put('/admin/orientados/:id/orientadorToOrientado', orientadorToOrientado)




module.exports = routerAdmin;