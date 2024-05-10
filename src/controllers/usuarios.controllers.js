const catchError = require('../utils/catchError');
const Usuarios = require('../models/Usuarios');

const getAll = catchError(async(req, res) => {
    const results = await Usuarios.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Usuarios.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Usuarios.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Usuarios.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Usuarios.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}



///postgres://cruds_db_user:AxeQePOBwILlWdS4YHJrh69TMh014nRf@dpg-courbkvsc6pc73apl220-a/cruds_db