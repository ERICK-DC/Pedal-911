const { Pool } = require('pg');
const path=require('path');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'nacional12',
    database: 'pedal911',
    port: '5432'
});

const getLogin= async(req, res) => {
    res.sendFile(path.join(__dirname,'../front/login.html'));
};

const getRegister= async(req, res) => {
    res.sendFile(path.join(__dirname,'../front/register.html'));
};

const getBicicletas=async(req,res)=>{
    res.sendFile(path.join(__dirname,'../front/bicicletas.html'));
};

const getAlquiler= (req, res) => {
    res.sendFile(path.join(__dirname,'../front/alquiler.html'));
};

const getAlquiler2= (req, res) => {
    res.sendFile(path.join(__dirname,'../front/alquiler2.html'));
};

const getAlquiler3= (req, res) => {
    res.sendFile(path.join(__dirname,'../front/alquiler3.html'));
};

const getAlquiler4= (req, res) => {
    res.sendFile(path.join(__dirname,'../front/alquiler4.html'));
};

const getAlquiler5= (req, res) => {
    res.sendFile(path.join(__dirname,'../front/alquiler5.html'));
};

const postLogin=(req,res)=>{
    let usuario= req.body.usuario;
    let contraseña=req.body.contraseña;
    let base_usuario= pool.query('select nombre from cliente where nombre=$1',[usuario]);
    let base_contraseña= pool.query('select contrasenha from cliente where contrasenha=$1',[contraseña]);
    if (usuario==base_usuario && contraseña==base_contraseña){
        return res.redirect("/");
    } else{
        return res.redirect("/bicicletas");}
}

const postRegister=async(req,res)=>{
    const { r_cedula, r_usuario,r_telefono,r_correo_electronico,r_contraseña} = req.body;
    const nuevosUsuarios={
        r_cedula,
        r_usuario,
        r_telefono,
        r_correo_electronico,
        r_contraseña
    }
    const response = await pool.query('INSERT INTO cliente (cedula_cliente,nombre,telefono,correo_electronico,contrasenha) VALUES ($1, $2, $3, $4, $5)', [r_cedula, r_usuario,r_telefono,r_correo_electronico,r_contraseña]);
    res.redirect('/bicicletas')
}

module.exports = {
    getLogin,
    getRegister,
    getBicicletas,
    postRegister,
    getAlquiler,
    getAlquiler2,
    getAlquiler3,
    getAlquiler4,
    getAlquiler5,
    postLogin
};
