const express = require('express');

const app = express();
const puerto = 3000;

// Ruta para obtener los datos de la API
app.get('/post', async (req, res) => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const publicaciones = await respuesta.json();

        // Extraemos solo el título del primer elemento
        const tituloPost = publicaciones[0].title;

        // Mandamos el HTML al navegador
        res.send(`<h1>${tituloPost}</h1>`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Hubo un problema al conectar con la API');
    }
});

app.listen(puerto, () => {
    console.log(`Servidor activo y escuchando en el puerto ${puerto}...`);
});