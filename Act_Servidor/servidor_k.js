//Escribe un comentario explicando para qué sirve http
//Permite crear servidores web y manejar las peticiones y respuestas entre cliente y servidor.
import http from 'http';
//Escribe un comentario explicando para qué sirve fs
//Permite leer, escribir, modificar y eliminar archivos y directorios del sistema operativo.
import fs from 'fs';
import { stringify } from 'querystring';


    //Esta función deberá mostrar una página HTML
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
          //Escribe qué significa el 500
          //El 500 indica un error interno del servidor, algo salió mal y no pudo completar la solicitud del cliente
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        //El 200 significa que la solicitud del cliente fue recibida y procesada exitosamente
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }


    //Esta función deberá enviar un json con los datos de los usuarios
    function getUsuarios(req, res) {
        //Esto representa un objeto JSON de un usuario
        //Agrega otro usuario
        const usuarios = {
          "usuarios": [
            {
              "nombre": "Punk",
              "saldo": "0",
            },
            {
              "nombre": "Siouxsie",
              "saldo": "1500"
            }
          ]
        };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      //La función stringify convierte un objeto o arreglo de JavaScript a una cadena de texto en formato JSON, se usa porque res.end() solo puede enviar texto, no objetos directamente
      res.end(JSON.stringify(usuarios));
    }

    function mostrarUsuarios(req, res) {
      fs.readFile('usuarios.html', 'utf8', (error, data) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }

    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            console.log("Mostrar Perfil");
        });
      }


      function mostrarMovimientos(req, res) {
        //Construye una página básica movimientos.html
        fs.readFile('movimientos.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      function mostrarEquipo(req, res) {
        fs.readFile('equipo.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }


    //Esta función deberá enviar un json con los datos de los movimientos
    function getMovimientos(req, res) {
    //Tienes que corregir varias cosas en esta sección
      const movimientos = {
        "movimientos": [
          { "tipo": "ingreso", "monto": 500 },
          { "tipo": "egreso",  "monto": 200 },
          { "tipo": "ingreso", "monto": 300 }
        ]
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(JSON.stringify(movimientos));
    }

    function getPrestamos(req, res) {
        const prestamos = {
          "prestamos": [
            {
              "usuario": "Punk",
              "monto": "100",
            },
            {
              "usuario": "Siouxsie",
              "monto": "1000"
            }
          ]
        };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(prestamos));
    }

    function mostrarPrestamos(req, res) {
      fs.readFile('prestamos.html', 'utf8', (error, data) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }


    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('¿Buscando algo? Porque aquí no hay nada... igual que tu búsqueda. 🫥');
    }

    //incluye el enlace a la documentación de createServer
    //https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/usuarios') {
        getUsuarios(req, res);
      } else if (url === '/api/movimientos') {
        getMovimientos(req, res);
      } 
      else if (url === '/usuarios') {
        mostrarUsuarios(req, res);
      } 
      else if (url === '/movimientos') {
        mostrarMovimientos(req, res);
      } 
      else if (url === '/perfil') {
        mostrarPerfil(req, res);
      } 
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      } 
      else if (url === '/prestamos') {
        mostrarPrestamos(req, res);
      } 
      else if (url === '/api/prestamos') {
        getPrestamos(req, res);
      } 
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesional? ¿Para tu vida personal?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south

      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html