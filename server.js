const app = require('express')();
// const app = express();
require("dotenv").config();
const port = process.env.PUBLIC_PORT || 3000;

// define the ping route
app.get('/ping', (req, res) => {
  res.send('pong');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;