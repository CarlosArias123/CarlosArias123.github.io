import express from 'express';

const app = express();
const puerto = Number(process.env.PORT) || 1984;

// Express me gusta porque permite manejar los datos que vienen del usuario 
// (como el ID del pago) de forma muy directa con req.params. 
// Es mucho más cómodo que andar parseando URLs manualmente.

// Datos de prueba para el reto de Kueski Pay
function obtenerPlanes() {
  return [
    { id: 1, cuotas: '4 quincenas', interes: '0%', descripcion: 'Plan Quincenal' },
    { id: 2, cuotas: '6 meses', interes: '10%', descripcion: 'Plan Mensual' },
    { id: 3, cuotas: '12 meses', interes: '15%', descripcion: 'Plan Extendido' }
  ];
}

// Ruta principal simple
app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a la API de Kueski Pay</h1><p>Usa /planes para ver opciones.</p>');
});

// GET /api/planes: Devuelve todos los planes en JSON
app.get('/api/planes', (req, res) => {
  res.status(200).json(obtenerPlanes());
});

// GET con parámetro: Buscar un plan específico por ID
// Esto cumple con el requisito de "usar parámetros en las rutas"
app.get('/api/planes/:id', (req, res) => {
  const lista = obtenerPlanes();
  const encontrado = lista.find(p => p.id === parseInt(req.params.id));

  if (encontrado) {
    res.status(200).json(encontrado);
  } else {
    res.status(404).send('Plan no encontrado');
  }
});

// Ruta para ver los planes en formato HTML (como en tu ejercicio de mascotas)
app.get('/planes', (req, res) => {
  const items = obtenerPlanes()
    .map((plan) => `<li><strong>${plan.descripcion}</strong>: ${plan.cuotas} con ${plan.interes} de interés.</li>`)
    .join('');

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Planes Kueski</title>
</head>
<body>
  <h1>Opciones de Pago - Kueski Pay</h1>
  <ul>
    ${items}
  </ul>
</body>
</html>`; 
  res.status(200).send(html);
});

app.use(express.json());

// POST para simular que la extensión envía una nueva solicitud de pago
app.post('/api/pago', (req, res) => {
  console.log('Datos del pago recibidos: ', req.body);
  // Express simplifica el envío de estados de respuesta con sendStatus
  res.sendStatus(201);
});

app.listen(puerto, () => {
  console.log(`Servidor de Kueski escuchando en puerto ${puerto}`);
});