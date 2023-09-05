const express = require('express');
const cors = require('cors');
const app = express();
const indexRouter = require('./server.js');
const port = 8000;
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(indexRouter);

app.listen(port, () => {
  console.log(`Running server listening at http://localhost:${port}`);
});
