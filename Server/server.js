import express from 'express';
import mysql from 'mysql'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "",
    database: 'crud'
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM usuarios";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post('/usuarios', (req, res) =>{
    const sql = "INSERT INTO usuarios (nombre, apellido, correo, contraseña) VALUES (?)";
    const values = [
        req.body.nombre,
        req.body.apellido,
        req.body.correo,
        req.body.contraseña,
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.post('/carrito', (req, res) =>{
    const sql = "INSERT INTO carrito (articulo, precio, color, talla, usuario_id) VALUES (?)";
    const values = [
        req.body.articulo,
        req.body.precio,
        req.body.color,
        req.body.talla,
        req.body.id
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

// app.post('/Log', (req, res) => {
//     const sql = "SELECT * FROM usuarios WHERE correo = ? and contraseña = ?";
//     const values = [
//         req.body.correo,
//         req.body.contraseña,
//     ]
//     db.query(sql, [values], (err, result) => {
//         if(err) return res.json({Message: "Error inside server"});
//         return res.json(result);
//     })
// })
app.post('/Log', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?";
    const values = [
        req.body.correo,
        req.body.contraseña,
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            // Si hay un error en la consulta SQL, enviar un mensaje de error al cliente
            return res.status(500).json({ error: "Error interno del servidor" });
        }

        if (result.length > 0) {
            // Si se encuentra el usuario, enviar los datos del usuario al cliente
            return res.json(result);
        } else {
            // Si no se encuentra el usuario, enviar un mensaje de error al cliente
            return res.json({ Message: "usuario no encontrado" });
        }
    });
});



app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM usuarios WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.listen(8081, ()=> {
    console.log("Listening")
})