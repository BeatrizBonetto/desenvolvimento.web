import { openDb } from '../configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)');
    })
}

export async function insertUsuario(usuario){
    openDb().then(db=>{
        db.run('INSERT INTO usuario (nome, idade) VALUES (?, ?)', [usuario.nome, usuario.idade]);
    })
}

export async function updateUsuario(usuario){
    openDb().then(db=>{
        db.exec('UPDATE usuario SET nome=?, idade=? WHERE id=?', [usuario.nome, usuario.idade, usuario.id]);
    })
}