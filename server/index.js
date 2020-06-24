const express = require('express')
const port = 3001
const app = express()
const ctrl = require('./controllers/controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));


const baseUrl = "/api/messages";
app.post(baseUrl, ctrl.create);
app.get(baseUrl, ctrl.read);
app.put(`${baseUrl}/:id`, ctrl.update);
app.delete(`${baseUrl}/:id`, ctrl.delete);

app.listen(port, () => {
  console.log(`Chillin and grillin on port ${port}`)
})