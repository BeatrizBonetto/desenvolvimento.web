import { openDb } from '../configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)');
    })
}

export async function selectUsuarios(req, res){
     openDb().then(db=>{
         db.all('SELECT * FROM usuario')
        .then(usuarios => res.json(usuarios))
    });
}

export async function selectUsuario(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('SELECT * FROM usuario WHERE id=?', [id])
        .then(usuario => res.json(usuario))
    });
}

export async function insertUsuario(req, res){
    let usuario = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO usuario (nome, idade) VALUES (?, ?)', [usuario.nome, usuario.idade]);
    })
    res.json({
    "statusCode": 200,
    })
}

export async function updateUsuario(req, res){
    let usuario = req.body;
    openDb().then(db=>{
        db.run('UPDATE usuario SET nome=?, idade=? WHERE id=?', [usuario.nome, usuario.idade, usuario.id]);
    })
    res.json({
        "statusCode": 200,
        })
}

export async function deletetUsuario(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('DELETE FROM usuario WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200,
        })
}