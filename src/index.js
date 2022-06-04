const express = require('express')
const app = express()

function requestLogger(req, res, next) {
  console.log(`[${req.method}] ${req.path}`);
  next();
}

app.use(requestLogger);

app.get('/' , (req, res) => {

  const data = {
    app: process.env.APP_NAME || 'default app',
    method: req.method,
    path: req.path,
    url: req.url,
    body: req.body,
    query: req.query,
  }

  return res.send(data);
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Application started listening on port: ${PORT}`);
});
