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

app.post('/UpdateCheckOut', (req, res) => {
    const sql = "UPDATE carrito SET comprado = 'si' WHERE comprado = 'no' AND usuario_id = ?";
    const id = req.body.id; // Obtener el id del cuerpo de la solicitud
    db.query(sql, [id], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    });
});

app.post('/UpdateCarritoId', (req, res) => {
    const sql = "UPDATE carrito SET usuario_id = ? WHERE usuario_id = 1";
    const id = req.body.id; // Obtener el id del cuerpo de la solicitud
    db.query(sql, [id], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    });
});

app.post('/carrito', (req, res) =>{
    const sql = "INSERT INTO carrito (imagen, articulo, precio, color, talla, comprado, usuario_id) VALUES (?)";
    const values = [
        req.body.imagen,
        req.body.articulo,
        req.body.precio,
        req.body.color,
        req.body.talla,
        req.body.comprado,
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

app.get('/LeerCarrito/:id', (req, res) => {
    const sql = "SELECT * FROM carrito WHERE usuario_id = ? ";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.get('/LeerCheckOut/:id', (req, res) => {
    const sql = "SELECT * FROM carrito WHERE usuario_id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})


app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete('/delete', (req, res) => {
    // Obtiene el ID del artículo a eliminar del parámetro de consulta
    const id = req.query.id;
    db.query('DELETE FROM carrito WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
        // Si la eliminación se realizó con éxito, envía una respuesta de éxito
        return res.status(200).json({ message: 'Artículo eliminado del carrito con éxito' });
    });
});

// app.delete('/delete', (req, res) => {
//     const sql = "DELETE FROM carritos WHERE id = ?";
//     const id = req.params.id;
//     db.query(sql, [id], (err, result) => {
//         if(err) return res.json({Message: "Error inside server"});
//         return res.json(result);
//     })
// })

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