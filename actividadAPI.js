import http from 'http';
import { HolidayAPI } from 'holidayapi';


const servidor = http.createServer(async (req, res) => {
  const respuesta = await fetch("https://holidayapi.com/v1/holidays?key=c553f457-e7d2-486d-828b-df33aa640d81&country=US&year=2025&pretty", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "c553f457-e7d2-486d-828b-df33aa640d81"
      }

    });
    const data = await respuesta.json();
    console.log(data);
  console.log("Alguien me mandó una solicitud");
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Quiero la libertad de esculpir y cincelar mi propio rostro, de detener la hemorragia con cenizas, de crear mis propios dioses a partir de mis entrañas...\n');
});

const puerto = 1984;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
