import { Router } from "express";
import {createTable, insertUsuario, selectUsuarios, updateUsuario, selectUsuario, deletetUsuario} from './controller/usuario.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json ({
        "statusCode": 200,
        "msg": "Api Rodando."
    })
})

router.get('/usuarios', selectUsuarios);
router.get('/usuario', selectUsuario);
router.post('/usuario', insertUsuario);
router.put('/usuario', updateUsuario);
router.delete('/usuario', deletetUsuario);

export default router;

