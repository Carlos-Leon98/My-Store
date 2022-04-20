const express = require('express');
const routerApi = require("./routes")
const app =  express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hola, mi server en express');
// })

// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola, mi server en un diferente endpoint');
// })

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId
//   })
// });

routerApi(app);

app.listen(port, () => console.log('this app is running in port 3000'));
