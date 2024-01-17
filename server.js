const express = require('express');
const app = express();

const productos = [
  { id: 1, nombre: 'Cargador iPhone' },
  { id: 2, nombre: 'Cargador Samsung' },
  { id: 3, nombre: 'Auriculares Samsung' },
  { id: 4, nombre: 'Auriculares Inalambricos Xiaomi' },
  { id: 5, nombre: 'Cargador generico 4.8A' },
  { id: 6, nombre: 'Cable USB 3.1A' },
  { id: 7, nombre: 'Cable HDMI 1.5M' },
  { id: 8, nombre: 'Cable VGA 1.5M' },
  { id: 9, nombre: 'Cargador 20W + Cable tipo C iPhone' },
  { id: 10, nombre: 'Cabezal 20W iPhone Original' },
];

app.use(express.json());

app.get('/products', (req, res) => {
  const limit = req.query.limit;
  if (limit) {
    res.json(productos.slice(0, limit));
  } else {
    res.json(productos);
  }
});

// Obtener un producto por ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = productos.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'El producto no existe' });
  }
});

// Iniciar el servidor en el puerto 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
