const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require('./routes/api');
const cors = require('cors');

const app = express();
const PORT = 3987;

app.use(cors())
app.use(express.static("public"));
app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
